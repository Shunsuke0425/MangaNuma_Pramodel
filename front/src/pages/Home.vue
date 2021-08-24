<template>
  <div>
    <HomeButton
      :buttonText="name"
      @button-push="buttonPush"
    />
    <hello-world />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import HomeButton from "../components/home/HomeButton.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
    HomeButton
  },
  data() {
    return {
      name: "いいい"
    }
  },
  methods: {
    buttonPush(newText: string): void {
      console.log("aaaaa");
      this.name = newText;
    }
  }
});
</script>
