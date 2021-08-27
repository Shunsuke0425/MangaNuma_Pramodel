<template>
  <div>
    <BaseContainer :point="userPoint" :pageIndex="2">
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
        <h2 class="text-center mt-16">現在: {{ userPoint }}P</h2>
      </template>
    </BaseContainer>
    <AddPointPopup ref="addPointPopup" />
    <CodeMissPopup ref="codeMissPopup" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import PointCard from "../components/buyPoint/PointCard.vue";
import AddPointPopup from "../components/common/AddPointPopup.vue";
import CodeMissPopup from "../components/buyPoint/CodeMissPopup.vue";

export default Vue.extend({
  name: "Home",
  components: {
    BaseContainer,
    AddPointPopup,
    PointCard,
    CodeMissPopup,
  },
  computed: {
    userPoint(): number {
      return this.$store.state.user.point;
    },
  },
  data() {
    return {
      addNumber: "",
    };
  },
  methods: {
    getPoint(): void {
      if (this.addNumber == "1111") {
        this.openAddPointDialog(200);
        this.$store.commit("addPoint", 200);
        this.addNumber = "";
      } else this.openCodeMissDialog();
    },
    openAddPointDialog(point: number): void {
      (
        this.$refs.addPointPopup as InstanceType<typeof AddPointPopup>
      ).openDialog(point);
    },
    openCodeMissDialog(): void {
      (
        this.$refs.codeMissPopup as InstanceType<typeof CodeMissPopup>
      ).openDialog();
    },
  },
});
</script>

<style scoped></style>
