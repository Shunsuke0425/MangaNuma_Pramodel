<template>
  <div>
    <BaseContainer :point="userPoint">
      <template #mainContents>
        <v-app>
          <h1>コメント</h1>
          <CommentList :getMessage="comments" />

          <v-footer
            class="d-flex justify-space-around"
            color="white"
            fixed
            height="200"
          >
            <v-col cols="9" md="1">
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
    <AddPointPopup ref="popup" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseContainer from "../components/common/BaseContainer.vue";
import CommentList from "../components/comment/CommentList.vue";
import AddPointPopup from "../components/common/AddPointPopup.vue";
import { dummyBooks } from "../dummyData/DummyBooks";

export default Vue.extend({
  name: "Comment",
  components: {
    BaseContainer,
    CommentList,
    AddPointPopup,
  },
  props: {
    id: {
      type: String,
      default: "0",
      required: false,
    },
  },
  computed: {
    userPoint(): number {
      return this.$store.state.user.point;
    },
    comments(): string[] {
      return this.$store.state.books[Number(this.id)].comments;
    },
  },
  data() {
    return {
      messageArray: dummyBooks[Number(this.id)].comments,
      addMessage: "",
    };
  },
  methods: {
    addComment(): void {
      if (this.addMessage) {
        this.openDialog(50);
        this.$store.commit("addComment", {
          id: this.id,
          comment: this.addMessage,
        });
        this.$store.commit("addPoint", 50);
        this.addMessage = "";
      }
    },
    openDialog(point: number): void {
      (this.$refs.popup as InstanceType<typeof AddPointPopup>).openDialog(
        point
      );
    },
  },
});
</script>

<style scoped></style>
