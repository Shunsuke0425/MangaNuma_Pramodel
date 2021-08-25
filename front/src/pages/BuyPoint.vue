<template>
  <v-app>
    <BaseContainer>
      <template #mainContents>
        <h1>ポイント購入</h1>

        <PointCard />

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="addNumber"
            filled
            label="ナンバーを入力"
            clearable
          ></v-text-field>
        </v-col>

        <v-row justify="center">
          <v-btn elevation="2" @click="getPoint">確定</v-btn>
        </v-row>
        <h2 class="text-center mt-16">現在: {{ point }}P</h2>
      </template>
    </BaseContainer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import PointCard from "../components/buyPoint/PointCard.vue";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    PointCard,
  },
  data() {
    return {
      point: 100,
      addNumber: "",
    };
  },
  methods: {
    getPoint(): void {
      if (this.addNumber == "1111") {
        this.point += 200;
        this.addNumber = "";
      }
    },
  },
});
</script>

<style scoped></style>
