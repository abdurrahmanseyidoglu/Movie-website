<template>
  <header class="header">
    <nav class="header__menu">
      <div class="heade__menu-left">
      <router-link to="/" class="header__link">Home</router-link>
      <router-link to="/movies" class="header__link">Movies</router-link>
      <router-link to="/tvshows" class="header__link">Tv Shows</router-link>
      </div>
      <div class="heade__menue-right">
      <input type="text" placeholder="Search..." class="header__search">
      <button class="header__search-button">Search</button>
      <router-link to="/about" class="header__link">About</router-link>
      <router-link to="/contact" class="header__link">Contact</router-link>


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
    background-color: $black;
    padding: 30px;
   
  }
  &__link{
      font-size:1.1rem;
      margin :15px;
      text-decoration: none;
      color: white;
      &:hover{
        color: $red;
      }
  }
  &__search{
      font-size:1.1rem;
      border:thin;
      border-radius: $radius;
      height: 30px;
      
  }
  &__search-button{
    margin: 10px;
    font-size:1.1rem;
    font-weight: bold;
    border-radius: $radius;
    &:hover{
      color: $white;
      background: $red;
      
    }
  }
  
}
</style>
