<template>
  <header class="header">
    <nav class="header__menu">
      <div class="header__logo">Movies Land</div>
      <div class="header__links">
        <ul>
          <li><router-link to="/" class="header__link">Home</router-link></li>
          <li><router-link to="/contact" class="header__link">Contact</router-link></li>
          <li><router-link to="/about" class="header__link">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script></script>
<style lang="scss">
.header {
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: $white;
  }
  &__logo {
    font-size: 2rem;
    margin: 0.5rem;
    color: $red;
    &:hover {
      transition: $slow;
      color: $white;
    }
  }
  &__links ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  &__links li {
    list-style: none;
  }
  &__link {
    text-decoration: none;
    margin: 15px;
    color: $white;
    &:hover {
      transition: $slow;
      color: $red;
      background-color: $black;
    }
  }
}

@include mq(tablet, max) {
  .header__links {
    width: 100%;
  }
  .header__menu {
    flex-direction: column;
    align-items: flex-start;
  }

  .header__links ul {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .header__links li {
    text-align: center;
    margin: 5px;
    font-size: 1rem;
  }
}
</style>
