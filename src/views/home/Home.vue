//TODO: 1- display random movies at home.vue when the component gets mounted 2- make search result "top results "display above the recommended movie
  
},
<template>
    <div class="home">
    <form @submit.prevent="searchAPI()" class="home__search-form">
        <input type="text" placeholder="Search for Movie.." class="home__search" v-model="search">
        <input type="submit" value="Search" class="home__search-button">
    </form>
      <div class="movie">
    <div class="movie__card" v-for="movieList in movie" :key="movieList.imdbID"> 
     <router-link :to="'/movie/:id' + movieList.imdbID" class="movie__link">
      <div class="movie__image-container">
      <img :src="movieList.Poster" alt="Movie cover">
      </div>
      <div class="movie__detailes">
      <div class="movie__title">{{ movieList.Title }}</div>
      <div class="movie__type">{{ movieList.Type }}</div>
      <div class="movie__year">{{ movieList.Year }}</div>
      
      </div>

      
     
     </router-link>

    </div>
  </div>
</div>
</template>

<script>
import { ref , onMounted } from 'vue';
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
     onMounted(() => {
      
    })

    return{
      search,
      movie,
      searchAPI,
    }
  }


}

</script>

<style lang="scss">
.home{

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

</style>
