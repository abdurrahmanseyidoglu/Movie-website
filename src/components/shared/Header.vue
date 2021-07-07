<template>
  <header class="header">
    <nav class="header__menu">
    <div class="header__logo">Movies Land</div>
    
    <div class="header__links">
    <ul>
      <li><router-link to="/" class="header__link">Home</router-link></li>
      <li><router-link to="/movies" class="header__link">Movies</router-link></li>
      <li><router-link to="/tvshows" class="header__link">Tv Shows</router-link></li>
      <form @submit.prevent="searchAPI()" class="header__search-form">
      <li><input type="text" placeholder="Search for Movie.." class="header__search" v-model="search"></li>
      <li><input type="submit" value="Search" class="header__search-button"></li>
      </form>
      <li><router-link to="/about" class="header__link">About</router-link></li>
      <li><router-link to="/contact" class="header__link">Contact</router-link></li>
    </ul>
      </div>
    </nav>
  </header>
  <div class="movie">
    <div class="movie__card" v-for="movieList in movie" :key="movieList.imdbID"> 
     <router-link :to="'/movie/' + movieList.imdbID" class="movie__link">
      <div class="movie__image-container">
      <img :src="movieList.Poster" alt="Movie cover">
      <div class="type">{{ movieList.Type }}</div>
      <div class="year">{{ movieList.Year }}</div>

      </div>
     
     </router-link>

    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup(){
    
    
    const search = ref('');
    const movie = ref([]);
    const searchAPI= ()=>{
      if(search.vlaue != ""){
        fetch(`http://www.omdbapi.com/?apikey=a697e544&s=${search.value}`)
        .then(response =>response.json())
        .then(data => {
          //Search is an object key from the API
          movie.value = data.Search;
          //reset search box
          search.value = "";
          console.log(movie.value);
        })
    
      }

    }

    return{
      search,
      movie,
      searchAPI,
    }
  }


}

</script>
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

  }
  &__link{
    text-decoration: none;
    margin: 15px;
    color: $white;
    &:hover{
        transition : $slow;
        color: $red;
        background-color : black;
    }
  }
  &__search-form{
  display: flex;
  flex-direction: row;
  }
  &__search{
      border-radius: $radius;
      font-size: 1.2rem;
      &[type="text"]{
        color: $red;
      }
      &::placeholder{
        color: indianred;
      }
      
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
    .header__search-form{
      display: flex;
      flex-direction: column;
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
