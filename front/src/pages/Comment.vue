<template>
  <div>
    <BaseContainer :point="userPoint">
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
                label="コメント"
                outlined
                hide-details="false"
                required
              />
            </v-col>
            <v-btn @click="addComment">送信</v-btn>
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
  computed: {
    userPoint(): number {
      return this.$store.state.point;
    },
  },
  data() {
    return {
      messageArray: [] as string[],
      addMessage: "",
    };
  },
  methods: {
    addComment(): void {
      if (this.addMessage) {
        this.messageArray.push(this.addMessage);
        this.addMessage = "";
      }
    },
  },
});
</script>

<style scoped></style>
