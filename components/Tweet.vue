<template>
  <div class="flex gap-4 gap-4 p-4 border-gray-200 border-t">
    <div
      class="
        w-12
        md:w-14
        h-12
        md:h-14
        flex
        justify-center
        items-center
        flex-shrink-0
      "
    >
      <img
        :src="tweet.user.profileImage"
        alt="profile image"
        class="lg:h-14 lg:w-16 h-12 object-cover rounded-full"
      />
    </div>

    <div class="w-full">
      <div class="flex md:space-x-2 space-x-1 items-baseline">
        <p class="md:text-base text-sm font-semibold w-max">
          {{ tweet.user.name }}
        </p>
        <p class="text-xs font-semibold text-gray-500">
          {{ tweet.user.username }}
        </p>
      </div>
      <p class="mb-2 break-all">
        {{ tweet.text }}
      </p>
      <img
        v-if="tweet.postImage"
        :src="tweet.postImage"
        alt="post image"
        class="w-44 h-32 lg:h-60 lg:w-96 rounded-lg object-cover mb-2 border"
      />
      <div class="flex justify-between">
        <button
          type="button"
          class="
            text-gray-500
            hover:text-gray-800
            active:text-gray-800
            transition
            duration-100
            text-xs
            hidden
            lg:block
          "
        >
          Expand
        </button>
        <div class="flex space-x-2 flex-wrap gap-6 lg:gap-0">
          <button
            type="button"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <ReplyIcon class="lg:h-3 lg:w-3 h-4 w-4 lsg:m-0" />

            <span class="flex hidden lg:block"> Reply </span>
          </button>

          <button
            type="button"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <RefreshIcon class="lg:h-3 lg:w-3 h-4 w-4 lg:m-0" />

            <span class="flex hidden lg:block"> Retweet </span>
          </button>

          <button
            v-if="isFavorite"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
            @click="undoFav"
          >
            <StarIcon
              class="lg:h-3 lg:w-3 h-4 w-4 lg:m-0 text-yellow-500"
              fill="currentColor"
            />
            <span v-if="tweetFavorites.length">
              {{ tweetFavorites.length }}</span
            >
          </button>

          <button
            v-else
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
            @click="doFav"
          >
            <StarIcon
              class="lg:h-3 lg:w-3 h-4 w-4 lg:m-0 text-gray"
              fill="none"
            />
            <span v-if="tweetFavorites.length">
              {{ tweetFavorites.length }}</span
            >
          </button>

          <button
            type="button"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <DotsHorizontalIcon class="lg:h-3 lg:w-3 h-4 w-4" />

            <p class="hidden lg:block">More</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  ReplyIcon,
  RefreshIcon,
  StarIcon,
  DotsHorizontalIcon,
} from '@vue-hero-icons/outline'

export default {
  name: 'Tweet',

  components: {
    ReplyIcon,
    RefreshIcon,
    StarIcon,
    DotsHorizontalIcon,
  },

  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState(['favorites', 'user']),

    tweetFavorites() {
      return this.favorites.filter(
        (favorite) => favorite.tweetId === this.tweet.id
      )
    },

    isFavorite() {
      return this.tweetFavorites.find(
        (favorite) =>
          favorite.tweetId === this.tweet.id && favorite.userId === this.user.id
      )
    },
  },

  methods: {
    ...mapActions(['addFavorite', 'removeFavorite']),

    doFav() {
      this.addFavorite(this.tweet.id)
    },
    undoFav() {
      this.removeFavorite(this.isFavorite.id)
    },
  },
}
</script>
