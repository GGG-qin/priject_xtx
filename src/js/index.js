let li = document.querySelector('.xtx_navs li:first-child');
// 获取登录栏
let obj = JSON.parse(localStorage.getItem('pink'));

//指示器
let sps = document.querySelectorAll('.indicator span');
if (obj) {
  li.innerHTML = `<a href="#">你好，${obj.uname}</a>`;
}

let image = document.querySelector('.xtx_banner img');
//获取左右侧按钮
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

//左侧导航栏
let lis = document.querySelectorAll('.xtx_category_super li');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseenter', function () {
    //选出唯一的一个 active类  杀掉
    document.querySelector('.xtx_category_super .active').classList.remove('active');
    // 鼠标经过谁，谁加上active类
    this.classList.add('active');
  }
  )
}

let index = 0;  //全局变量  信号量控制器  为了给右侧按钮和左侧按钮同时使用

//右侧按键
next.addEventListener('click', function () { //右侧按钮
  index++;

  //复原操作
  // 需求4：解决一个BUG
  // 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序
  // 解决方案： 让变化量（索引号） 重新赋值为 当前鼠标经过的索引号
  index = index % sps.length;
  console.log(index);
  let src = `./uploads/banner_${index+1}.png`
  image.src=src;
  console.log(image.src);
  // console.log(index)
  common();
})

//左侧按钮
prev.addEventListener('click', function () { //右侧按钮
  index--;

  //复原操作
  // 需求4：解决一个BUG
  // 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序
  // 解决方案： 让变化量（索引号） 重新赋值为 当前鼠标经过的索引号
  index = (sps.length + index) % sps.length;
  console.log(index);
  let src = `./uploads/banner_${index+1}.png`
  image.src=src;
  console.log(image.src);
  // console.log(index)
  common();
})


//指示器
for (let i = 0; i < sps.length; i++) {
  sps[i].addEventListener('mouseenter', function () {
    //选出唯一的一个 active类  杀掉
    document.querySelector('.indicator .active').classList.remove('active');
    // 鼠标经过谁，谁加上active类
    this.classList.add('active');
    let src = `./uploads/banner_${i+1}.png`
    image.src=src;

  }
  )
}

function common() {
  //选出 index 小图片做操作
  //选出唯一的一个 active类  杀掉
  document.querySelector('.indicator .active').classList.remove('active');
  sps[index].classList.add('active')

  let src = `./uploads/banner_${index+1}.png`
  image.src=src;
  //选出 index 大图片做操作
}

//轮播图

// 需求7：开启定时器
// 其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， next.click()
let timer = setInterval(function () {
  next.click();
}, 3000);

// 鼠标经过停止定时器 （清除定时器）
// 鼠标离开开启定时器 （开启定时器）
image.addEventListener('mouseenter', function () {
  clearInterval(timer);
})
image.addEventListener('mouseleave', function () {
  timer = setInterval(function () {
      next.click();
  }, 3000);
})

