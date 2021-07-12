<template>
  <div class="about">
    <div class="about__header">
      <h1>Movies Land Story</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <section class="about__explained">
      <p>
        Pariatur minima sint alias maiores beatae non quam amet voluptatum modi,
        laboriosam reprehenderit molestias eius numquam ipsum neque enim illum, explicabo
        sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi placeat
        distinctio rerum, voluptatibus cum quod quas nemo ex itaque ad voluptate beatae
        magnam nam, animi at praesentium eum reprehenderit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Pariatur quae impedit doloribus molestias tempore
        nihil repellat laudantium mollitia aut natus ullam, excepturi animi, placeat
        veritatis eaque ea reprehenderit? Similique, possimus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta nisi placeat distinctio rerum, voluptatibus
        cum quod quas nemo ex itaque ad voluptate beatae magnam nam, animi at praesentium
        eum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur quae impedit doloribus molestias tempore nihil repellat laudantium
        mollitia aut natus ullam, excepturi animi, placeat veritatis eaque ea
        reprehenderit? Similique, possimus.
      </p>
    </section>
    <section class="about__founder">
      <div class="about__founder-img">
        <img src="../../../images/aboutImages/about.jpg" alt="a cinema picture" />
      </div>
      <div class="about__founder-explained">
        <h2>Our Founding</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
.about {
  display: flex;
  flex-flow: column wrap;
  &__header {
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    justify-content: center;
    background-color: $black;
    h1 {
      color: $red;
    }
    color: $white;
    @include mq(tablet, max) {
      p {
        font-size: 1.1rem;
        width: 60%;
      }
    }
  }
  &__explained {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgb(24, 24, 24);
    color: white;
    padding: 10px 10px 10px 0px;
    p {
      width: 50%;
    }
    @include mq(tablet, max) {
      p {
        width: 100%;
        margin-left: 10px;
      }
    }
  }

  &__founder {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: black;
    color: $white;
    padding: 50px 0px;
    h2 {
      color: $red;
    }
    gap: 20px;
    &-explained {
      width: 40%;
    }
    img {
      width: 500px;
    }
    @include mq(tablet, max) {
      &-explained {
        width: 100%;
        h2 {
          display: flex;
          flex-flow: wrap;
          align-items: center;
          justify-content: center;
        }
        p {
          width: 100%;
          padding: 10px;
        }
      }
      img {
        display: none;
      }
    }
  }
}
</style>
