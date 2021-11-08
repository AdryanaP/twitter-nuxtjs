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
  updateTweet(state, payload) {
    const foundTweet = state.tweets.find(
      tweet => tweet.id === payload.id
    )
    if(foundTweet) {
      Object.assign(foundTweet, payload)
    }
  }
}