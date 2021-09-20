import heroesApi from "../../helpers/service";

export const loadEntrieBatman = async ({ commit }) => {
  commit("setLoading", true);
  const entries = [];
  try {
    const { data } = await heroesApi.get("/70");
    entries.push({
      name: data.name,
      alignment: data.biography.alignment,
      powerstats: data.powerstats,
      url: data.image.url,
    });
    commit("setEntries", entries);
  } catch (error) {
    console.log(error);
  }
  commit("setLoading", false);
};

export const updateEntries = async ({ commit }, filter) => {
  if (filter !== null) {
    commit("setLoading", true);
    const entries = [];
    try {
      const { data } = await heroesApi.get("/search/" + filter);
      if (data.response !== "error") {
        for (let id of Object.keys(data.results)) {
          entries.push({
            name: data.results[id].name,
            alignment: data.results[id].biography.alignment,
            powerstats: data.results[id].powerstats,
            url: data.results[id].image.url,
          });
        }
      }
      commit("setEntriesSearch", entries);
    } catch (error) {
      console.log(error);
    }
    commit("setLoading", false);
  }
};
