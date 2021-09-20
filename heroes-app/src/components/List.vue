<template>
  <section class="fondo">
    <div class="loader-page" v-if="isLoading"></div>
    <div class="empty-page" v-if="!isLoading && getEntries.length === 0">
      <h2 class="empty_tittle">Sin Resultados</h2>
    </div>
    <div class="cards" v-if="!isLoading && getEntries.length > 0">
      <div
        class="card"
        v-for="item in getEntries"
        v-bind:key="item"
        v-bind:item="item"
      >
        <div
          class="card__img"
          v-bind:style="{ backgroundImage: 'url(' + item.url + ')' }"
        ></div>
        <div class="card_texts">
          <h2 class="card_tittle">{{ item.name }}</h2>
          <h3 class="card_subtittle">{{ item.alignment }}</h3>
          <div class="card__cta">
            <p>Intelligence: {{ item.powerstats.intelligence }}</p>
            <p>Strength: {{ item.powerstats.strength }}</p>
            <p>Speed: {{ item.powerstats.speed }}</p>
            <p>Durabipty: {{ item.powerstats.durabipty }}</p>
            <p>Power: {{ item.powerstats.power }}</p>
            <p>Combat: {{ item.powerstats.combat }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "List",
  computed: {
    ...mapGetters("heroeStore", ["getEntries"]),
    ...mapState("heroeStore", ["isLoading"]),
  },
};
</script>

<style scoped>
.cards {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  padding: 60px 0;
  gap: 2em;
}
.card {
  padding-bottom: 2.5em;
  width: 100%;
  border-radius: 1em;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  background: whitesmoke;
}
.card__cta {
  background: #041679f5;
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  margin-top: auto;
  border-radius: 8px;
  border: 2px solid #1c1d1f;
}
.card__paragraph {
  padding: 1em 0;
  text-align: center;
}
.card_texts {
  padding: 1em;
}
.card__img {
  image-rendering: auto;
  background-size: cover;
  align-items: center;
  border-radius: 1em 1em 0 0;
  text-align: center;
  height: 371px;
  width: auto;
}
.card_subtittle {
  margin-top: 0;
  text-align: center;
}
.card_tittle {
  margin-bottom: 0.5rem;
  text-align: center;
}

.loader-page {
  position: fixed;
  z-index: 25000;
  background-image: linear-gradient(
    135deg,
    #000834,
    #121e61,
    #070b22,
    #061da0,
    #191230,
    #2a2e47,
    #ff7cae
  );
  background-size: 500%;
  animation: fanimado 10s infinite;
  left: 0px;
  top: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.loader-page::before {
  content: "";
  position: absolute;
  border: 2px solid rgb(50, 150, 176);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-sizing: border-box;
  border-left: 2px solid rgba(50, 150, 176, 0);
  border-top: 2px solid rgba(50, 150, 176, 0);
  animation: rotarload 1s linear infinite;
  transform: rotate(0deg);
}
@keyframes rotarload {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader-page::after {
  content: "";
  position: absolute;
  border: 2px solid rgba(50, 150, 176, 0.5);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-sizing: border-box;
  border-left: 2px solid rgba(50, 150, 176, 0);
  border-top: 2px solid rgba(50, 150, 176, 0);
  animation: rotarload 1s ease-out infinite;
  transform: rotate(0deg);
}

.fondo {
  background-image: linear-gradient(
    135deg,
    #000834,
    #121e61,
    #070b22,
    #061da0,
    #191230,
    #2a2e47,
    #ff7cae
  );
  background-size: 500%;
  animation: fanimado 10s infinite;
}
@keyframes fanimado {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.empty-page {
  position: fixed;
  z-index: 25000;
  background-image: linear-gradient(
    135deg,
    #000834,
    #121e61,
    #070b22,
    #061da0,
    #191230,
    #2a2e47,
    #ff7cae
  );
  background-size: 500%;
  animation: fanimado 10s infinite;
  left: 0px;
  top: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.empty_tittle {
  color: white;
  text-align: center;
}
</style>
