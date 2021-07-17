<template>
  <div class="home">
    <form @submit.prevent="searchAPI()" class="home__search-form">
      <input
        type="text"
        placeholder="Search for Movie.."
        class="home__search"
        v-model="search"
      />
      <input type="submit" value="Search" class="home__search-button" />
    </form>
    <div class="movie">
      <div class="movie__card" v-for="movieList in movie" :key="movieList.imdbID">
        <div class="movie__image-container">
          <img class="movie__image" :src="movieList.Poster" alt="Movie cover" />
        </div>
        <div class="movie__info">
          <div class="movie__title"><span> Name</span> : {{ movieList.Title }}</div>
          <div class="movie__type"><span> Type </span> : {{ movieList.Type }}</div>
          <div class="movie__year"><span>Year </span> : {{ movieList.Year }}</div>
          <div class="movie__detailes">
            <router-link :to="'/movie/' + movieList.imdbID" class="movie__link">
              <button class="movie__detailes-btn">Detailes</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import env from "../../env";
export default {
  setup() {
    
    const search = ref("action");
    const movie = ref([]);
    const searchAPI = () => {
      if (search.vlaue != "") {
        fetch(`${env.api_url}/?s=${search.value}&apikey=${env.api_key}`)
          .then((response) => response.json())
          .then((data) => {
            //'Search' is an object key in the API
            movie.value = data.Search;

            //reset search box
            search.value = "";

            // console.log(movie.value);
          });
      }
    };

    onMounted(() => {
      searchAPI();
    });

    return {
      search,
      movie,
      searchAPI,
    };
  },
};
</script>

<style lang="scss">
.home {
  background-color: $black;
  &__search-form {
    margin-bottom: 30px;
    padding: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
  }
  &__search {
    border-radius: $radius;
    border: none;
    background: black;
    font-size: 1.2rem;
    padding: 10px;
    &[type="text"] {
      color: $purple;
    }
    &::placeholder {
      color: $red;
    }
    
  }
  &__search-button {
    font-size: 1.2rem;
    border-radius: $radius;
    margin-left: 5px;
    &:hover {
      cursor: pointer;
      color: $white;
      transition: $slow;
      background: $red;
    }
  }
}
.movie {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &__info {
    align-items: center;
    justify-content: center;
    span {
      color: gray;
    }
  }
  &__card {
    border: $gray solid 3px;
    border-radius: 10px;
    margin: 10px 10px;
    width: 300px;
    height: 530px;
    &:hover {
      transition: background-color 1s ease;
      background-color: $purple;
      box-shadow: 0px 8px 8px 0px $white;
    }
  }
  &__info {
    color: $white;
  }
  &__title {
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
  }
  &__image-container {
    position: relative;
    display: block;
  }
  &__type {
    position: relative;
    color: $white;
    margin-left: 5px;
    text-transform: capitalize;
  }
  &__year {
    margin-left: 5px;
  }
  &__detailes {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__detailes-btn {
    background-color: $black;
    border: $red 2px solid;
    border-radius: 5px;
    font-size: 1rem;
    color: $white;
    padding: 10px;
    &:hover {
      cursor: pointer;
      transition: background-color 1s ease;
      background-color: $gray;
      border: $white 2px solid;
    }
  }
  &__image-container {
    display: block;
  }
  &__image {
    border-radius: 4px;
    width: 294px;
    height: 400px;
  }
}
</style>
