// header, footer, sidemenu 등...

/******************** header ********************** */
$(function () {
  const HeaderimgSources = {
    sub1: [
      "./images/submenu/sub101.png",
      "./images/submenu/sub102.png",
      "./images/submenu/sub103.jpg",
      "./images/submenu/sub_last.png",
    ],
    sub2: [
      "./images/submenu/sub201.jpg",
      "./images/submenu/sub202.jpg",
      "./images/submenu/sub203.jpg",
      "./images/submenu/sub_last.png",
    ],
    sub3: [
      "./images/submenu/sub301.jpg",
      "./images/submenu/sub302.jpg",
      "./images/submenu/sub303.jpg",
      "./images/submenu/sub_last.png",
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

/******************** sidemenu ********************** */
let sideBtn = document.querySelector("nav .btns .hamburger");
let sideMenu = document.querySelector("#sideMenu");
let closeBtn = document.querySelector("#sideMenu span");
let sideBg = document.querySelector("#sideMenu .sideBg");

sideBtn.onclick = function () {
  sideMenu.classList.add("on");
};

closeBtn.onclick = function () {
  sideMenu.classList.remove("on");
};

// sideBg 클릭 시 사이드메뉴 닫기
sideBg.onclick = function () {
  sideMenu.classList.remove("on");
};



/******************** 기타 ********************** */

// aos
AOS.init({
  once: false,
});


function updateAOS() {
  const list = document.querySelectorAll(".section3 .con li");

  list.forEach((item, k) => {
    if (window.innerWidth < 1024) {
      item.setAttribute("data-aos-duration", "300");
      item.setAttribute("data-aos-delay", "0");
      item.setAttribute("data-aos-offset", "0");
    } else {
      item.setAttribute("data-aos-duration", "700");
      item.setAttribute("data-aos-delay", "400");
      item.setAttribute("data-aos-offset", "100");
    }
  });

  AOS.refresh(); // 꼭 필요!
}