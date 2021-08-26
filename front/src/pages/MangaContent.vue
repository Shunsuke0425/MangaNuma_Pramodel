<template>
  <BaseContainer :point="userPoint">
    <template #mainContents>
      <v-row justify="center" align-content="center" class="mt-12">
        <v-col>
          <v-card :height="imageHeight" elevation="0">
            <v-layout>
              <!--
              <v-img :src="book.page[currentReadPage ]" />
              -->
              <v-img
                src="https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png"
              />
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
            {{ currentReadPage + 1 }}/{{ lastPage }}
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
        @move-to-manga-content="moveToMangaContent"
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
import { dummyBooks } from "../dummyData/DummyBooks";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    NoPointPopup,
    NextStoryPopup,
  },
  computed: {
    dummyBooks() {
      return dummyBooks;
    },
    imageHeight(): number {
      return window.innerHeight - 250;
    },
    lastPage(): number {
      return 15;
      // return book.page.length
    },
    userPoint(): number {
      return this.$store.state.point;
    },
    isReadPage(): boolean {
      return this.lastReadPage > this.currentReadPage;
    },
  },
  data() {
    return {
      currentReadPage: 0,
      lastReadPage: 0,
    };
  },
  methods: {
    nextPage(): void {
      if (this.lastPage == this.currentReadPage + 1) this.openNextStoryDialog();
      else if (this.userPoint <= 0 && !this.isReadPage)
        this.openNoPointDialog();
      else {
        this.currentReadPage++;
        if (this.lastReadPage + 1 == this.currentReadPage) {
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
    moveToMangaContent(): void {
      this.currentReadPage = 0;
      this.lastReadPage = 0;
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
