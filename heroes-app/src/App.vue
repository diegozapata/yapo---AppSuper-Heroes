<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions("heroeStore", ["loadEntrieBatman"]),
  },
  created() {
    this.loadEntrieBatman();
  },
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: -8px !important;
}
</style>
