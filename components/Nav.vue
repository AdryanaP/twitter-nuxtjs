<template>
  <div>
    <nav
      class="
        bg-white
        flex
        lg:justify-evenly
        fixed
        top-0
        w-screen
        justify-items-center justify-between
        items-center
        px-2
        border-b border-gray-200
        p-2
        lg:h-auto
        h-14
        z-20
      "
    >
      <ul class="lg:flex lg:p-0 m-0 space-x-o.5 gap-1 items-center hidden">
        <li
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            font-bold
            gap-1
          "
        >
          <HomeIcon class="h-6 w-6" />

          Home
        </li>
        <li
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            gap-1
            transition
            duration-100
          "
        >
          <BellIcon class="h-6 w-6" />

          Notifications
        </li>
        <li
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            gap-1
            transition
            duration-100
          "
        >
          <HashtagIcon class="h-6 w-6" />

          Discover
        </li>
        <li
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            gap-1
            transition
            duration-100
          "
        >
          <UserIcon class="h-6 w-6" />

          Me
        </li>
      </ul>
      <img
        src="https://image.flaticon.com/icons/png/512/889/889147.png"
        alt="icon twitter"
        class="
          lg:w-10 lg:h-10 lg:block
          md:h-14 md:w-14
          hidden
        "
      />
      <img
        src="https://yaktribe.games/community/media/gandalf-jpg.45940/full"
        alt="icon perfil"
        class="h-11 w-11 rounded-full block lg:hidden"
      />

      <div class="lg:flex lg:space-x-4 hidden w-27 justify-center">
        <form method="GET">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <span class="p-1 focus:outline-none focus:shadow-outline">
                <SearchIcon class="w-4 h-4" />
              </span>
            </span>
            <input
              type="search"
              name="search"
              class="
                py-1
                text-sm text-gray-900
                rounded-md
                py-2
                pl-10
                bg-gray-100
                rounded-3xl
                focus:outline-blue focus:bg-white
              "
              placeholder="Search"
              autocomplete="off"
            />
          </div>
        </form>
        <ul class="flex space-x-2">
          <li class="cursor-pointer">
            <ChatAlt2Icon class="h-7 w-7" />
          </li>
          <li class="cursor-pointer">
            <CogIcon class="h-7 w-7" />
          </li>
          <li class="cursor-pointer">
            <PencilAltIcon class="h-7 w-7" />
          </li>
        </ul>
      </div>

      <button
        class="
          lg:hidden
          text-white
          font-bold
          uppercase
          text-sm
          p-3
          rounded-full
          shadow
          outline-none
          focus:outline-none
          bg-blueTT
          ease-linear
          transition-all
          duration-150
          rounded
          outline-none
          focus:outline-none
          capitalize
          w-auto
        "
        type="button"
        v-on:click="toggleDropdown()"
        ref="btnDropdownRef"
      >
        <MenuIcon class="h-5 w-5" />
      </button>

      <div
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
        class="
          bg-white
          text-base
          z-50
          py-2
          list-none
          items-center
          rounded-lg
          shadow-lg
          mt-1
          w-12
        "
        ref="popoverDropdownRef"
      >
        <ul class="flex flex-col space-x-2 m-1">
          <li class="cursor-pointer" id="chat">
            <ChatAlt2Icon class="h-7 w-7 ml-2" />
          </li>
          <li class="cursor-pointer" id="config">
            <CogIcon class="h-7 w-7" />
          </li>
          <li class="cursor-pointer" id="addTweet">
            <PencilAltIcon class="h-7 w-7" />
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="
        bg-white
        justify-between justify-around justify-center justify-items-center
        items-center
        lg:border-b
        border-gray-200 border-t
        lg:h-auto
        h-14
        fixed
        bottom-0
        inset-x-0
        lg:hidden
      "
    >
      <ul
        class="flex p-0 m-0 h-14 space-x-o.5 gap-1 items-center justify-around"
      >
        <li
          id="home"
          class="
            flex
            cursor-pointer
            bg-lightBlue
            rounded-full
            p-3
            font-bold
            gap-1
          "
        >
          <HomeIcon class="h-6 w-6" />
        </li>
        <li
          id="notifications"
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            gap-1
            transition
            duration-100
          "
        >
          <BellIcon class="h-6 w-6" />
        </li>
        <li
          id="discover"
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            gap-1
            transition
            duration-100
          "
        >
          <HashtagIcon class="h-6 w-6" />
        </li>
        <li
          id="perfil"
          class="
            flex
            cursor-pointer
            hover:bg-lightBlue
            rounded-full
            p-3
            gap-1
            transition
            duration-100
          "
        >
          <UserIcon class="h-6 w-6" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
import { HomeIcon } from '@vue-hero-icons/solid'
import { BellIcon } from '@vue-hero-icons/outline'
import { HashtagIcon } from '@vue-hero-icons/outline'
import { UserIcon } from '@vue-hero-icons/outline'
import { SearchIcon } from '@vue-hero-icons/outline'
import { ChatAlt2Icon } from '@vue-hero-icons/outline'
import { CogIcon } from '@vue-hero-icons/outline'
import { PencilAltIcon } from '@vue-hero-icons/outline'
import { MenuIcon } from '@vue-hero-icons/outline'

export default {
  name: 'dropdown',

  components: {
    HomeIcon,
    BellIcon,
    HashtagIcon,
    UserIcon,
    SearchIcon,
    ChatAlt2Icon,
    CogIcon,
    PencilAltIcon,
    MenuIcon,
  },

  data() {
    return {
      dropdownPopoverShow: false,
    }
  },

  methods: {
    toggleDropdown() {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
}
</script>
