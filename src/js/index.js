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
    document.querySelector('.xtx_category_super .active').classList.remove('active');
    this.classList.add('active');
  }
  )
}

let index = 0;  //信号量控制器

//右侧按键
next.addEventListener('click', function () { //右侧按钮
  index++;

  //复原操作
  index = index % sps.length;
  let src = `./uploads/banner_${index+1}.png`
  image.src=src;
  common();
})

//左侧按钮
prev.addEventListener('click', function () { //右侧按钮
  index--;
  index = (sps.length + index) % sps.length;
  let src = `./uploads/banner_${index+1}.png`
  image.src=src;
  common();
})


//指示器
for (let i = 0; i < sps.length; i++) {
  sps[i].addEventListener('mouseenter', function () {
    document.querySelector('.indicator .active').classList.remove('active');
    this.classList.add('active');
    let src = `./uploads/banner_${i+1}.png`
    image.src=src;

  }
  )
}

function common() {
  document.querySelector('.indicator .active').classList.remove('active');
  sps[index].classList.add('active')
  let src = `./uploads/banner_${index+1}.png`
  image.src=src;
}

//轮播图

let timer = setInterval(function () {
  next.click();
}, 3000);

image.addEventListener('mouseenter', function () {
  clearInterval(timer);
})
image.addEventListener('mouseleave', function () {
  timer = setInterval(function () {
      next.click();
  }, 3000);
})

