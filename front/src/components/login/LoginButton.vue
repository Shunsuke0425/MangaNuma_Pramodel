<template>
  <div class="pt-4">
    <v-btn elevation="5" @click="login">ログイン</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    login(): void {
      this.$emit("login");
    },
  },
});
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 100%;
  max-width: 100px;
}
</style>
