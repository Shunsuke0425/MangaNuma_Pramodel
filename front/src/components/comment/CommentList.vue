<template>
  <div>
    <div v-for="commentText in getMessage" v-bind:key="commentText">
      <v-icon>mdi-account-circle</v-icon>
      {{ commentText }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CommentList",
  data() {
    return {
      commentText: "",
    };
  },
  props: {
    getMessage: {
      type: [String],
      default: "",
      required: true,
    },
  },
});
</script>

<style scoped></style>
