<template>
  <div class="detailes">
    <div class="movie__title-bar">
      <div class="movie__title-left">
        <div class="movie__title-text">
          <h1>{{ detailes.Title }}</h1>
        </div>
        <div class="movie__title-left-wrapper">
          <div class="movie__title-year">
            <p>{{ detailes.Year }}</p>
          </div>
          <div class="movie__rated">
            <p>{{ detailes.Rated }}</p>
          </div>
          <div class="movie__runtime">
            <p>{{ detailes.Runtime }}</p>
          </div>
        </div>
      </div>
      <div class="movie__title-right">
        <div class="movie__title-imdb-rating">
          <span class="movie__title-rating-lable"> IMDb RATING</span> :
          <span class="movie__title-rating-value">{{ detailes.imdbRating }}</span> / 10
        </div>
        <div class="movie__title-imdb-votes">
          <span class="movie__title-voters-lable"> TOTAL VOTES</span> :
          <span class="movie__title-voters-value">{{ detailes.imdbVotes }}</span>
        </div>
      </div>
    </div>
    <main class="detailes__main">
      <div class="movie__poster"><img :src="detailes.Poster" alt="Movie Cover" /></div>
      <div class="detailes__wrapper">
        <div class="movie__genre">
          <p><span> Genra</span> : {{ detailes.Genre }}</p>
        </div>
        <div class="movie__writer">
          <p><span>Writer</span> : {{ detailes.Writer }}</p>
        </div>
        <div class="movie__language">
          <p><span>Language</span> : {{ detailes.Language }}</p>
        </div>
        <div class="movie__actors">
          <p><span>Actors</span> : {{ detailes.Actors }}</p>
        </div>
      </div>
      <div class="movie__plot">
        <p><span> About</span> : {{ detailes.Plot }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const api_url = 'http://www.omdbapi.com'
    const api_key ='a697e544'
    const detailes = ref({});
    const route = useRoute();
    const MovieDetailes = () => {
      fetch(`${api_url}/?i=${route.params.id}&plot=full&apikey=${api_key}`)
        .then((response) => response.json())
        .then((data) => {
          detailes.value = data;
          console.log(data);
        });
    };
    onMounted(() => {
      MovieDetailes();
    });
    return {
      detailes,
      route,
      MovieDetailes,
    };
  },
};
</script>

<style lang="scss">
.detailes {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  color: $white;
  background-color: $black;
}
.movie__title {
  &-bar {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    padding: 30px 100px;
  }
  &-text {
    margin: 0;
    padding: 0;

    h1 {
      margin: 0;
      padding: 0;
    }
  }
  &-left {
    display: flex;
    flex-flow: column wrap;
  }
  &-left-wrapper {
    display: flex;
    flex-flow: wrap row;
    gap: 15px;
    color: $purple;
  }
  &-imdb-rating {
    margin-bottom: 10px;
  }
  &-rating-lable {
    color: gray;
  }
  &-rating-value {
  color: $purple;
  }
  &-voters-lable {
    color: gray;
  }
  &-voters-value {
  color: $purple;
  }
}
.detailes__main {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  span {
    color: gray;
  }
}
.movie__plot {
  width: 50%;
  span {
    color: gray;
  }
  @include mq(tablet, max) {
    width: 95%;
    margin-left: 10px;
  }
}
.detailes__wrapper {
  width: 50%;
  @include mq(tablet, max) {
    display: flex;
    flex-flow: column wrap;
    margin-left: 10px;
    width: 95%;
  }
}
</style>
