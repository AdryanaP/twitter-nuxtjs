export const state = () => ({
  tweets: [],
  favorites: [],
  user: {
    id: '1',
  },
})

export const mutations = {
  setTweet(state, payload) {
    state.tweets.unshift(payload)
  },
  setTweets(state, payload) {
    state.tweets = payload
  },
  setUsers(state, payload) {
    state.users = payload
  },
  setFavorites(state, payload) {
    state.favorites = payload
  },
}

export const actions = {
  async loadFeed({ commit }) {
    await this.$axios.$get(`/api/favorites`).then((res) => {
      commit('setFavorites', res)
    })
    await this.$axios.$get('/api/tweets').then((res) => {
      commit('setTweets', res.tweets)
    })
  },

  addTweet({ state, commit }, payload) {
    this.$axios
      .$post('/api/tweets', {
        userId: state.user.id,
        text: payload,
      })
      .then((res) => {
        commit('setTweet', res.tweet)
      })
  },

  addFavorite({ state, commit }, payload) {
    this.$axios
      .$post('/api/favorites', {
        tweetId: payload,
        userId: state.user.id,
      })
      .then((res) => {
        commit('setFavorites', res)
      })
  },

  removeFavorite({ commit }, payload) {
    this.$axios.$delete(`/api/favorites/${payload}`).then((res) => {
      commit('setFavorites', res)
    })
  },
}
