<template>
  <v-row justify="center">
    <MangaCard :width="100" :height="150" :book="book" />
    <div class="ml-5">
      {{ book.freePage }}話無料
      <h2>{{ book.title }}</h2>
      <p>作者: {{ book.author }}</p>
      説明文..................
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import MangaCard from "../common/MangaCard.vue";
import { Book } from "../../types/Book";
import { dummyBooks } from "../../dummyData/DummyBooks";

export default Vue.extend({
  name: "MangaDetailTexts",
  components: {
    MangaCard,
  },
  props: {
    book: {
      type: Object as PropType<Book>,
      default: (): Book => dummyBooks[0],
      required: false,
    },
  },
});
</script>
