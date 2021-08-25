<template>
  <div>
    <h1>婚姻届</h1>
    <div v-for="commentText in getMessage" v-bind:key="commentText">
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
