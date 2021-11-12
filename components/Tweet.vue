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
        <p class="md:text-base text-sm font-semibold">{{ tweet.user.name }}</p>
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
            @click="update"
          >
            <StarIcon
              class="lg:h-3 lg:w-3 h-4 w-4 lg:m-0"
              :class="star ? 'text-yellow-500' : 'text-gray'"
              :fill="star ? 'currentColor' : 'none'"
            />
            <span class="flex hidden lg:block"> Favorite {{this.tweet.favorite}}</span>
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
import { mapMutations } from 'vuex'
import { ReplyIcon } from '@vue-hero-icons/outline'
import { RefreshIcon } from '@vue-hero-icons/outline'
import { StarIcon } from '@vue-hero-icons/outline'
import { DotsHorizontalIcon } from '@vue-hero-icons/outline'

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

  data() {
    return {
      star: false
    }
  },

  methods: {
    ...mapMutations(['updateTweet']),

    update() {
        this.$axios.$put(`/api/tweets/${this.tweet.id}`, {
          favorite: this.tweet.favorite +1 
        }).then((res) => {
          this.updateTweet(res)
          this.star = !this.star
        })
    },
  },
}
</script>