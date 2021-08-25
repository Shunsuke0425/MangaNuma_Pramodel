<template>
  <div class="ma-5">
    <v-row v-for="n in rowNum" :key="n">
      <v-col v-for="m in colNum(n)" :key="m">
        <MangaCard :book="books[(n - 1) * 3 - m]" :width="80" :height="120" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import MangaCard from "../common/MangaCard.vue";
import { Book } from "../../types/Book";

export default Vue.extend({
  name: "MangaListView",
  components: {
    MangaCard,
  },
  props: {
    books: {
      type: Array as PropType<Book[]>,
      default: (): Book[] => [],
      required: false,
    },
  },
  computed: {
    rowNum(): number {
      return ((this.books.length / 3) | 0) + 1;
    },
  },
  methods: {
    colNum(row: number): number {
      const remain = this.books.length - (row - 1) * 3;
      console.log(this.books.length);
      if (remain >= 3) return 3;
      else return remain;
    },
  },
});
</script>

<style scoped>
div {
  text-align: center;
}
</style>
