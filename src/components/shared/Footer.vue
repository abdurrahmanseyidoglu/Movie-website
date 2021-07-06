<template>
  <footer class="footer">
  
  <div class="footer__container">

  <img src="../../../public/footer__logo.png" alt="logo" class="footer__logo" width="200px" height="200px">
  <ul>
    
    <li>  <a class="footer__link" href="#">FAQ</a></li>
    <li>  <a class="footer__link" href="#">Investor Relations</a></li>
    <li>  <a class="footer__link" href="#">Terms Of Use</a></li>
    <li>  <a class="footer__link" href="#">Contact Us</a></li>
  </ul>
    <ul>
    
    <li>  <a class="footer__link" href="#">Help Center</a></li>
    <li>  <a class="footer__link" href="#">Jobs</a></li>
    <li>  <a class="footer__link" href="#">Privacy</a></li>
    <li>  <a class="footer__link" href="#">Speed Test</a></li>
  </ul>
    <ul>

    <li>  <a class="footer__link" href="#">Account</a></li>
    <li>  <a class="footer__link" href="#">Redeem Gift Cards</a></li>
    <li>  <a class="footer__link" href="#">Cookie Prefrences</a></li>
    <li>  <a class="footer__link" href="#">Legal Notices</a></li>
  </ul>
    <ul>

    <li>  <a class="footer__link" href="#">Media Center</a></li>
    <li>  <a class="footer__link" href="#">Ways to Watch</a></li>
    <li>  <a class="footer__link" href="#">Corporate Information</a></li>
    <li>  <a class="footer__link" href="#">Only on Netflix</a></li>
  </ul>
  </div>
<div class="buttom">
  <p>Made with <span class="buttom__heart">♡</span>  By  <a href="https://github.com/abdurrahmanseyidoglu">Abdurrahman Seyidoğlu</a> </p>
</div>
  
  </footer>
</template>

<script>

</script>

<style lang="scss">


.footer {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: $black;
background-image: url(../../../public/footer__background.jpg);
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
  a{
    text-decoration: none;
    color: $gray;
  }
  &__container{
    display: flex;
  }
  
}
.buttom{
font-size: 1.4rem;
p{
  color: rgb(212, 203, 203);
}
&__heart{

color: red;
font-size: 2rem;
}
}
@include mq(tablet, max) {
.footer{

a{
  font-size: 1.5rem;
}
&__logo{
  margin-left: 50px;
  width: 300px;
  height: 300px;
}
&__container{
  display: flex;
  flex-flow: column wrap;

}
}

}

</style>
