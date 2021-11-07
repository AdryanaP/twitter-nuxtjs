<template>
  <div class="flex gap-4 pb-1">
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
        :src="profileImage"
        alt="profile image"
        class="w-16 h-14 object-cover rounded-full"
      />
    </div>

    <div class="w-full">
      <div class="flex items-center mb-3 justify-between">
        <div class="flex space-x-2 items-center">
          <p class="text-lg font-semibold">{{ name }}</p>
          <p class="text-lg md:text-xs font-semibold text-gray-500">
            {{ user }}
          </p>
        </div>
        <button class="font-semibold text-xl transform -translate-y-0.5">
          x
        </button>
      </div>
      <button
        type="button"
        @click="following = !following"
        class="mb-2 p-1 px-3 text-xs rounded-full duration-100 transition-colors ease-in-out delay-75 border border-transparent"
        :class="following ? 'bg-white text-black border-gray-200' : 'bg-black text-white'"
      >
        {{ following ? 'Following' : 'Follow' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',

  props: {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      following: false,
    }
  },
}
</script>
