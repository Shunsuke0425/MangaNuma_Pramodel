<template>
  <v-card :height="height" :width="width" elevation="5" @click="cardTap">
    <v-img :src="book.thumbnailImgSrc" :height="height" :width="width" />
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { dummyBooks } from "../../dummyData/DummyBooks";
import { Book } from "../../types/Book";

export default Vue.extend({
  name: "MangaCard",
  props: {
    book: {
      type: Object as PropType<Book>,
      default: (): Book => dummyBooks[0],
      required: false,
    },
    width: {
      type: Number,
      default: 0,
      required: true,
    },
    height: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  methods: {
    cardTap(): void {
      this.$emit("card-tap");
    },
  },
});
</script>
