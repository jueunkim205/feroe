$(function () {

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


// ----------------------------


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
      v.classList.remove('on')
    });

    mainMenuLi.forEach(function(v){
      v.classList.remove('on')
    })
  }

  noneSubMenu();

  mainMenuLi.forEach(function (v, k) {
    v.addEventListener("mouseenter", function () {
      noneSubMenu();
      subMenu[k].classList.add('on');
      this.classList.add('on')
    });
  });

  document.querySelector("nav").addEventListener('mouseenter', function(){
    this.classList.add('on')
  })
  document.querySelector("nav").addEventListener("mouseleave", function () {
    noneSubMenu();
    this.classList.remove('on')
  });
});

