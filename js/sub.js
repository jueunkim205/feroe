/******************** sub3 ********************** */

// 장소 설명 및 이미지 데이터
const sub3Data = [
  {
    description:
      "바다오리(퍼핀)의 천국이라 불리는 섬으로, 여름철 수천 마리의 새들이 절벽 위에 둥지를 틀어 장관을 이룹니다. 험준한 해안선을 따라 걷는 등대 하이킹도 인기가 많습니다.",
    images: ["./images/subpage/sub3/mykines.jpg"],
    href: "https://visitvagar.fo/en/about5/about-vagar-and-mykines/the-villages/mykines",
  },
  {
    description:
      "자연이 만든 협곡 항구로 유명한 조용한 마을입니다. 형형색색의 전통 가옥과 바다로 이어지는 깊은 틈이 어우러져 그림 같은 풍경을 자랑합니다.",
    images: [
      "./images/subpage/sub3/gjogv1.jpg",
      "./images/subpage/sub3/gjogv2.jpg",
    ],
    href: "https://visitfaroeislands.com/en/whatson/places/place/gjogv0",
  },
  {
    description:
      "산 속에 자리 잡은 숨겨진 라군 마을로, 썰물 때 드러나는 검은 모래 해변과 고즈넉한 교회가 인상적입니다. 한적하고 신비로운 분위기를 느낄 수 있는 장소입니다.",
    images: [
      "./images/subpage/sub3/saksun1.jpg",
      "./images/subpage/sub3/saksun2.jpg",
    ],
    href: "https://visitfaroeislands.com/en/whatson/places/place/saksun",
  },
  {
    description:
      "페로 제도에서 가장 사진이 잘 나오는 해변 마을 중 하나입니다. 검은 모래 해변 너머로 드랑가르니르와 트롤코누핑거르(Trøllkonufingur) 바위가 보이는 절경이 펼쳐집니다.",
    images: [
      "./images/subpage/sub3/tjornuvik1.jpg",
      "./images/subpage/sub3/tjornuvik2.jpg",
    ],
    href: "https://visitfaroeislands.com/en/whatson/places/place/tjornuvik0",
  },
  {
    description:
      "페로 제도에서 가장 높은 2단 폭포로, 거대한 절벽을 타고 쏟아지는 물줄기가 장엄한 광경을 이룹니다. 비 오는 날 방문하면 더욱 웅장한 분위기를 느낄 수 있습니다.",
    images: [
      "./images/subpage/sub3/fossa1.jpg",
      "./images/subpage/sub3/fossa2.jpg",
    ],
    href: "https://visitfaroeislands.com/fo/whatson/places/place/fossa-waterfall",
  },
  {
    description:
      "가장 오래된 역사 유적지 마을로, 중세의 대성당 유적과 900년 된 전통 가옥이 보존돼 있습니다. 페로 제도의 뿌리를 느낄 수 있는 중요한 문화 명소입니다.",
    images: [
      "./images/subpage/sub3/kirkjubour1.jpg",
      "./images/subpage/sub3/kirkjubour2.jpg",
    ],
    href: "https://visitfaroeislands.com/en/whatson/places/place/kirkjubour0",
  },
];

// 요소 선택
const liList = document.querySelectorAll(".sub3 ul li");
const modal = document.querySelector(".sub3 .modal");
const modalWrap = modal.querySelector(".sub3 .modalWrap");
const subCloseBtn = modal.querySelector(".modal .mClose");
const modalTitle = modal.querySelector(".modal .down h2");
const modalDesc = modal.querySelector(".modal .down p");
const modalLink = document.querySelector(".modal .down a");
const swiperWrapper = modal.querySelector(".sub3 .swiper-wrapper");

let sub3swiper; // Swiper 인스턴스 전역으로 선언

// 썸네일 이미지 삽입 (li > p 내부)
liList.forEach((li, index) => {
  const p = li.querySelector("p");
  const imgSrc = sub3Data[index]?.images[0];

  if (p && imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "명소 미리보기";
    img.style.width = "100%";
    p.appendChild(img);
  }
});

// li 클릭 시 모달 열기 + 슬라이드 구성
liList.forEach((li, index) => {
  li.addEventListener("click", () => {
    const titleText = li.querySelector("h2")?.textContent || "";
    modalTitle.textContent = titleText;
    modalDesc.textContent = sub3Data[index].description;

    // 슬라이드 이미지 삽입
    swiperWrapper.innerHTML = "";
    sub3Data[index].images.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      const img = document.createElement("img");
      img.src = src;
      img.alt = titleText;
      slide.appendChild(img);
      swiperWrapper.appendChild(slide);
    });

    // 기존 swiper 인스턴스 제거 후 재생성
    if (sub3swiper) {
      sub3swiper.destroy(true, true);
    }
    sub3swiper = new Swiper(".sub3swiper", {
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

    // 링크
    modalLink.href = sub3Data[index].href;
    modalLink.target = "_blank"; // 새 창에서 열리도록 (선택 사항)

    // 모달 열기
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// X 버튼 클릭 시 닫기
subCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

// 모달 바깥 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

