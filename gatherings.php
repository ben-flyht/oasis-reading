<?php include "partials/variables.php" ?>

<!DOCTYPE html>
<html lang="en-GB" class="no-js">

<head>
  <?php include "partials/meta.php" ?>
  <?php include "partials/styles.php" ?>
</head>

<body>
  <?php include "partials/header.php" ?>
  <main id="content">
    <section class="hero d-flex justify-content-center flex-column relative flexible-content fc-margin-bottom standard-image">
      <span class="bg-push-top cover">
        <span class="cover d-block d-md-none bg-image-cover"
          style="background-image: url(./assets/images/heroes/mobile/fire.jpg);"></span>
        <span class="cover d-none d-md-block bg-image-cover"
          style="background-image: url(./assets/images/heroes/desktop/fire.jpg);"></span>
        <span class="header-overlay cover z-index-1"></span>
      </span>
      <div class="container position-relative z-index-2 ">
        <div class="col-12 col-lg-10 no-padding text-wrapping no-padding ">
          <h1 class="title pad-bottom-20-l pad-bottom-10 no-margin">Gatherings</h1>
        </div>
      </div>
    </section>
    <div class="flexible-content-container">
      <section class="image_text flexible-content fc-padding-bottom ">
        <div class="container container-large d-flex flex-wrap  align-items-center no-padding">
          <div class="col-12 col-md-6 no-padding pad-bottom-60 pad-bottom-0-m ">
            <div class="pad-left-30 pad-left-40-l pad-right-30 ">
              <div> 
                <h3>December</h3>
                <ul>
                  <li>Sun 3rd 10.30am ADVENT kick-off Farm Church gathering @Rushall Farm</li>
                  <li>Tues 5th 8-9.30pm 'Embracing Paradox' small gathering @local home </li>
                  <li>Sun 10th 10.30am Church gathering @hired space</li>
                  <li>Tues 12th 8-9.30pm 'Borrowing Hope' small gathering @local home </li>
                  <li>Sun 17th 3pm Campfire & Carols Festive Gathering @‌Rushall Farm</li>
                </ul>              
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 no-padding">
            <div class="pad-right-30 pad-right-40-l pad-left-30 pad-left-30-m pad-left-40-l">
              <div class="relative">
                <picture class="fluid-img d-block shadow-yes">
                  <img class="full-width" src="./assets/images/autumn-hands.jpg" alt="">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <?php include "partials/footer.php" ?>
  <?php include "partials/scripts.php" ?>
</body>

</html>