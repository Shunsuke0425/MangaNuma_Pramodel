<template>
  <BaseContainer :point="userPoint">
    <template #mainContents>
      <v-row>
        <v-col>
          <h2 style="text-align: center">{{ storyId + 1 }}話</h2>
          <v-card :height="imageHeight" elevation="0">
            <v-layout justify-center>
              <v-img :src="books[id].pages[currentReadPage]" />
            </v-layout>
          </v-card>
        </v-col>
        <v-row class="mr-5 ml-5">
          <v-col>
            <v-btn @click="nextPage">
              <v-icon>mdi-menu-left</v-icon>
            </v-btn>
          </v-col>
          <v-col style="text-align: center">
            <h3>{{ currentReadPage + 1 }}/{{ lastPage }}</h3>
          </v-col>
          <v-col style="text-align: right">
            <v-btn @click="prevPage">
              <v-icon>mdi-menu-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
      <NoPointPopup
        ref="noPointPopup"
        @move-to-point="moveToPoint"
        @move-to-comment="moveToComment"
      />
      <NextStoryPopup
        ref="nextStoryPopup"
        :storyId="storyId"
        @move-to-manga-content="moveToNextMangaContent"
        @move-to-comment="moveToComment"
      />
    </template>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import NoPointPopup from "../components/mangaContent/NoPointPopup.vue";
import NextStoryPopup from "../components/mangaContent/NextStoryPopup.vue";
import { Book } from "../types/Book";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    NoPointPopup,
    NextStoryPopup,
  },
  computed: {
    books(): Book[] {
      return this.$store.state.books;
    },
    imageHeight(): number {
      return window.innerHeight - 236;
    },
    lastPage(): number {
      // 本当は前の画面で選択した漫画のID
      return this.books[Number(this.id)].pages.length;
    },
    userPoint(): number {
      return this.$store.state.user.point;
    },
    isReadPage(): boolean {
      return this.lastReadPage > this.currentReadPage;
    },
  },
  props: {
    id: {
      type: String,
      default: "0",
      required: false,
    },
    selectedStoryId: {
      type: String,
      default: "0",
      required: false,
    },
  },
  data() {
    return {
      currentReadPage: 0,
      lastReadPage: 0,
      storyId: Number(this.selectedStoryId),
    };
  },
  methods: {
    nextPage(): void {
      if (this.lastPage == this.currentReadPage + 1) this.openNextStoryDialog();
      else if (this.userPoint <= 0 && !this.isReadPage)
        this.openNoPointDialog();
      else {
        this.currentReadPage++;
        if (
          this.lastReadPage + 1 == this.currentReadPage &&
          this.storyId >= this.books[Number(this.id)].freePage
        ) {
          this.lastReadPage++;
          this.$store.commit("deletePoint", 1);
        }
      }
    },
    prevPage(): void {
      if (this.currentReadPage >= 1) this.currentReadPage--;
    },
    openNextStoryDialog(): void {
      (
        this.$refs.nextStoryPopup as InstanceType<typeof NextStoryPopup>
      ).openDialog();
    },
    closeNextStoryDialog(): void {
      (
        this.$refs.nextStoryPopup as InstanceType<typeof NextStoryPopup>
      ).closeDialog();
    },
    openNoPointDialog(): void {
      (
        this.$refs.noPointPopup as InstanceType<typeof NoPointPopup>
      ).openDialog();
    },
    moveToPoint(): void {
      this.$router.push({ name: "BuyPoint" });
    },
    moveToComment(): void {
      this.$router.push({ name: "Comment" });
    },
    moveToNextMangaContent(): void {
      this.currentReadPage = 0;
      this.lastReadPage = 0;
      this.storyId++;
      this.closeNextStoryDialog();
    },
  },
});
</script>

<style scoped>
.right {
  text-align: right;
}
</style>
