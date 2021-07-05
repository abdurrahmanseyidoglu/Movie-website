<template>
  <header class="header">
    <nav class="header__menu">
      <div class="heade__menu-left">
      <router-link to="/" class="header__link">Home</router-link>
      <router-link to="/contact" class="header__link">Contact</router-link>
      <router-link to="/about" class="header__link">About</router-link>
      </div>
      <div class="heade__menue-right">
      <input type="text" placeholder="Search...">
      <router-link to="/about" class="header__link">About</router-link>

      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.header{
  &__menu{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
   
  }
  &__link{
      font-size:1.5rem;
  }
  
}
</style>
