<template>
  <div>
    <button
      class="rounded-full p-3 fixed lg:hidden bg-blueTT z-10 bottom-16 right-3"
      type="button"
      v-on:click="toggleModal()"
    >
      <PencilIcon class="h-7 w-7 text-white" />
    </button>
    <div
      v-if="showModal"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        lg:hidden
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl hx">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--body-->
          <div class="relative p-6 flex-auto py-8">
            <div class="flex justify-between">
              <img
                src="https://yaktribe.games/community/media/gandalf-jpg.45940/full"
                alt="profile image"
                class="lg:h-14 lg:w-16 h-12 object-cover rounded-full"
              />
              <button
                v-on:click="toggleModal()"
                type="button"
                class="
                  text-red-600
                  font-bold
                  text-2xl
                  transform
                  -translate-y-10
                  translate-x-4
                "
              >
                ×
              </button>
            </div>
            <form id="newTweet" class="w-full max-w-sm p-2 flex flex-col gap-5">
              <div
                class="
                  flex
                  items-center
                  border-b border-teal-500
                  focus-within:border-blueTT
                  rounded-sm
                  py-2
                "
              >
                <ResizableTextarea>
                  <textarea
                    ref="myTextarea"
                    @keyup.enter="create"
                    v-model="text"
                    name="text"
                    id="tweetText"
                    type="text"
                    autocomplete="off"
                    maxlength="150"
                    placeholder="Compose new Tweet..."
                    class="
                      appearance-none
                      w-full
                      mr-3
                      py-1
                      px-2
                      leading-tight
                      focus:outline-none
                      resize-none
                      h-10
                    "
                    aria-label="Full name"
                  />
                </ResizableTextarea>
              </div>
              <button
                @click="create"
                class="
                  flex-shrink-0
                  bg-teal-500
                  hover:bg-teal-700
                  bg-blueTT
                  text-sm text-white
                  py-1
                  px-4
                  rounded-3xl
                "
                type="button"
              >
                Tweet
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="opacity-25 fixed inset-0 z-40 bg-black lg:hidden"
    ></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { PencilIcon } from '@vue-hero-icons/outline'
import ResizableTextarea from '@/components/ResizableTextarea'

export default {
  name: 'Perfil',

  components: {
    ResizableTextarea,
    PencilIcon,
  },

  data() {
    return {
      writing: false,
      showModal: false,
      tweets: [],
      name: 'Gandalf ex cizento',
      user: '@reidelas',
      text: '',
      profileImage:
        'https://yaktribe.games/community/media/gandalf-jpg.45940/full',
    }
  },

  methods: {
    ...mapMutations(['addTweet']),

    toggleModal() {
      this.showModal = !this.showModal
    },

    create() {
      if (this.text.trim().length > 0) {
        this.$axios
          .$post('/api/tweets', {
            name: this.name,
            user: this.user,
            text: this.text,
            profileImage: this.profileImage,
            favorite: 0,
          })
          .then((res) => {
            this.addTweet(res.tweet)
            this.showModal = false
            this.text = ''
          })
      }
    },
  },
}
</script>
