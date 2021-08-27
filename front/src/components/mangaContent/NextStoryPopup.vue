<template>
  <BasePopup ref="popup" :title="title" :width="230" persisten>
    <template #actions>
      <v-row justify="center">
        <v-btn
          color="deep-purple accent-4"
          width="180px"
          height="50px"
          class="mb-3"
          @click="moveToComment"
        >
          <v-icon color="white">mdi-chat</v-icon>
          <div style="color: white" class="pl-3">コメントを書く</div>
        </v-btn>
        <v-btn
          color="yellow"
          width="180px"
          height="50px"
          class="mb-4"
          @click="moveToMangaContent"
        >
          <v-icon>mdi-book-open-variant</v-icon>
          <div class="pl-3">次の話へ</div>
        </v-btn>
      </v-row>
    </template>
  </BasePopup>
</template>

<script lang="ts">
import Vue from "vue";
import BasePopup from "../common/BasePopup.vue";

export default Vue.extend({
  name: "NoPointPopup",
  components: {
    BasePopup,
  },
  computed: {},
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
    moveToMangaContent(): void {
      this.$emit("move-to-manga-content");
    },
    moveToComment(): void {
      this.$emit("move-to-comment");
    },
  },
});
</script>
