export const setLoading = (state, value) => {
  state.isLoading = value;
};

export const setEntries = (state, entries) => {
  state.entries = [...entries];
};

export const setEntriesSearch = (state, entries) => {
  state.entries = [...entries];
};
