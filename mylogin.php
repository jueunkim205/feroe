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

<body>
  <?php include 'subhead.php'; ?>

  <main class="sub1">
    <div class="title loginpage">
      <h1>커뮤니티</h1>
    </div>
    <div id="freeboard">
      <div id="freeboard"><iframe src="http://jueunkim.dothome.co.kr/gnuboard5/bbs/login.php" id="iframe"
          style="width:100%" onload="Height();" frameborder="0" scrolling="no"></iframe></div>
    </div>
  </main>


  </div>

  <?php include 'subtail.php'; ?>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="js/core.js"></script>
  <script src="./js/script.js"></script>
  <script>
    function Height() {
      var the_height = document.getElementById("iframe").contentWindow.document.body.scrollHeight;
      document.getElementById("iframe").height = the_height + 50;
      document.getElementById("iframe").style.overflow = "hidden";
    }
  </script>
</body>

</html>