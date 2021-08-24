<template>
  <BaseContainer>
    <template #mainContents>
      <hello-world />
    </template>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import BaseContainer from "../components/common/BaseContainer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
    BaseContainer,
  },
});
</script>
