   
    (function(){
          let code = document.querySelector('.code');
          code.addEventListener('click',function(){
            this.innerHTML=`05秒后重新获取`;
            let num = 5;
            let timer= setInterval(function(){
              num--;
              code.innerHTML=`0${num}秒后重新获取`;
              if(num==0){
                code.innerHTML = `重新获取`
                clearInterval(timer);
              }
            },1000)
          })
    
          let username = document.querySelector('[name=username]')
          username.addEventListener('change', verifyUsername);
          function verifyUsername() {
            let span = username.nextElementSibling
            let reg = /^[a-zA-Z0-9-_]{6,10}$/
            if (!reg.test(username.value)) {
              span.innerHTML = '请输入6~10的字符'
              return false;
            }
            span.innerHTML = ''
            return true;
          }
    
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
          }
    
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
          }
          
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
          }
    
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
    
          let icon = document.querySelector('.icon-queren');
          icon.addEventListener('click',function(){
            this.classList.toggle('icon-queren2');
          })
    
          let form = document.querySelector('form');
          form.addEventListener('submit',function(e){
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
            if(!icon.classList.contains('icon-queren2')){
              alert('请勾选同意《用户服务协议》！');
              e.preventDefault();
            }
            e.preventDefault();
            let obj = {
              uname: username.value,
              password: pass.value,
            }
            localStorage.setItem('pink', JSON.stringify(obj));
            document.location.href='./login.html'
          })
    
        }())
    