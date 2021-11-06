export const state = () => ({
  tweets: []
})

export const mutations = {
  addTweet(state, payload) {
    state.tweets.unshift(payload)
  },
  setTweet(state, payload) {
    state.tweets = payload
  },
}