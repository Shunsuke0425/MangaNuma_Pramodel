<template>
  <BasePopup ref="popup" :title="title" :width="500" persistent>
    <template #contents> aaaa </template>
    <template #actions>
      <!-- <v-btn color="primary"" @click="confirm">共有</v-btn>
      <v-btn color="error" @click="closeDialog">キャンセル</v-btn> -->
    </template>
  </BasePopup>
</template>

<script lang="ts">
import Vue from "vue";
import BasePopup from "../common/BasePopup.vue";

export default Vue.extend({
  name: "LabelPopup",
  components: {
    BasePopup,
  },
  data() {
    return {
      title: "コメントを書いてポイントゲット!!",
    };
  },
  methods: {
    openDialog(): void {
      (this.$refs.popup as InstanceType<typeof BasePopup>).openDialog();
    },
    closeDialog(): void {
      (this.$refs.popup as InstanceType<typeof BasePopup>).closeDialog();
    },
  },
});
</script>
