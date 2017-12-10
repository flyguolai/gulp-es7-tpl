import { setTimeout } from "timers";

async function fun1(){
    console.log('fun1 start')
    await fun2()
    console.log('fun1 end')
    return
}

async function fun2(){
    console.log('fun2',1)
    setTimeout(function(){console.log('settimeout'),1000})
    console.log('fun2',2)
    return  
}

fun1();