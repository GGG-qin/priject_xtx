let dl = document.querySelector('.dl');
//登录按钮
let remember = document.querySelector('.remember');
//复选框
let username = document.querySelector('[name=username]');
let password = document.querySelector('[name=password]');
dl.addEventListener('click', function (e) {
  if (!remember.checked) {
    alert('请阅读并勾选《服务条款》');
    return;

  }
  if(username.value==''){
    return;
  }
  if(password.value == ''){
    return;
  }
  let obj = {
    uname: username.value,
    password: password.value,
  }

  localStorage.setItem('pink', JSON.stringify(obj));
  //存储到本地
  e.preventDefault();
  document.location.href = "./index.html";
})

// 打开页面时候，如果本地存储有数据， 则自动记录显示用户名和密码，并勾选复选框
let obj = JSON.parse(localStorage.getItem(`pink`));
if (obj) {
  username.value = obj.uname;
  password.value = obj.password;
  remember.checked = true;
}