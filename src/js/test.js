// 分析：
//     需求1：小图标鼠标经过事件
//     鼠标经过小图片，当前高亮，其余兄弟变淡 添加类

//获取元素
let lis = document.querySelectorAll('.indicator li');//指示器
let piclis = document.querySelectorAll('.slides ul li');//主图
let text = document.querySelector('.extra h3');
let next = document.querySelector('.next');//右侧按钮
let prev = document.querySelector('.prev');//左侧按钮
let main = document.querySelector('.main');
//给多个小li绑定事件
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
        //选出唯一的一个 active类  杀掉
        document.querySelector('.indicator .active').classList.remove('active');
        // 鼠标经过谁，谁加上active类
        this.classList.add('active');

        //     需求2 ：大图片跟随变化
        //     对应的大图片跟着显示，如果想要过渡效果，可以使用opacity效果，可以利用CSS淡入
        //     淡出的效果，还是添加类

        //选出唯一的一个 active类  杀掉
        document.querySelector('.slides ul .active').classList.remove('active');
        // 鼠标经过谁，对应的图片加上active类
        piclis[i].classList.add('active');
        text.innerHTML = `第${i + 1}张图的描述信息`
        index = i;  //索引号赋值给信号量
    })
}

//     需求3：右侧按钮播放效果
//     点击右侧按钮，可以自动播放下一张图片
//     需要一个变化量 index 不断自增
//     然后播放下一张图片
//     如果到了最后一张，必须要还原为第1张图片
//     教你一招： 索引号 = 索引号 % 数组长度 （放到播放前面）

let index = 0;  //全局变量  信号量控制器  为了给右侧按钮和左侧按钮同时使用
next.addEventListener('click', function () { //右侧按钮
    index++;

    //复原操作
    // console.log(index);
    // if(index === 10){
    //     index = 0;
    // }

    // 需求4：解决一个BUG
    // 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序
    // 解决方案： 让变化量（索引号） 重新赋值为 当前鼠标经过的索引号

    index = index % lis.length;

    console.log(index)
    common();
})


// 需求5：左侧按钮播放效果
// 点击左侧按钮，可以自动播放上一张图片
// 需要一个变化量 index 不断自减
// 然后播放上一张图片
// 如果到了第一张，必须要从最后一张播放
// 教你一招： 索引号 = (数组长度 + 索引号) % 数组长度

prev.addEventListener('click', function () {//左侧按钮
    index--;

    //复原操作
    // console.log(index);
    // if(index < 0){
    //     index = lis.length - 1;
    // }
    index = (lis.length + index) % lis.length;

    // 需求4：解决一个BUG
    // 点击左侧按钮可以实现播放上一张，但是鼠标经过前面的，播放就会乱序
    // 解决方案： 让变化量（索引号） 重新赋值为 当前鼠标经过的索引号

    // console.log(index)
    common();
})

// 需求6：
// 因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数 common
function common() {
    //选出 index 小图片做操作
    //选出唯一的一个 active类  杀掉
    document.querySelector('.indicator .active').classList.remove('active');
    lis[index].classList.add('active')
    //选出唯一的一个 active类  杀掉
    document.querySelector('.slides ul .active').classList.remove('active');
    piclis[index].classList.add('active');
    text.innerHTML = `第${index + 1}张图的描述信息`

    //选出 index 大图片做操作
}

// 需求7：开启定时器
// 其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， right.click()
let timer = setInterval(function () {
    next.click();
}, 2000);

// 需求8：
// 鼠标经过停止定时器 （清除定时器）
// 鼠标离开开启定时器 （开启定时器）
main.addEventListener('mouseenter', function () {
    clearInterval(timer);
})
main.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
        next.click();
    }, 2000);
})