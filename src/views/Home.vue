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
import showallLearningunits from '@/modules/showallLearningunit'
import learningunitById from '@/modules/learningunitById'

export default {
  name: "app",
  store,
  components: {
    Header,
    Content,
    Upload
  },
  created() {
    this.$store.registerModule("showallLearningunits", showallLearningunits),
    this.$store.registerModule("learningunitById", learningunitById)
    this.handleGetLearningunits();
  },
  computed: {
    
  },
  methods: {
    handleGetLearningunits() {
      // reach out to Vuex store, fire *action* that gets for learningunits, learningunitById
      this.$store.dispatch("showallLearningunits");
      this.$store.dispatch("learningunit")
    }
  },
};
</script>
