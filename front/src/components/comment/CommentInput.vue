<template>
  <div>
    <v-row>
      <v-col cols="8" md="4">
        <v-text-field
          v-model="addtext"
          label="コメントを入力してください"
          outlind
          hide-details="false"
          required
        ></v-text-field>
      </v-col>
      <v-btn @click="addClick">送信</v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: {
    addtext: "",
  },
  methods: {
    addClick(): void {
      if (this.addtext) {
        this.$emit("add-click", this.addtext);
      }
    },
  },
});
</script>
<style scoped></style>
