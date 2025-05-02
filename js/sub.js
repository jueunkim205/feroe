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



/******************** 기타 ********************** */

// aos
AOS.init({
  once: false 
});



