<template>
  <BaseContainer :point="userPoint">
    <template #mainContents>
      <div class="mt-5">
        <MangaDetailTexts :book="books[id]" />
        <v-row justify="center">
          <v-btn
            color="deep-purple accent-4"
            width="250px"
            height="50px"
            class="mt-8 mb-4"
            @click="moveToComment"
          >
            <v-icon color="white">mdi-chat</v-icon>
            <div style="color: white" class="pl-3">コメントを見る</div>
          </v-btn>
        </v-row>
        <v-row v-for="n in books[id].pages.length" :key="n" justify="center">
          <v-btn
            width="250px"
            height="60px"
            class="mt-3"
            @click="moveToMangaContent"
          >
            <v-img :src="books[id].pages[n - 1]" height="50px" width="50px" />
            {{ n }}話
          </v-btn>
        </v-row>
      </div>
    </template>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import MangaDetailTexts from "../components/mangaDetail/MangaDetailTexts.vue";
import { Book } from "../types/Book";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    MangaDetailTexts,
  },
  computed: {
    books(): Book[] {
      return this.$store.state.books;
    },
    userPoint(): number {
      return this.$store.state.user.point;
    },
  },
  props: {
    id: {
      type: String,
      default: "0",
      required: false,
    },
  },
  methods: {
    moveToMangaContent(): void {
      this.$router.push({ name: "MangaContent" });
    },
    moveToComment(): void {
      this.$router.push({ name: "Comment" });
    },
  },
});
</script>
