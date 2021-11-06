<template>
  <div
    id="perfil"
    class="bg-white border-gray-200 border rounded-2xl w-80 mb-4"
  >
    <img
      src="https://image.freepik.com/fotos-gratis/belo-fogo-de-artificio-colorido-exibir-a-noite-para-comemorar_74190-9539.jpg"
      alt="banner"
      class="w-80 h-32 object-cover rounded-t-xl"
    />
    <div id="info" class="flex gap-3 border-gray-200 border-t px-4">
      <img
        src="https://yaktribe.games/community/media/gandalf-jpg.45940/full"
        alt="profile image"
        class="
          h-24
          object-cover
          rounded-full
          transform
          -translate-y-8
          border-4 border-white
        "
      />
      <div>
        <p class="text-lg font-semibold mt-2">{{ name }}</p>
        <p class="text-xs font-semibold text-gray-500">
          {{ user }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-3 px-8 text-center gap-2">
      <p class="md:text-xs">TWEETS</p>
      <p class="md:text-xs">FOLLOWING</p>
      <p class="md:text-xs">FOLLOWERS</p>
      <p class="md:text-xs font-bold">2.409</p>
      <p class="md:text-xs font-bold">200</p>
      <p class="md:text-xs font-bold">200</p>
    </div>

    <form id="newTweet" class="w-full max-w-sm p-4">
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
              pt-4
              leading-tight
              focus:outline-none
              resize-none
              h-12
            "
            aria-label="Full name"
          />
        </ResizableTextarea>
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
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ResizableTextarea from "@/components/ResizableTextarea";

export default {
  name: "Perfil",

  components: {
    ResizableTextarea,
  },

  data() {
    return {
      writing: false,
      tweets: [],
      name: "Gandalf ex cizento",
      user: "@reidelas",
      text: "",
      profileImage:
        "https://yaktribe.games/community/media/gandalf-jpg.45940/full",
    };
  },

  methods: {
    ...mapMutations(["addTweet"]),

    create() {
      if (this.text.trim().length > 0 ) {
        fetch("/api/tweets", {
          method: "POST",
          body: JSON.stringify({
            name: this.name,
            user: this.user,
            text: this.text,
            profileImage: this.profileImage,
            favorite: false,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            this.addTweet(res.tweet);
            this.text = "";
          });
      } 
    },
  },
};
</script>
