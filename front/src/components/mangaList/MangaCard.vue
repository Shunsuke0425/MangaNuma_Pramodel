<template>
  <div>
    <v-card height="120px" width="80px" elevation="5">
      <v-img :src="book.src" height="120px" width="80px"> </v-img>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Book } from "../../types/Book";

export default Vue.extend({
  name: "Home",
  props: {
    book: {
      type: Object as PropType<Book>,
      default: (): Book => ({
        title: "ワンピース",
        src: "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
      }),
      required: false,
    },
  },
});
</script>
