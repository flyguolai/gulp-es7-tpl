var fs = require('fs')
    gulp = require('gulp')
    sass = require('gulp-sass')
    babel = require('gulp-babel')
    uglify = require('gulp-uglify')
    concat = require('gulp-concat')
    //这是将需要require代码转换为浏览器端可运行的代码所需的模块
    browserify = require('gulp-browserify')

gulp.task('sass',function(){
    return emptyDirAsync('css',function(){
        return gulp
            .src('sass/**/*.scss')
            .pipe(sass().on('error',sass.logError))
            .pipe(concat('index.min.css'))
            .pipe(gulp.dest('css'));
    })
    
})

gulp.task('dev',function(){
    return emptyDirAsync('dist',function(){
        return gulp
            .src('js/**/*.js')
            .pipe(babel())
            .pipe(concat('index.min.js'))    
            .pipe(browserify())
            .pipe(gulp.dest('dist'))
    }) 
})

gulp.task('uglify',function(){
    return gulp
            .src('js/**/*.js')
            .pipe(babel())
            .pipe(uglify())
            .pipe(concat('index.min.js'))
            .pipe(browserify())
            .pipe(gulp.dest('dist'))
        })

gulp.task('default',['sass','dev']);  

gulp.task('build',['sass','uglify'])

/**
 * 依赖于node的fs模块
 * 原理是对文件夹里的文件递归删除，然后删除空文件夹
 * 异步版本
 * @param {*String} path 
 * @param {*function} callback 
 */
function emptyDirAsync(path,callback){
    fs.readdir(path,function(error,files){
        files.map(function(v,k){
            var _path = path+'/'+v;
            fs.stat(_path,function(error,stats){
                stats.isDirectory() ? emptyDir(_path) : fs.unlinkSync(_path)
            });
        })
    })

    return callback? callback():null;
}

/**
 * 依赖于node的fs模块
 * 原理是对文件夹里的文件递归删除，然后删除空文件夹
 * 同步版本
 * @param {*String} path 
 * @param {*function} callback 
 */
function emptyDir(path,callback){
    var files = fs.readdirSync(path)

    files.map(function(v,k){
        var _path = path+'/'+v;
        var stats = fs.statSync(_path);
        stats.isDirectory() ? emptyDir(_path) : fs.unlinkSync(_path)
    })

    return callback? callback():null;
}
