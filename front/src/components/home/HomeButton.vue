<template>
  <div>
    <v-btn
      :elevation="1"
      @click="pushButton"
    >
      {{ buttonText }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Button",
  props: {
    buttonText: {
      type: String,
      default: "",
      required: true
    }
  },
  methods: {
    pushButton(): void {
      this.$emit("button-push", "ええええ");
    }
  }
})
</script>
