<template>
  <div class="container">
      <Header />
      <Content />
      <Upload />
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from 'vuex'
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import Upload from "@/components/Upload.vue";
import { store } from "../store";

export default {
  name: "app",
  store,
  components: {
    Header,
    Content,
    Upload
  },
  computed: {
  
  }
};
</script>
