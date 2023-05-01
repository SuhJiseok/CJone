// main.js

/* 고객센터 */
//toggle()
//title="고객센터 열기" ->title="고객센터 닫기"
const topMenuDD = document.querySelectorAll('dl.topMenu > dd');
topMenuDD[4].addEventListener('click', e=>{
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.childern[0].setAttribute("title","고객센터 닫기");
  } else {
    e.currentTarget.childern[0].setAttribute("title", "고객센터 열기");
  }
})

// 주메뉴
const wraps = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const subMenu = document.querySelectorAll(".gnb>ul>li>ul");
const customer = document.querySelector("dl.topMenu > dd:nth-of-type(5)")

for(let i=0;i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover",()=>{

    // 고객센터에 on붙어 있으면 고객센터의 on을 지운다
    if(customer.classList.contains("on")){
      customer.classList.remove("on")
    }
        // 검색박스에 on붙어 있으면 검색박스의 on을 지운다
    if(srchOpen.classList.contains("on")){
      srchOpen.classList.remove("on");
      srchBox.classList.remove("on");
    }
    wraps.classList.add("on");
    for(let i=0;i<subMenu.length;i++){
      subMenu[i].classList.add("on");
    }
  })
  gnbMenu[i].addEventListener("mouseout",()=>{
    wraps.classList.remove("on");
    for(let i=0;i<subMenu.length;i++){
      subMenu[i].classList.remove("on");
    }
  })


gnbMenu[i].children[0].addEventListener('blur', ()=>{
  wraps.classList.remove("on");
  subMenu.forEach(item =>{
    item.classList.remove("on")
  })
})
}
//검색열기닫기

const srchbtn = document.querySelector(".srch_open") 
const formsrch = document.querySelector(".srch")
srchbtn.addEventListener("click",e=>{
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    formsrch.classList.add("on")
  }else{
    formsrch.classList.remove("on")
  }

})

// 로그인 이미지
// a.appear 안에 img 000 00 .png ~ 0056.png
//a.loop 안에 img 000 00 ~ 000 81.png
const appear = document.querySelector(".login>.appear");
const loop = document.querySelector(".login>.loop");
for(let i=0; i<57; i++){
  if(i<10){
    appear.innerHTML += `<img src="img/appear/appear_0000${i}.png" alt="cjone"/>`;
  }else {
    appear.innerHTML += `<img src="img/appear/appear_000${i}.png" alt="cjone" />`;
  }
}
for(let i=0; i<82; i++){
  if(i<10){
    loop.innerHTML += `<img src="img/loop/loop_0000${i}.png" alt="cjone" />`
  }else {
    loop.innerHTML += `<img src="img/loop/loop_000${i}.png" alt="cjone" />`
  }
}

// 로그인 애니메이션
// appear 0~56 이미지 각각에 animation 속성 적용
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.1s 1;
// animation: ani 2.85s linear 2.8s 1;

// loop 0~81 이미지 각각에 animation 속성적용
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.9s infinite;
// animation: ani 4.1s linear 2.95s infinite;
const appearimg = document.querySelectorAll(".login>.appear>img")
const loopimg = document.querySelectorAll(".login>.loop>img")
const delay = 0.05;
for(let i=0;i<57;i++){
  appearimg[i].style.animation=`ani 2.85s linear ${i*delay}s 1`
}
for(let j=0;j<loopimg.length;j++){
  loopimg[j].style.animation=`ani 4.1s linear ${2.85+(j*delay)}s infinite`
}
// content1 - 퀵메뉴 이미지 생성
// for()문 이용해서 <img> 를 quick01_00000.png~quick01_00019.png 생성
// <span> 안에 넣기

// let quickimg1 =''
// let quickimg2 =''
// let quickimg3 =''
// let quickimg4 =''

// for(let i=0;i<20;i++){
//   if(i<10){
//   quickimg1 += `<img src="img/quick01/quick01_0000${i}.png"/>`
//   }else{
//   quickimg1 += `<img src="img/quick01/quick01_000${i}.png"/>`
//   }
// }
// document.querySelector("span.quick1").innerHTML = quickimg1

// for(let i=0;i<20;i++){
//   if(i<10){
//   quickimg2 += `<img src="img/quick02/quick02_0000${i}.png"/>`
//   }else{
//   quickimg2 += `<img src="img/quick02/quick02_000${i}.png"/>`
//   }
// }
// document.querySelector("span.quick2").innerHTML = quickimg2

// for(let i=0;i<20;i++){
//   if(i<10){
//   quickimg3 += `<img src="img/quick03/quick03_0000${i}.png"/>`
//   }else{
//   quickimg3 += `<img src="img/quick03/quick03_000${i}.png"/>`
//   }
// }
// document.querySelector("span.quick3").innerHTML = quickimg3

// for(let i=0;i<20;i++){
//   if(i<10){
//   quickimg4 += `<img src="img/quick04/quick04_0000${i}.png"/>`
//   }else{
//   quickimg4 += `<img src="img/quick04/quick04_000${i}.png"/>`
//   }
// }
// document.querySelector("span.quick4").innerHTML = quickimg4

const quickSpans = document.querySelectorAll('.content1 span');
for (let i = 0; i < quickSpans.length; i++) {
  const quickSpan = quickSpans[i];
  let quickImg = '';
  for (let j = 0; j < 20; j++) {
    const index = j < 10 ? `0000${j}` : `000${j}`;
    const fileName = quickSpan.classList[0];
    quickImg += `<img src="img/${fileName}/${fileName}_${index}.png" alt="cjlogo" />`;
  }
  quickSpan.innerHTML = quickImg;
}


const content1li = document.querySelectorAll(".content1 ul li");

for(let i=0;i<content1li.length;i++){
  content1li[i].addEventListener("mouseover",e=>{
    for(let k=0; k < 20; k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation= `ani 1s linear ${0.04 * k}s 1`
    }
  })
  content1li[i].addEventListener("mouseleave",e=>{
    for(let k=0; k < 20; k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation= "none"
    }
  })
}

//배너
//next 버튼을 눌렀을때
//배너번호 1증가
//배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
//배너프레임의 left 값 변경해서 배너 움직이게

/*const bannerFrame = document.querySelector('.banner_frame');
const sections = bannerFrame.querySelectorAll('section');
const arrows = document.querySelectorAll('.arrow > a');

let currentSection = 1;
let bannerFrameLeft = 0;

// Next 버튼 클릭 시
arrows[1].addEventListener('click', function() {
  currentSection++;
  if (currentSection >= sections.length) {
    currentSection = 0;
  }
  bannerFrameLeft = -currentSection * 100;
  bannerFrame.style.left = bannerFrameLeft + '%';
});

// Prev 버튼 클릭 시
arrows[0].addEventListener('click', function() {
  currentSection--;
  if (currentSection < 0) {
    currentSection = sections.length - 1;
  }
  bannerFrameLeft = -currentSection * 100;
  bannerFrame.style.left = bannerFrameLeft + '%';
});
↓↓↓↓↓↓↓↓↓간단하게 ↓↓↓↓↓↓↓↓↓↓      */


const arrows = document.querySelectorAll('.arrow > a');

const bnnSection = document.querySelectorAll(".banner_frame>section")
const rolling = document.querySelectorAll(".banner_roll>li")


document.addEventListener('DOMContentLoaded', function () {
  const bnnFrame = document.querySelector('.banner_frame');
  const btnPrev = document.querySelector('.arrow .prev');
  const btnNext = document.querySelector('.arrow .next');
  const play = document.querySelector('.rolling .play');
  const bnn_rollA = document.querySelectorAll('.banner_roll li a');

  let currentSlide = 0;
  let autoPlay = true;
  let isAnimating = false;

  function updateSlide(index) {
    if (isAnimating) return;
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
    }, 900);

    currentSlide = (index + bnn_rollA.length) % bnn_rollA.length;
    bnnFrame.style.left = `-${currentSlide * 100}%`;
    bnn_rollA.forEach((button, i) => button.classList.toggle('on', i === currentSlide));
  }

  function toggleAutoPlay() {
    autoPlay = !autoPlay;
    play.classList.toggle('pause', !autoPlay);
    autoPlay ? startAutoPlay() : clearInterval(autoPlayInterval);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => updateSlide(currentSlide + 1), 3000);
  }

  btnPrev.onclick = () => updateSlide(currentSlide - 1);
  btnNext.onclick = () => updateSlide(currentSlide + 1);
  play.onclick = toggleAutoPlay;
  bnn_rollA.forEach((button, index) => button.onclick = () => updateSlide(index));

  startAutoPlay();
});










// section에 .white가 있으면 각요소에 .white 붙이기


// 스크롤 이벤트
window.addEventListener('scroll', () =>{
  let scroll = document.querySelector('html').scrollTop;

  // 도넛 _ 뒤에 *는 속도 조절 
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
  const combine_Left = document.querySelector(".combine_Left");

  combine_Left.style.top = `${scroll*0.7}px`;
  doughnut_Left_s.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;
})




// content3
// li하나 하나에 마우스 오버하면 li에 .on이 붙어라 마우스 아웃하면 .on을 지워라

const all = document.querySelectorAll(".content3_inner>div>ul>li"); //전체 li 26개

all.forEach(item =>{
  item.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  });
  item.addEventListener('mouseout', e =>{
    e.currentTarget.classList.remove('on');
  });
});

const group = document.querySelectorAll(".content3_inner>ul>li>a");
const liss = document.querySelectorAll(".content3_inner>div>ul>li"); //li 26개
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");
// 대분류
// - 각 클래스이름에 해당되는 li만 따로 모아서 저장하고
// - 모든 li 화면에 안보이게 하고
// 대분류 li a 하나하나를 클릭했을때
// li a 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클래스 이름에 해당되는 li만 또로 모아서 저장해놓고
for(let i=0;i<group.length;i++){
  group[i].addEventListener("click",e=>{
    e.preventDefault();
    group.forEach(item=>{
      item.classList.remove("on")
    });
    e.currentTarget.classList.add("on")
    liss.forEach(item=>{
      item.style.display = "none";
    });
    let className = e.currentTarget.parentElement.getAttribute("class");
    switch(className){
      case "all" :
          liss.forEach(item=>{
            item.style.display = "block";
          })
            break;
      case "ent" :
          ent.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "shop" :
          shop.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "diner" :
          diner.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "box" :
          box.forEach(item=>{
            item.style.display = "block";
          });
            break;
    }
  })
}




// footer js 하기
const family = document.querySelector('.footer_inner>dl>dd.family_site');
console.log(family.children[0]);
family.addEventListener('click', e =>{
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title','닫기');
  }else{
    e.currentTarget.children[0].setAttribute('title', '열기');
  }
})



// top버튼도 하기

// 스크롤 top | top버튼
// 탑을 누르면 스크롤이(스크롤위치0) 맨위로 올라감
// 스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜

const btnTop = document.querySelector(".footer_inner>div.top");

// 클릭하면 스크롤이 맨위로 올라감
btnTop.addEventListener("click", e =>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
})


window.addEventListener("scroll", () =>{
  let scroll = document.querySelector("html").scrollTop;
  //let scroll = window.pageYoffset;
  console.log(scroll);
  if(scroll <= 100){
    btnTop.classList.remove("on","hi");
  }else if(scroll >2400){
    btnTop.classList.add("hi");
    btnTop.classList.add("on");
  }else{
    btnTop.classList.remove("hi");
    btnTop.classList.add("on");
  }
})




// content1
// li에 마우스 올렸을 때 이미지에 애니메이션 적용
//  마우스 뗏을 때 이미지에 애니메이션 삭제 

// 햄버거버튼 클릭
// 1. div.mob.on
// 2. div.mobBtn_close.on
// 3. body.on,div.bg.on
const mobBtn = document.querySelector(".mobBtn")
const mob = document.querySelector(".mob")
const body = document.querySelector("body")
const bg = document.querySelector(".bg")
const mobBtnclose = document.querySelector(".mobBtn_close")
mobBtn.addEventListener("click",(e)=>{
  e.preventDefault;
  mob.classList.add("on");
  body.classList.add("on");
  bg.classList.add("on");
  mobBtnclose.classList.add("on");
})

// 모바일 닫기 클릭
mobBtnclose.addEventListener("click",(e)=>{
  e.preventDefault;
  mob.classList.remove("on");
  body.classList.remove("on");
  bg.classList.remove("on");
  mobBtnclose.classList.remove("on");
})

// 모바일 탑메뉴,주메뉴 
const mobTopBtn = document.querySelectorAll(".mob_topMenu>dd")
console.log(mobTopBtn)
const cscenter = document.querySelector(".mob_topMenu>dd>ul")
console.log(cscenter)
mobTopBtn[4].addEventListener("click",(e)=>{
  e.preventDefault;
  if(cscenter.classList.contains("on")){
  cscenter.classList.remove("on");
  }else{
  cscenter.classList.add("on"); 
  }
})

const mob_gnb = document.querySelectorAll(".mob_gnb>ul>li")
console.log(mob_gnb)
const mob_sub = document.querySelectorAll(".mob_gnb>ul li ul")
console.log(mob_sub)
const mob_span = document.querySelectorAll(".mob_gnb>ul li span")

for(let i=1;i<mob_gnb.length;i++){
  mob_gnb[i].addEventListener("click",(e)=>{
    e.preventDefault;
    if(mob_sub[i-1].classList.contains("on")){
      mob_sub[i-1].classList.remove("on");
      mob_span[i-1].classList.remove("on");
    }else{
      mob_sub[i-1].classList.add("on")
      mob_span[i-1].classList.add("on")
    }
  })
}


