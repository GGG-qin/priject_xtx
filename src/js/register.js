    // (function(){}())  //立即执行函数写法
    (function(){//发送验证码模块
        // 需求1： 发送验证码
          // 用户点击之后，显示 05秒后重新获取
          // 时间到了，自动改为 重新获取
          let code = document.querySelector('.code');
          code.addEventListener('click',function(){
            //倒计时读秒操作
            this.innerHTML=`05秒后重新获取`;
            let num = 5;
            let timer= setInterval(function(){
              num--;
              code.innerHTML=`0${num}秒后重新获取`;
              if(num==0){
                code.innerHTML = `重新获取`
                //清除定时器
                clearInterval(timer);
              }
            },1000)
          })
    
          // 需求2： 用户名验证（注意封装函数  verifyxxx）
          // 正则 /^ [a - zA - Z0 - 9 - _]{ 6, 10 } $ /
          // 如果不符合要求，则出现提示信息  并 return false 
          // 否则 则返回return true  
          // 之所以返回 布尔值，是为了 最后的提交按钮做准备
          // [name=username]  css 属性选择器
          let username = document.querySelector('[name=username]')
          // console.log(username)
          // 鼠标离开需要验证， 点击下一步也需要验证，那我们为何不封装一个函数呢？ 
          username.addEventListener('change', verifyUsername);
          // 验证用户名的函数
          function verifyUsername() {
            // console.log(11)
            let span = username.nextElementSibling
            // 开始验证  正则  1. 定义规则  2. 检测  
            let reg = /^[a-zA-Z0-9-_]{6,10}$/
            if (!reg.test(username.value)) {
              // console.log('wrong')
              span.innerHTML = '请输入6~10的字符'
              return false;
            }
            // console.log('right')
            span.innerHTML = ''
            return true;
          }
    
        // 需求3： 手机号验证
          // 正则: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
          // 其余同上
          let phone = document.querySelector('[name=phone]');
          phone.addEventListener('change',verifyPhone);
          function verifyPhone(){//手机号验证
            let span = phone.nextElementSibling
            let reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
            if(!reg.test(phone.value)){
              span.innerHTML = '请输入正确的手机号';
              return false;
            }
            span.innerHTML='';
            return true;
            // console.log('right')
          }
    
        // 需求4： 验证码验证
          // 正则 /^\d{6}$/
          // 其余同上
          let codeInput = document.querySelector('input[name=code]');
          codeInput.addEventListener('change',verifyCode);
          function verifyCode(){//验证码验证
            let span = codeInput.nextElementSibling
            let reg = /^\d{6}$/;
            if(!reg.test(codeInput.value)){
              span.innerHTML = '验证码错误';
              return false;
            }
            span.innerHTML='';
            return true;
            // console.log('right')
          }
          
        // 需求5： 密码验证
          // 正则 /^[a-zA-Z0-9-_]{6,20}$/
          // 其余同上
          let pass = document.querySelector('input[name=password]');
          pass.addEventListener('change',verifyPass);
          function verifyPass(){//密码验证
            let span = pass.nextElementSibling
            let reg = /^[a-zA-Z0-9-_]{6,20}$/;
            if(!reg.test(pass.value)){
              span.innerHTML = '请输入6~20位字符,仅可以由数字、字母、下划线、短横线组成';
              return false;
            }
            span.innerHTML='';
            return true;
            // console.log(pass.value)
          }
    
        // 需求6： 再次密码验证
          // 如果本次密码不等于上面输入的密码则返回错误信息
          // 其余同上
          let confirm = document.querySelector('input[name=confirm]');
          confirm.addEventListener('change',verifyConfirm);
          function verifyConfirm(){
            let span = confirm.nextElementSibling;
            if(confirm.value != pass.value){
              span.innerHTML = '请输入正确的密码';
              return false;
            }
            span.innerHTML = '';
            return true;
          }
    
        // 需求7： 我同意模块
          // 添加类 .icon-queren2 则是默认选中样式
          let icon = document.querySelector('.icon-queren');
          icon.addEventListener('click',function(){
            this.classList.toggle('icon-queren2');
          })
    
        // 需求8： 提交按钮模块
          // 使用 submit 提交事件
          // 如果上面的每个模块，返回的是 false 则 阻止提交
          // 如果没有勾选同意协议，则提示 需要勾选
          // 在提交之前先验证
          let form = document.querySelector('form');
          form.addEventListener('submit',function(e){
            // console.log(11);
            //怎么阻止提交  （怎么阻止默认行为）
            //如果没有验证成功，不允许提交 阻止提交行为
            // let flag = verifyCode() && verifyConfirm() && verifyPass && verifyUsername() && verifyPhone();  //不用，只要有一个false则后面的不执行
            if(!verifyCode()){
              //阻止提交
              e.preventDefault();
            }
    
            if(!verifyUsername()){
              //阻止提交
              e.preventDefault();
            }
            
            if(!verifyPhone()){
              //阻止提交
              e.preventDefault();
            }
    
            if(!verifyPass()){
              //阻止提交
              e.preventDefault();
            }
    
            if(!verifyConfirm()){
              //阻止提交
              e.preventDefault();
            }
            //勾选模块  必须勾选才能通过
            // classList.contains()  //看看有没有包含某个类
            // contains//包含
            if(!icon.classList.contains('icon-queren2')){
              alert('请勾选同意《用户服务协议》！');
              e.preventDefault();
            }
            let obj = {
              uname: username.value,
              password: password.value,
            }
            localStorage.setItem('pink', JSON.stringify(obj));
            document.location.href='./login.html'
          })
    
        }())
    