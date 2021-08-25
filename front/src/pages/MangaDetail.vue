<template>
  <BaseContainer>
    <template #mainContents>
      <div class="mt-5">
        <MangaDetailTexts />
        <v-row justify="center">
          <v-btn
            color="deep-purple accent-4"
            width="250px"
            height="50px"
            class="mt-8 mb-4"
          >
            <v-icon color="white">mdi-chat</v-icon>
            <div style="color: white" class="pl-3">コメントを見る</div>
          </v-btn>
        </v-row>
        <v-row v-for="n in 6" :key="n" justify="center">
          <v-btn
            width="250px"
            height="60px"
            class="mt-3"
            @click="moveToMangaContent"
          >
            <v-img :src="dummyBooks[n].src" height="50px" width="50px" />
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
import { dummyBooks } from "../dummyData/DummyBooks";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    MangaDetailTexts,
  },
  computed: {
    dummyBooks() {
      return dummyBooks;
    },
  },
  methods: {
    moveToMangaContent(): void {
      this.$router.push({ name: "MangaContent" });
    },
  },
});
</script>
