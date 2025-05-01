$(function () {
  /******************** header ********************** */

  const HeaderimgSources = {
    sub1: [
      "./images/sub/sub101.png",
      "./images/sub/sub102.png",
      "./images/sub/sub103.jpg",
      "./images/sub/sub_last.png",
    ],
    sub2: [
      "./images/sub/sub201.jpg",
      "./images/sub/sub202.jpg",
      "./images/sub/sub203.jpg",
      "./images/sub/sub_last.png",
    ],
    sub3: [
      "./images/sub/sub301.jpg",
      "./images/sub/sub302.jpg",
      "./images/sub/sub303.jpg",
      "./images/sub/sub_last.png",
    ],
  };

  $.each(HeaderimgSources, function (className, srcArray) {
    $("." + className + " li").each(function (index) {
      if (srcArray[index]) {
        $(this).css("background-image", "url(" + srcArray[index] + ")");
      }
    });
  });

  // submenu

  let subMenu = document.querySelectorAll(".subMenu");
  let mainMenuLi = document.querySelectorAll(".mainMenu li");

  // 전체 서브메뉴 가리기
  function noneSubMenu() {
    subMenu.forEach(function (v) {
      v.classList.remove("on");
    });

    mainMenuLi.forEach(function (v) {
      v.classList.remove("on");
    });
  }

  noneSubMenu();

  mainMenuLi.forEach(function (v, k) {
    v.addEventListener("mouseenter", function () {
      noneSubMenu();
      subMenu[k].classList.add("on");
      this.classList.add("on");
    });
  });

  document.querySelector("nav").addEventListener("mouseenter", function () {
    this.classList.add("on");
  });
  document.querySelector("nav").addEventListener("mouseleave", function () {
    noneSubMenu();
    this.classList.remove("on");
  });
});

/******************** section1 ********************** */

// 전체배경깔기
const area = document.getElementById("hover-area");
const item = document.getElementById("movable-item");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", function (e) {
  const rect = area.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  targetX = (mouseX - centerX) / 20;
  targetY = (mouseY - centerY) / 20;
});

function animate() {
  // 조금씩 target 위치로 따라가기
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  item.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
}

animate(); // 애니메이션 스타트

window.addEventListener("mouseout", function (e) {
  if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
    targetX = 0;
    targetY = 0;
  }
});

const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function () {
  if (item.paused) {
    item.play();
    playPauseBtn.textContent = "pause";
  } else {
    item.pause();
    playPauseBtn.textContent = "play_arrow";
  }
});

/******************** section2 ********************** */

// Swiper 세팅
var s2Swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true, // ★ 추가! 항상 가운데로 맞춤
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let sec2SwiperSlide = document.querySelectorAll(".section2 .swiper-slide");
// 슬라이드 이미지 넣기
sec2SwiperSlide.forEach(function (v, k) {
  v.querySelector(".imgbox").style.backgroundImage = `url(./images/sec2/img0${(k % sec2SwiperSlide.length) + 1
    }.jpg)`;
});

updateBigImage();

// tag 클릭 시 swiper 이동 + active 처리
const tagItems = document.querySelectorAll(".tag li");

tagItems[0].classList.add("active");
tagItems.forEach(function (v, k) {
  v.addEventListener("click", function (e) {
    e.preventDefault();
    s2Swiper.slideToLoop(k, 500); // ★ 현재 index로 이동
    /**
     * swiper.slideToLoop(index, speed, runCallbacks)
     * .slideTo와 동일하지만 활성화된 루프와 함께 사용되는 경우입니다.
     * 따라서 이 메서드는 전달된 인덱스와 일치하는 realIndex가 있는 슬라이드로 이동합니다.
     **/

    tagItems.forEach(function (item) {
      item.classList.remove("active");
    });
    v.classList.add("active");
  });
});

// big 이미지 업데이트 함수
function updateBigImage() {
  const bigImg = document.querySelector(".section2 .big");
  const middleIndex = s2Swiper.activeIndex;
  const middleSlide = s2Swiper.slides[middleIndex];
  const imgbox = middleSlide ? middleSlide.querySelector(".imgbox") : null;

  if (imgbox) {
    const bgImage = getComputedStyle(imgbox).backgroundImage;
    bigImg.classList.add("fade");
    setTimeout(() => {
      bigImg.style.backgroundImage = bgImage;
      bigImg.classList.remove("fade");
    }, 200);
  }
}

// 초기 big 이미지 세팅
s2Swiper.on("slideChange", function () {
  updateBigImage();

  // 현재 realIndex에 해당하는 tag li만 active
  const realIndex = s2Swiper.realIndex;

  tagItems.forEach(function (item, idx) {
    item.classList.toggle("active", idx === realIndex);
  });
});

/******************** section2 ********************** */

const bg = document.querySelector(".section2 .scroll-bg");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const section2Top = section2.offsetTop;
  const section2Height = section2.offsetHeight;
  const section3Top = section3.offsetTop;

  // 스크롤 양에 비례해 배경 y위치 변경 (기존 코드 유지)
  bg.style.backgroundPosition = `center ${100 + scrollY * 0.05}px`;

  // section2가 화면에 보이기 시작하면 배경이 나타남
  if (
    scrollY >= section2Top - window.innerHeight &&
    scrollY < section2Top + section2Height
  ) {
    bg.style.opacity = "1";
    bg.style.visibility = "visible"; // 보이게 설정
  }
  // section3가 화면에 보이기 시작하면 배경이 바로 사라짐
  else if (scrollY >= section3Top - window.innerHeight) {
    bg.style.opacity = "0";
    bg.style.visibility = "hidden"; // 바로 숨김
  }
  // section2 밖에 있으면 배경이 사라짐
  else {
    bg.style.opacity = "0";
    bg.style.visibility = "hidden"; // 바로 숨김
  }
});

/******************** section3 ********************** */

let Sec3imgLi = document.querySelectorAll(".section3 .con li");

Sec3imgLi.forEach(function (v, k) {
  let aTag = v.querySelector("a");

  let makeP = document.createElement("p");

  // img 태그 생성 및 src 설정
  let makeImg = document.createElement("img");
  makeImg.src = `./images/sec3/img0${k + 1}.jpg`;

  // p 안에 img 삽입
  makeP.appendChild(makeImg);

  // a 안에 p 삽입
  aTag.insertBefore(makeP, aTag.firstChild);
});

/******************** section4 ********************** */

const wavebox = document.querySelector(".wavebox");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 20 + 10; // 10px ~ 30px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 3 + 7}s`; // 4~7초

  wavebox.appendChild(bubble);

  setTimeout(() => {
    bubble.remove(); // 메모리 누수 방지
  }, 7000);
}

// 일정 간격으로 비눗방울 생성
setInterval(createBubble, 500);



/******************** footer ********************** */

// const parallax = document.querySelector('.parallax-bg');

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   const footerOffsetTop = document.querySelector('footer').offsetTop;
//   const windowHeight = window.innerHeight;

//   if (scrollY + windowHeight > footerOffsetTop) {
//     const offset = (scrollY + windowHeight - footerOffsetTop);
//     parallax.style.transform = `translateY(-${offset * 0.5}px)`;
//   }
// });