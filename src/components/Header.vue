<template>
    <div>
        <ul>
          <h3>data from showallLearningunits</h3>
            <li v-for="learningunit in learningunits" :key="learningunit.id" >
                {{ learningunit.title }}
                {{ learningunit.id }}
            </li>
        </ul>
        <div>
          <h3>data from learningunitById - {{ learningunit.id}}  </h3>
          <ul>
            <li> {{ learningunit.title }} </li>
            <li> {{ learningunit.url }}</li>
            <li> {{ learningunit.mc }}</li>
            <li> {{ learningunit.description }}</li>
            <li> {{ learningunit.createdAt }}</li>
            <li> {{ learningunit.updatedAt }}</li>
          </ul>
        </div> 
        <hr>
        <!-- <h2 v-if="$apollo.queries.learningunitById.loading">Loading...</h2> -->
        <h3> {{ learningunit.title }} </h3>
        <a v-bind:href = learningunit.url >
            <p class="link-1">
                The Open University - Team and Group Effectiveness
            </p>
        </a>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_LearningunitById } from "../queries"

export default {
  name: "header",
  created() {
    this.handleGetLearningunits();
  },
  computed: {
    ...mapGetters(["learningunits"]),
  },
  apollo: {
    learningunit: {
      //graphql query
      query: GET_LearningunitById,
      error(error) {
        this.error = JSON.stringify(error.message)
      }
    }
  },
  data() {
    return {
      learningunit: [], // learningunit of learningunitById
      error: null
    }
  },
  methods: {
    handleGetLearningunits() {
      // reach out to Vuex store, fire action that gets for learningunits
      this.$store.dispatch("showallLearningunits");
    }
  },
};
</script>

<style scoped>
    .link-1{
        margin-bottom: 30px;
    }
</style>

