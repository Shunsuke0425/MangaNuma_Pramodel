<template>
  <BaseContainer>
    <template #mainContents>
      <v-row>
        <v-col>
          <v-card :height="imageHeight" elevation="0">
            <v-layout justify-center>
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
      <NoPointPopup ref="popup" />
    </template>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import NoPointPopup from "../components/mangaContent/NoPointPopup.vue";
import { dummyBooks } from "../dummyData/DummyBooks";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    NoPointPopup,
  },
  computed: {
    dummyBooks() {
      return dummyBooks;
    },
    imageHeight(): number {
      return window.innerHeight - 200;
    },
    lastPage(): number {
      return 15;
    },
  },
  data() {
    return {
      currentReadPage: 0,
      lastReadPage: 0,
      dialog: false,
    };
  },
  methods: {
    cardTap(): void {
      this.$router.push({ name: "MangaDetail" });
    },
    nextPage(): void {
      if (this.lastPage == this.currentReadPage + 1) console.log("end");
      else {
        this.currentReadPage++;
        if (this.lastReadPage == this.currentReadPage) {
          this.lastReadPage++;
        }
      }
    },
    prevPage(): void {
      this.openDialog();
      if (this.currentReadPage >= 1) this.currentReadPage--;
    },
    openDialog(): void {
      (this.$refs.popup as InstanceType<typeof NoPointPopup>).openDialog();
    },
    closeDialog(): void {
      (this.$refs.popup as InstanceType<typeof NoPointPopup>).closeDialog();
    },
  },
});
</script>

<style scoped>
.right {
  text-align: right;
}
</style>
