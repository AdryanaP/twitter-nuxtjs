</script>
<template>
  <div
    id="about"
    class="
      flex flex-wrap
      gap-1
      bg-white
      border-gray-200 border
      rounded-2xl
      p-4
      w-80
      mb-4
    "
  >
    <Link v-for="(title, i) in titles" :key="i" :title="title" />
  </div>
</template>

<script>
import Link from "@/components/Link";

export default {
  name: "About",

  components: {
    Link,
  },

  data() {
    return {
      titles: [
        "© 2014",
        "Twitter",
        "About",
        "Help",
        "Terms",
        "Privacy",
        "Cookies",
        "Ads",
        "Info",
        "Brand",
        "Blog",
        "Status",
        "Apps",
        "Jobs",
        "Advertise",
        "Businesses",
        "Media",
        "Developers",
      ],
    };
  },
};
</script>
