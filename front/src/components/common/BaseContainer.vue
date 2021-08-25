<template>
  <div>
    <v-app-bar color="deep-purple accent-4" fixed>
      <v-app-bar-nav-icon>
        <v-icon color="white">mdi-book-open-variant</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title style="color: white" class="pl-0">
        MangaNuma
      </v-app-bar-title>
      <v-spacer />
      <v-card width="60" color="grey lighten-2" style="text-align: right"
        >{{ point }} P</v-card
      >
    </v-app-bar>
    <div style="height: 60px" />

    <slot name="mainContents"></slot>

    <div style="height: 60px" />
    <v-footer
      class="d-flex justify-space-around"
      color="deep-purple accent-4"
      fixed
      height="60"
    >
      <v-btn fab small color="white">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn fab small color="white">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn fab small color="yellow"><h1>P</h1></v-btn>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    point: {
      type: Number,
      default: 100,
      required: false,
    },
  },
});
</script>

<style scoped></style>
