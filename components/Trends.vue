<template>
  <div
    id="trends"
    class="
      bg-white
      border-gray-200 border
      rounded-2xl
      p-4
      w-80
      mb-4
    "
  >
    <h3 class="pb-3 text-lg font-bold">Trends</h3>
    <div class="flex flex-col gap-2">
      <Link :title="title" v-for="(title, i) in titles" :key="i" />
    </div>
  </div>
</template>

<script>
import Link from "@/components/Link";

export default {
  name: "Trends",
  data() {
    return {
      titles: [
        "#foraBolsonaro",
        "#contrateEssaDev",
        "#ILoveRockbuzz",
        "#takingTheHobbitsToIsengard",
        "#whatDidYouSay",
        "#tellMeWhereIsGandalf",
        "#theBalrogOfMorgoth",
      ],
    };
  },
  components: {
    Link,
  },
};
</script>
