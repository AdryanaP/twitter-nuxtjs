<template>
  <div class="flex flex-col bg-white gap-3 border-gray-200 border rounded-2xl p-4 w-80 mb-4"> 
    <h3 class="pb-3 text-lg font-bold">Who to follow</h3>
    <Account name="Saruman" user="@odeioarvores" profileImage="https://www.bluebus.com.br/wp-content/uploads/2015/06/saruman-christopher-lee.jpg" />
    <Account name="Balrog" user="@umcaralegal" profileImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Balrog-of-Morgoth-Cropped.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5" />
  </div>
</template>

<script>
import Account from "@/components/Account"

export default {
  name: "WhoToFollow",
  components: {
    Account
  }
};
</script>
