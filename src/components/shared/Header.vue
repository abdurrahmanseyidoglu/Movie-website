<template>
  <header class="header">
    <nav class="header__menu">
    <div class="header__logo">Movies Land</div>
    
    <div class="header__links">
    <ul>
      <li><router-link to="/" class="header__link">Home</router-link></li>
      <li><router-link to="/movies" class="header__link">Movies</router-link></li>
      <li><router-link to="/tvshows" class="header__link">Tv Shows</router-link></li>
      <li><input type="text" placeholder="Search for Movie.." class="header__search"></li>
      <li><button class="header__search-button">Search</button></li>
      <li><router-link to="/about" class="header__link">About</router-link></li>
      <li><router-link to="/contact" class="header__link">Contact</router-link></li>
    </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.header{
  
  &__menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $black;
  color: $white;    
  }
  &__logo{
  font-size: 2rem;
  margin: 0.5rem;
  color: $red;
  &:hover{
        transition : $slow;
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
     &:hover{
        background-color : black;
    }
  }
  &__link{
    text-decoration: none;
    margin: 15px;
    color: $white;
    &:hover{
        transition : $slow;
        color: $red;
    }
  }
  &__search{
      border-radius: $radius;
      font-size: 1.1rem;
      @include placeholder-color($red);
      
  }
  &__search-button{
    font-size: 1.2rem;
    border-radius: $radius;
      &:hover{
        color: $white;
        transition : $slow;
        background: $red;
      } 
    }
  
  }

  @include mq(tablet, max) {
    .header__links{
      width: 100%;
    }
    .header__menu{
    flex-direction: column;
    align-items: flex-start;
    }
    .header__links ul{
    width: 100%;
    flex-direction: column;
  
    }
    .header__links li { 
      text-align: center;
      margin: 5px;
      font-size: 1.7rem;
       }
  }

</style>
