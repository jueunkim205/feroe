<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visit Faroe Islands</title>
  <!-- favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="images/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet">

  <!-- 구글아이콘 -->
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

  <!-- font awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

  <!-- pretendard -->
  <link rel="stylesheet" crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">

  <!-- suite -->
  <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE@2/fonts/static/woff2/SUITE.css" rel="stylesheet">

  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

  <!-- aos -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <link rel="stylesheet" href="./css/layout.css">
  <link rel="stylesheet" href="./css/style.css">

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'subhead.php';
?>

<body>

  <div class="wrap">
    <main>
      <div class="main_bg">
        <!-- 메인 타이핑 텍스트 -->
        <div id="mainText">
          <h1 id="textType"></h1>
          <h1 id="textType2"></h1>
        </div>

        <div class="container" id="hover-area">
          <video class="movable" id="movable-item" autoplay muted loop playsinline>
            <source src="./images/bgVideo.mp4" type="video/mp4">
          </video>
        </div>
      </div>

      <section class="section1">
        <h2 class="blind">메인화면</h2>
        <div class="wrap">
          <span class="material-symbols-outlined" id="playPauseBtn">
            pause
          </span>

          <ul>
            <li>
              <a href="https://visitfaroeislands.com/en/plan-your-stay/staying-here">
                <p><img src="./images/icons/accomodation.svg" alt="숙소 아이콘"></p>
                <p>숙소</p>
              </a>
            </li>
            <li>
              <a href="./subpage1.php">
                <p><img src="./images/icons/activities.svg" alt="엑티비티 아이콘"></p>
                <p>엑티비티</p>
              </a>
            </li>
            <li>
              <a href="https://visitfaroeislands.com/en/about-vfi/people-society/faroese-food">
                <p><img src="./images/icons/dining.svg" alt="음식 아이콘"></p>
                <p>음식</p>
              </a>
            </li>
            <li>
              <a href="./subpage3.php">
                <p><img src="./images/icons/getting-around.svg" alt="명소 아이콘"></p>
                <p>명소</p>
              </a>
            </li>
            <li>
              <a href="https://visitfaroeislands.com/events">
                <p><img src="./images/icons/whatson.svg" alt="행사 아이콘"></p>
                <p>행사</p>
              </a>
            </li>
            <li>
              <a href="https://visitfaroeislands.com/en/plan-your-stay/need-a-little-help">
                <p><img src="./images/icons/help.svg" alt="도움말 아이콘"></p>
                <p>도움말</p>
              </a>
            </li>
          </ul>

          <button id="topbtn">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>

        </div>
      </section>

      <section class="section2">
        <h2 class="blind">한눈에 보는 페로제도 관광명소</h2>
        <div class="wrap">
          <div class="left">
            <div class="text" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
              <p>한눈에 보는</p>
              <p>페로제도 관광명소</p>
            </div>

            <ul class="tag" data-aos="fade-right">
              <li>
                <p>물라포수르</p>
              </li>
              <li>
                <p>드랑가르니르</p>
              </li>
              <li>
                <p>칼루르 등대</p>
              </li>
              <li>
                <p>레이크 쇠르바그스바튼/레이티스바튼</p>
              </li>
              <li>
                <p>칼소이</p>
              </li>
              <li>
                <p>삭순 교회</p>
              </li>
              <li>
                <p>클락쿠르</p>
              </li>
              <li>
                <p>쿠노이</p>
              </li>
              <li>
                <p>리스트사번 페로이아</p>
              </li>
            </ul>

            <div class="swiper mySwiper" data-aos="fade-right">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/mulafossur-the-waterfall-in-gasadalur">
                    <p class="imgbox"></p>
                    <div>
                      <p>물라포수르</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/drangarnir-the-sea-stacks">
                    <p class="imgbox"></p>
                    <div>
                      <p>드랑가르니르</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/kallurin0">
                    <p class="imgbox"></p>
                    <div>
                      <p>칼루르 등대</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/lake-sorvagsvatn-leitisvatn">
                    <p class="imgbox"></p>
                    <div>
                      <p>레이크 쇠르바그스바튼 / 레이티스바튼</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/kalsoy0">
                    <p class="imgbox"></p>
                    <div>
                      <p>칼소이</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/saksun">
                    <p class="imgbox"></p>
                    <div>
                      <p>삭순 교회</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/klakkur0">
                    <p class="imgbox"></p>
                    <div>
                      <p>클락쿠르</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/kunoy0">
                    <p class="imgbox"></p>
                    <div>
                      <p>쿠노이</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://visitfaroeislands.com/en/whatson/places/place/listasavn-foroya0">
                    <p class="imgbox"></p>
                    <div>
                      <p>리스트사번 페로이아</p>
                      <span> 페로제도, Streymoy</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div id="control" data-aos="fade-right">
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>

          <p class="big"></p>
          <div class="scroll-bg"></div>
        </div>
      </section>

      <section class="section3">
        <h2 class="blind">페로제도의 축제</h2>
        <div class="wrap">
          <div class="left">
            <div class="text" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="-100">
              <p>세상 끝의 섬, 그곳에서 펼쳐지는</p>
              <p>페로제도의 축제</p>
            </div>
          </div>
          <ul class="con">
            <li data-aos="fade-up"><a href=" https://visitfaroeislands.com/en/whatson/events/event/shepherdess-tour">
                <div class="text">
                  <h3>양치기 체험 투어</h3>
                  <p>포로 제도 최대 양 농장에서 양들에게 먹이를 주는 일상을 직접 체험해보세요.</p>
                </div>
              </a></li>

            <li data-aos="fade-up" data-aos-delay="100"><a
                href="  https://visitfaroeislands.com/en/whatson/events/event/hip-hop-performance">
                <div class="text">
                  <h3>힙합 공연</h3>
                  <p>Dansifrøi에서 힙합을 연습해 온 어린이, 청소년, 성인들이 올봄 연습의 결실을 짧은 공연으로 선보입니다.</p>
                </div>
              </a></li>

            <li data-aos="fade-up" data-aos-delay="200"><a
                href="  https://visitfaroeislands.com/en/whatson/events/event/torshavnar-big-band-minnist-tu-enn">
                <div class="text">
                  <h3>토르스하운 빅밴드: 아직도 기억하나요</h3>
                  <p>토르스하운 재즈, 포크, 블루스 페스티벌 2025의 일환으로 열리는 공연입니다.</p>
                </div>
              </a></li>

            <li data-aos="fade-up" data-aos-delay="300"><a
                href="  https://visitfaroeislands.com/en/whatson/events/event/summarfestival">
                <div class="text">
                  <h3>서머 페스티벌</h3>
                  <p>포로 제도에서 열리는 가장 큰 음악 축제, 서머 페스티벌을 즐겨보세요.</p>
                </div>
              </a></li>

            <li data-aos="fade-up" data-aos-delay="400"><a
                href="https://visitfaroeislands.com/en/whatson/events/event/faroe-islands-most-beautiful-half-marathon">
                <div class="text">
                  <h3>포로 제도에서 가장 아름다운<br>하프 마라톤</h3>
                  <p>해안을 따라 섬의 모든 마을을 지나는 아름다운 코스에서 달려보세요.</p>
                </div>
              </a></li>

            <li data-aos="fade-up" data-aos-delay="500"><a
                href="  https://visitfaroeislands.com/en/whatson/events/event/atlantic-fair-20260">
                <div class="text">
                  <h3>아틀란틱 페어 2026</h3>
                  <p>포로 제도를 중심으로 한 북대서양의 대표 해양 무역 박람회, 아틀란틱 페어에 참가해보세요.</p>
                </div>
              </a></li>

          </ul>

        </div>
      </section>

      <section class="section4">
        <h2 class="blind">빠른메뉴 영역</h2>
        <div class="wavebox">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,40 C150,10 350,70 600,40 C850,10 1050,70 1200,40 V100 H0 Z"></path>
          </svg>
          <svg class="wave2" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,45 C150,15 350,75 600,45 C850,15 1050,75 1200,45 V100 H0 Z"></path>
          </svg>
          <div class="bubbles">
            <div class="bubble" style="left: 10%; animation-delay: 0s;"></div>
            <div class="bubble" style="left: 25%; animation-delay: 2s;"></div>
            <div class="bubble" style="left: 40%; animation-delay: 4s;"></div>
            <div class="bubble" style="left: 60%; animation-delay: 1s;"></div>
            <div class="bubble" style="left: 75%; animation-delay: 3s;"></div>
            <div class="bubble" style="left: 90%; animation-delay: 5s;"></div>
          </div>
        </div>
        <div class="con">
          <div class="wrap">
            <div class="left">
              <a href="https://www.youtube.com/watch?v=V-w_5Il5cQQ">
                <div class="img-wrap">
                  <img src="./images/sec4/sec4_left.png" alt="영상 썸네일">
                </div>
                <div class="text">
                  <h3>영상으로 보는 페로 제도</h3>
                  <p>아름다운 페로 제도를 영상으로 먼저 만나보세요.</p>
                  <span class="go">바로가기</span>
                </div>
              </a>
            </div>

            <ul class="right">
              <li>
                <a href="https://visitfaroeislands.com/en/see-do/inspiration-guides/popular-guides/24-hour-guide">
                  <div class="icon"><img src="./images/icons/time-svgrepo-com.svg" alt="24시간 가이드"></div>
                  <h3>24시간 가이드</h3>
                </a>
              </li>
              <li>
                <a
                  href="https://visitfaroeislands.com/en/see-do/inspiration-guides/popular-guides/monthly-guides-to-the-faroe-islands">
                  <div class="icon"><img src="./images/icons/whatson_2.svg" alt="월별 여행 가이드"></div>
                  <h3>월별 여행 가이드</h3>
                </a>
              </li>
              <li>
                <a href="https://visitfaroeislands.com/en/transportmuligheder/getting-around">
                  <div class="icon"><img src="./images/icons/getting-around_2.svg" alt="둘러보기"></div>
                  <h3>둘러보기</h3>
                </a>
              </li>
              <li>
                <a href="https://visitfaroeislands.com/en/plan-your-stay/staying-here">
                  <div class="icon"><img src="./images/icons/accomodation_2.svg" alt="숙소"></div>
                  <h3>숙소</h3>
                </a>
              </li>
              <li>
                <a href="https://visitfaroeislands.com/en/whatson/places/place/rent-a-car">
                  <div class="icon"><img src="./images/icons/car.svg" alt="렌트카"></div>
                  <h3>렌트카</h3>
                </a>
              </li>
              <li>
                <a href="https://visitfaroeislands.com/en/plan-your-stay/need-a-little-help">
                  <div class="icon"><img src="./images/icons/help_2.svg" alt="도움이 필요하다면?"></div>
                  <h3>도움이 필요하다면?</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>

    <?php include 'subtail.php'; ?>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="js/core.js"></script>
  <script src="./js/layout.js"></script>
  <script src="./js/script.js"></script>

</body>

</html>