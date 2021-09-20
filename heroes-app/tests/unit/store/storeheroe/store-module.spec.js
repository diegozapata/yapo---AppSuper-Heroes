import { createStore } from "vuex";
import heroeStore from "../../../../src/components/store/storeheroe";
import { heroeState } from "../../../../src/mock-data/test-storeheroe-state";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      heroeStore: {
        ...heroeStore,
        state: { ...initialState },
      },
    },
  });

describe("Vuex- Pruebas en el storeHeroe Module", () => {
  test("este es el estado inicial, debe de tener este state", () => {
    const store = createVuexStore(heroeState);
    const { isLoading, entries } = store.state;

    expect(isLoading).toBeFalsy();
    expect(entries).toEqual(store.entries);
  });
});
