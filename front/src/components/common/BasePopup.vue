<template>
  <v-dialog v-model="dialog" :width="width">
    <v-card>
      <center>
        <v-card-title v-if="title">
          <h3>
            {{ title }}
          </h3>
        </v-card-title>
        <slot name="headerContents" />
        <v-card-text>
          <slot name="contents" />
        </v-card-text>
        <v-card-actions>
          <slot name="actions" />
        </v-card-actions>
      </center>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BasePopup",
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    width: {
      type: Number,
      default: 300,
      required: false,
      validator(width: number) {
        return width > 100 && width < 1400;
      },
    },
    persistent: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    openDialog(): void {
      this.dialog = true;
    },
    closeDialog(): void {
      this.dialog = false;
    },
  },
});
</script>
