<template>
  <div>
    <BaseContainer>
      <template #mainContents>
        <v-app>
          <h1>コメント</h1>
          <CommentList :getMessage="messageArray" />

          <v-row>
            <v-col cols="8" md="4">
              <v-text-field
                v-model="addMessage"
                label="コメントを入力してください"
                outlined
                hide-details="false"
                required
              ></v-text-field>
            </v-col>
            <v-btn @click="addClick">送信</v-btn>
          </v-row>
        </v-app>
      </template>
    </BaseContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import CommentList from "../components/comment/CommentList.vue";
//import CommentInput from "../components/comment/CommentInput.vue";

export default Vue.extend({
  name: "Comment",
  components: {
    BaseContainer,
    CommentList,
  },
  data() {
    return {
      messageArray: [],
      addMessage: "",
    };
  },
  methods: {
    addClick: function () {
      this.messageArray.push(this.addMessage);
      this.addMessage = "";
    },
  },
});
</script>

<style scoped></style>
