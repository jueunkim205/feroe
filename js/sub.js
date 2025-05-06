$(function () {
  /******************** header ********************** */

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



/******************** 기타 ********************** */

// aos
AOS.init({
  once: false
});



