<template>
  <v-card :height="height" :width="width" elevation="5" @click="cardTap">
    <v-img :src="book.src" :height="height" :width="width" />
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Book } from "../../types/Book";

export default Vue.extend({
  name: "MangaCard",
  props: {
    book: {
      type: Object as PropType<Book>,
      default: (): Book => ({
        title: "ワンピース",
        src: "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
      }),
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
