<template>
  <BaseContainer :point="userPoint">
    <template #mainContents>
      <MangaListView :books="books" @card-tap="moveToMangaDetail" />
    </template>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import MangaListView from "../components/mangaList/MangaListView.vue";
import { Book } from "../types/Book";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    MangaListView,
  },
  computed: {
    books(): Book[] {
      return this.$store.state.books;
    },
    userPoint(): number {
      return this.$store.state.point;
    },
  },
  methods: {
    moveToMangaDetail(index: number): void {
      this.$router.push({
        name: "MangaDetail",
        params: {
          id: index.toString(),
        },
      });
    },
  },
});
</script>
