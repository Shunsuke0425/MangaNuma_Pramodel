<template>
  <div class="full-page">
    <Title class="title-class" />
    <LoginIcon />
    <LoginForm :labelName="id" />
    <LoginForm :labelName="password" />
    <LoginButton @login="login" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Title from "../components/login/Title.vue";
import LoginIcon from "../components/login/LoginIcon.vue";
import LoginForm from "../components/login/LoginForm.vue";
import LoginButton from "../components/login/LoginButton.vue";

export default Vue.extend({
  name: "Login",
  components: {
    Title,
    LoginIcon,
    LoginForm,
    LoginButton,
  },
  data() {
    return {
      id: "ユーザーID",
      password: "パスワード",
    };
  },
  methods: {
    login(): void {
      this.$router.push({ name: "MangaList" });
      axios
        .get(
          "https://ojlzxio5j1.execute-api.ap-northeast-1.amazonaws.com/cors-test-watanabe"
        )
        .then(res => console.log(res));
    },
  },
});
</script>

<style scoped>
.full-page {
  background-color: #8c52ff;
  width: 100vw;
  height: 100vh;
}
.title-class {
  padding-top: 50px; /* marginだと上部が白くなってしまった */
}
</style>
