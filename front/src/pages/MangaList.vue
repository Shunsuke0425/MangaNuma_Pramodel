<template>
  <BaseContainer>
    <template #mainContents>
      <MangaListView :books="dummyBooks" />
    </template>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import MangaListView from "../components/mangaList/MangaListView.vue";
import { dummyBooks } from "../dummyData/DummyBooks";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    MangaListView,
  },
  computed: {
    dummyBooks() {
      return dummyBooks;
    },
  },
});
</script>
