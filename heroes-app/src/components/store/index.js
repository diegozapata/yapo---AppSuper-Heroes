import { createStore } from "vuex";
import heroeStore from "./storeheroe";

export default createStore({
  modules: {
    heroeStore,
  },
});
