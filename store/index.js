export const state = () => ({
    user: null  // This will store the user data
  });
  
  export const mutations = {
    // Mutation to set the user data
    SET_USER(state, user) {
      state.user = user;
    }
  };
  
  export const actions = {
    // Action to set the user data (called after successful login)
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  
    // Action to handle logout
    logout({ commit }) {
      commit('SET_USER', null);  // Reset the user data to null
      localStorage.removeItem('userData');  // Remove user data from localStorage
    },
  
    // Action to handle page refresh and reinitialize the Vuex state from localStorage
    nuxtClientInit({ commit }) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        commit('SET_USER', userData);
      }
    }
  };
  