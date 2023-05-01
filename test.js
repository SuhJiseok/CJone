// document.addEventListener('DOMContentLoaded', function () {
//   const bannerFrame = document.querySelector('.banner_frame');
//   const prevButton = document.querySelector('.arrow .prev');
//   const nextButton = document.querySelector('.arrow .next');
//   const playButton = document.querySelector('.rolling .play');
//   const bannerRoll = document.querySelectorAll('.banner_roll li a');
  
//   let currentSlide = 0;
//   let autoPlay = true;
//   let autoPlayInterval;

//   function updateRollingButtons() {
//     bannerRoll.forEach((button, index) => {
//       if (index === currentSlide) {
//         button.classList.add('on');
//       } else {
//         button.classList.remove('on');
//       }
//     });
//   }

//   function goToSlide(index) {
//     currentSlide = index;
//     if (currentSlide < 0) {
//       currentSlide = bannerRoll.length - 1;
//     } else if (currentSlide >= bannerRoll.length) {
//       currentSlide = 0;
//     }
//     bannerFrame.style.left = `-${currentSlide * 100}%`;
//     updateRollingButtons();
//   }

//   function startAutoPlay() {
//     if (!autoPlay) return;
//     autoPlayInterval = setInterval(() => {
//       goToSlide(currentSlide + 1);
//     }, 3000);
//   }

//   function stopAutoPlay() {
//     clearInterval(autoPlayInterval);
//   }

//   prevButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     stopAutoPlay();
//     goToSlide(currentSlide - 1);
//     startAutoPlay();
//   });

//   nextButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     stopAutoPlay();
//     goToSlide(currentSlide + 1);
//     startAutoPlay();
//   });

//   playButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     autoPlay = !autoPlay;
//     if (autoPlay) {
//       playButton.classList.remove('pause');
//       startAutoPlay();
//     } else {
//       playButton.classList.add('pause');
//       stopAutoPlay();
//     }
//   });

//   bannerRoll.forEach((button, index) => {
//     button.addEventListener('click', (e) => {
//       e.preventDefault();
//       stopAutoPlay();
//       goToSlide(index);
//       startAutoPlay();
//     });
//   });

//   startAutoPlay();
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const bannerFrame = document.querySelector('.banner_frame');
//   const prevButton = document.querySelector('.arrow .prev');
//   const nextButton = document.querySelector('.arrow .next');
//   const playButton = document.querySelector('.rolling .play');
//   const bannerRoll = document.querySelectorAll('.banner_roll li a');
  
//   let currentSlide = 0;
//   let autoPlay = true;

//   function updateSlide(index) {
//     currentSlide = (index + bannerRoll.length) % bannerRoll.length;
//     bannerFrame.style.left = `-${currentSlide * 100}%`;
//     bannerRoll.forEach((button, i) => button.classList.toggle('on', i === currentSlide));
//   }

//   function toggleAutoPlay() {
//     autoPlay = !autoPlay;
//     playButton.classList.toggle('pause', !autoPlay);
//     autoPlay ? startAutoPlay() : clearInterval(autoPlayInterval);
//   }

//   function startAutoPlay() {
//     autoPlayInterval = setInterval(() => updateSlide(currentSlide + 1), 3000);
//   }

//   prevButton.onclick = () => updateSlide(currentSlide - 1);
//   nextButton.onclick = () => updateSlide(currentSlide + 1);
//   playButton.onclick = toggleAutoPlay;
//   bannerRoll.forEach((button, index) => button.onclick = () => updateSlide(index));

//   startAutoPlay();
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const bannerFrame = document.querySelector('.banner_frame');
//   const prevButton = document.querySelector('.arrow .prev');
//   const nextButton = document.querySelector('.arrow .next');
//   const playButton = document.querySelector('.rolling .play');
//   const bannerRoll = document.querySelectorAll('.banner_roll li a');



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
