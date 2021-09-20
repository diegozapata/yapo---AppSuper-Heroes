<template>
  <div>
    <header class="header">
      <div class="nav">
        <div class="nav__title">
          <h3 class="titulo" @click="loadEntrieBatman">{{ title }}</h3>
        </div>
        <div class="nav__filter">
          <input
            type="text"
            class="filter__input"
            v-model="filter"
            id="filter"
            placeholder="busqueda por nombre"
          />
          <button class="filter__butonn" @click="search" :disabled="isLoading">
            Buscar
          </button>
        </div>
      </div>
    </header>
    <List />
  </div>
</template>

<script>
import List from "../components/List.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Filter",
  components: {
    List,
  },
  data() {
    return {
      title: "Heroes App",
      filter: null,
    };
  },
  computed: {
    ...mapState("heroeStore", ["isLoading"]),
  },
  methods: {
    ...mapActions("heroeStore", ["updateEntries", "loadEntrieBatman"]),
    async search() {
      if (this.filter) {
        this.updateEntries(this.filter);
      } else {
        alert("Debe Escribir por lo menos una letra!");
      }
    },
    async initList() {
      this.loadEntrieBatman();
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  position: sticky;
  z-index: 99;
  width: 100%;
  background: #1c1d1f;
  margin: 0 !important;
}
.titulo {
  color: white;
  cursor: pointer;
}
.nav {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 60px;
}
.filter__input {
  border: 1px solid #ddd4e2;
  box-sizing: border-box;
  border-radius: 8px;
  height: 48px;
  width: 200px;
  text-align: center;
  margin-right: 1rem;
}
.filter__butonn {
  background: #1c1d1f;
  box-sizing: border-box;
  border-radius: 8px;
  height: 48px;
  width: 200px;
  border: 2px solid #a096ab;
  color: white;
  cursor: pointer;
}
button:disabled {
  background: #a096ab57 !important;
  cursor: no-drop;
}
</style>
