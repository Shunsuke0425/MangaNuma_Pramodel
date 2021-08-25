<template>
  <div>
    <BaseContainer>
      <template #mainContents>
        <v-app>
          <h1>コメント</h1>
          <CommentList :getMessage="messageArray" />

          <v-footer
            class="d-flex justify-space-around"
            color="white"
            fixed
            height="200"
          >
            <v-col cols="10" md="4">
              <v-text-field
                v-model="addMessage"
                label="コメントを入力してください"
                outlined
                hide-details="false"
                required
              ></v-text-field>
            </v-col>
            <v-btn @click="addClick">送信</v-btn>
          </v-footer>
        </v-app>
      </template>
    </BaseContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import CommentList from "../components/comment/CommentList.vue";

export default Vue.extend({
  name: "Comment",
  components: {
    BaseContainer,
    CommentList,
  },
  data() {
    return {
      messageArray: [] as string[],
      addMessage: "",
    };
  },
  methods: {
    addClick(): void {
      if (this.addMessage) {
        this.messageArray.push(this.addMessage);
        this.addMessage = "";
      }
    },
  },
});
</script>

<style scoped></style>
