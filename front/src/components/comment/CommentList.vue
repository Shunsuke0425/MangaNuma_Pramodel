<template>
  <div>
    <div v-for="commentText in getMessage" v-bind:key="commentText">
      <v-card class="mt-3" height="40">
        <v-icon x-large>mdi-account-circle</v-icon>
        {{ commentText }}
      </v-card>
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
