<template>
  <div>
    <v-col cols="8" md="4">
      <v-text-field
        :label="labelName"
        class="white"
        outlind
        hide-details="false"
        required
      />
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Form",
  props: {
    labelName: {
      type: String,
      default: "",
      required: true,
    },
  },
});
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 100%;
}
</style>
