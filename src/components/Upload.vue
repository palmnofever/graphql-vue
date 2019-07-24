<template>
    <div>
        <label>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            A set of criteria to evaluate current team effectiveness to identify
            team-building needs
        </label>
        <h1> {{learningunitById.title}} </h1>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Upload",
  created() {
    this.handleGetLearningunits();
  },
  computed: {
    ...mapGetters(["learningunitById"]),
  },
  methods: {
    handleGetLearningunits() {
      // reach out to Vuex store, fire action that gets for learningunits
      this.$store.dispatch("learningunit");
    }
  },
}
</script>

<style scoped>

</style>

