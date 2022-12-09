
// tip.innerHTML=`现在是${}:${}:${}`
let main = document.querySelector('.countdown');
let day = document.querySelector('#day');
let hour = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let second = document.querySelector('#second');
let cal = document.querySelector('#cal');
let tip = document.querySelector('#tip')

Calendar();
setInterval(Calendar,1000);

function Calendar (){
    let datetime = new Date();
    let year = datetime.getFullYear();
    let month = datetime.getMonth()+1;
    let date = datetime.getDate();

    
    // 1.得到现在的时间戳 
    let now = +new Date();
    // 2.得到指定时间的时间戳
    let last = +new Date('2023-1-1 00:00:00').getTime();
    // 3.（计算剩余的毫秒数）/ 1000 ===剩余的秒数
    let count = (last-now) / 1000;
    // console.log(count)
    // console.log(last)

    // 4.转换为时分秒
    let d=parseInt(count/60/60/24);
    d = d < 10 ? '0' + d : d;            //     d=parseInt(总秒数/60/60/24);  //计算天数
    let h=parseInt(count/60/60%24);  
    h = h < 10 ? '0' + h : h;      
                //     h=parseInt(总秒数/60/60%24);  //计算小时
    let m=parseInt(count/60%60);
    m = m < 10 ? '0' + m : m;
                //     m=parseInt(总秒数/60%60);     //计算分数
    let s=parseInt(count%60);
    s = s < 10 ? '0' + s : s;
                //     s=parseInt(总秒数%60);        //计算当前秒数
    // console.log(h,m,s);

    // 当前时间
    
    let N = now /1000;
    // console.log(N)
    let Nh=parseInt(N/60/60%24)+8;
    // console.log(Nh)  
    Nh = Nh < 10 ? '0' + Nh : Nh;      
                //     h=parseInt(总秒数/60/60%24);  //计算小时
    let Nm=parseInt(N/60%60);
    Nm = Nm < 10 ? '0' + Nm : Nm;
                //     m=parseInt(总秒数/60%60);     //计算分数
    let Ns=parseInt(N%60);
    Ns = Ns < 10 ? '0' + Ns : Ns;
                //     s=parseInt(总秒数%60);        //计算当前秒数

    // 写入倒计时
    day.innerHTML = d;
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML =s;
    cal.innerHTML=`今天是${year}年${month}月${date}日`;
    tip.innerHTML=`现在是${Nh}:${Nm}:${Ns}`;
}

main.addEventListener('dblclick',()=>{
    main.style.display="none"
})