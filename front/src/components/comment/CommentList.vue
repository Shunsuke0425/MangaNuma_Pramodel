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
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "CommentList",
  props: {
    getMessage: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: true,
    },
  },
});
</script>

<style scoped></style>
