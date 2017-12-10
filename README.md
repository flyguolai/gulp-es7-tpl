# gulp 生成模板
用于快速生成适用于es7的gulp模板，以便于快速构建项目
主要依赖于项目中babel进行项目的转换

### 使用到的模块

    "babel-core": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "gulp": "^3.9.1",
    "gulp-babel": "^7.0.0",
    "gulp-browserify": "^0.5.1",
    "gulp-concat": "^2.6.1",
    "gulp-sass": "^3.1.0",
    "gulp-uglify": "^3.0.0"


### 如何使用

	git clone https://github.com/flyguolai/gulp-es7-tpl.git
	cd gulp-es7-tpl
	npm install (请确认npm代理配置完成，否则请搜索cnpm并使用)
	gulp(调试版本)
	gulp build(混淆后的版本)

