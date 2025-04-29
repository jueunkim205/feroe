$(function () {
  /******************** header ********************** */

  const imgSources = {
    sub1: [
      "./images/sub101.png",
      "./images/sub102.png",
      "./images/sub103.jpg",
      "./images/sub_last.png",
    ],
    sub2: [
      "./images/sub201.jpg",
      "./images/sub202.jpg",
      "./images/sub203.jpg",
      "./images/sub_last.png",
    ],
    sub3: [
      "./images/sub301.jpg",
      "./images/sub302.jpg",
      "./images/sub303.jpg",
      "./images/sub_last.png",
    ],
  };

  $.each(imgSources, function (className, srcArray) {
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
var s1Swiper = new Swiper(".mySwiper", {
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

// 슬라이드 이미지 넣기
document.querySelectorAll(".swiper-slide").forEach(function (v, k) {
  v.querySelector("img").src = `./images/test/img0${(k % 5) + 1}.jpg`;
});

// tag 클릭 시 swiper 이동 + active 처리
const tagItems = document.querySelectorAll(".tag li");
tagItems.forEach(function (v, k) {
  v.addEventListener("click", function (e) {
    e.preventDefault();
    s1Swiper.slideToLoop(k, 500); // ★ 현재 index로 이동
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
  const bigImg = document.querySelector(".big");
  const middleIndex = s1Swiper.activeIndex;
  const middleSlide = s1Swiper.slides[middleIndex];
  const currentImg = middleSlide ? middleSlide.querySelector("img") : null;

  if (currentImg) {
    bigImg.classList.add("fade");
    setTimeout(() => {
      bigImg.style.backgroundImage = `url(${currentImg.src})`;
      bigImg.classList.remove("fade");
    }, 200);
  }
}

// 슬라이드 변경될 때마다 big 이미지 업데이트
s1Swiper.on("slideChange", updateBigImage);

// 초기 big 이미지 세팅
updateBigImage();
