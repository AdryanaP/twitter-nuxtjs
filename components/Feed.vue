<template>
  <div
    id="feed"
    class="
      w-auto
      bg-white
      border-gray-200 border
      lg:rounded-2xl lg:w-33 lg:max-w-33
    "
  >
    <h2 class="p-3 text-lg font-bold hidden lg:block">Tweets</h2>
    <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Tweet from '@/components/Tweet.vue'

export default {
  name: 'Feed',

  components: {
    Tweet,
  },

  computed: {
    ...mapState(['tweets']),
  },

  created() {
    this.loadFeed()
  },

  methods: {
    ...mapActions(['loadFeed']),
  },
}
</script>
