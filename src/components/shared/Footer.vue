<template>
  <footer class="footer">
    <div class="footer__container">
      <img
        src="../../../images/footerImages/footer__logo.png"
        alt="logo"
        class="footer__logo"
        width="200px"
        height="200px"
      />
      <ul>
        <li><a class="footer__link" href="#">FAQ</a></li>
        <li><a class="footer__link" href="#">Investor Relations</a></li>
        <li><a class="footer__link" href="#">Terms Of Use</a></li>
        <li><a class="footer__link" href="#">Contact Us</a></li>
      </ul>
      <ul>
        <li><a class="footer__link" href="#">Help Center</a></li>
        <li><a class="footer__link" href="#">Jobs</a></li>
        <li><a class="footer__link" href="#">Privacy</a></li>
        <li><a class="footer__link" href="#">Speed Test</a></li>
      </ul>
      <ul>
        <li><a class="footer__link" href="#">Account</a></li>
        <li><a class="footer__link" href="#">Redeem Gift Cards</a></li>
        <li><a class="footer__link" href="#">Cookie Prefrences</a></li>
        <li><a class="footer__link" href="#">Legal Notices</a></li>
      </ul>
      <ul>
        <li><a class="footer__link" href="#">Media Center</a></li>
        <li><a class="footer__link" href="#">Ways to Watch</a></li>
        <li><a class="footer__link" href="#">Corporate Information</a></li>
      </ul>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">
// *{
//  border: red 1px solid;
// }
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $black;
  background-image: url(../../../images/footerImages/footer__background.jpg);
  background-size: 100% 100%;
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin-left: 40px;
  }
  li {
    margin-top: 1em;
  }
  a {
    text-decoration: none;
    color: $gray;
  }
  &__container {
    display: flex;
  }
}
.buttom {
  font-size: 1.4rem;
  p {
    color: rgb(212, 203, 203);
  }
  &__heart {
    color: red;
    font-size: 2rem;
  }
}
@include mq(tablet, max) {
  .footer {
    position: relative;
    a {
    }
    ul {
      margin: 0;
      padding: 0;
      align-items: center;
      justify-content: center;
    }

    &__logo {
      display: none;
    }
    &__container {
      display: flex;
      flex-flow: column wrap;
    }
  }
}
</style>
