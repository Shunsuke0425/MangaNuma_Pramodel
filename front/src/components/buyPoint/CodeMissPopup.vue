<template>
  <BasePopup ref="popup" :title="title" :width="260" persisten>
    <template #actions>
      <v-row justify="center">
        <v-btn
          color="red"
          width="180px"
          height="50px"
          class="mb-4"
          @click="closeDialog"
        >
          <div class="pl-3">OK</div>
        </v-btn>
      </v-row>
    </template>
  </BasePopup>
</template>

<script lang="ts">
import Vue from "vue";
import BasePopup from "../common/BasePopup.vue";

export default Vue.extend({
  name: "CodeMissPopup",
  components: {
    BasePopup,
  },
  data() {
    return {
      title: "ナンバーが違います",
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
