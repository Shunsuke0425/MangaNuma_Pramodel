<template>
  <v-row justify="center">
    <MangaCard :width="100" :height="150" />
    <div class="ml-5">
      10話無料
      <h2>{{ book.title }}</h2>
      <p>作者: 作者</p>
      説明文..................
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import MangaCard from "../common/MangaCard.vue";
import { Book } from "../../types/Book";

export default Vue.extend({
  name: "MangaDetailTexts",
  components: {
    MangaCard,
  },
  props: {
    book: {
      type: Object as PropType<Book>,
      default: (): Book => ({
        title: "ワンピース",
        src: "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
      }),
      required: false,
    },
  },
});
</script>
