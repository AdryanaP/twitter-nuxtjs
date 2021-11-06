<template>
  <a
    :href="href"
    class="
      items-center
      hover:text-blueTT
      active:text-gray-800
      transition
      duration-100
      text-xs
      cursor-pointer
    "
  >
    {{ title }}
  </a>
  
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
    }
  },
};
</script>
