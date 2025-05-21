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
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

  <!-- font awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

  <!-- -----------Pretendard----------- -->
  <link rel="stylesheet" as="style" crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />

  <!-- suite -->
  <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE@2/fonts/static/woff2/SUITE.css" rel="stylesheet">

  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

  <!-- aos -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

  <link rel="stylesheet" href="./css/layout.css">
  <link rel="stylesheet" href="./css/sub.css">

</head>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- 1. 엑티비티 -->

<body>

  <div class="wrap">

    <?php include 'subhead.php'; ?>

    <main class="sub3">
      <div class="title places">
        <h1>관광명소</h1>
      </div>

      <section class="section1">
        <h1>페로제도의 다양한 명소들을 만나보세요!</h1>

        <ul>
          <li>
            <p></p>
            <!-- https://visitvagar.fo/en/about5/about-vagar-and-mykines/the-villages/mykines -->
            <h2>Mykines (미키네스)</h2>
          </li>

          <li>
            <p></p>
            <!-- https://visitfaroeislands.com/en/whatson/places/place/gjogv0 -->
            <h2>Gjógv (갸우크)</h2>
          </li>

          <li>
            <p></p>
            <!-- https://visitfaroeislands.com/en/whatson/places/place/saksun -->
            <h2>Saksun (삭순)</h2>

          </li>

          <li>
            <p></p>
            <!-- https://visitfaroeislands.com/en/whatson/places/place/tjornuvik0 -->
            <h2>Tjørnuvík (티오르누비크)</h2>
          </li>
          <li>
            <p></p>
            <!-- https://visitfaroeislands.com/fo/whatson/places/place/fossa-waterfall -->
            <h2>Fossá Waterfall (포사 폭포)</h2>
          </li>
          <li>
            <p></p>
            <!-- https://visitfaroeislands.com/en/whatson/places/place/kirkjubour0 -->
            <h2>Kirkjubøur (키르큐뵈우르)</h2>
          </li>
        </ul>
        <a class="more" href="https://visitfaroeislands.com/en/plan-your-stay/getting-around">페로의 모든 명소 만나보기</a>

        <div class="modal">
          <div class="modalWrap">
            <span class="material-symbols-outlined mClose">
              close
            </span>
            <div class="up">
              <div class="sub3swiper mySwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                </div>
                <div id="control">
                  <div class="swiper-pagination"></div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
            <div class="down">
              <h2></h2>
              <p></p>
              <a href="">자세히 보기</a>
            </div>
          </div>
        </div>

      </section>
    </main>


  </div>
  <?php include 'subtail.php'; ?>


  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="./js/sub.js"></script>

</body>

</html>