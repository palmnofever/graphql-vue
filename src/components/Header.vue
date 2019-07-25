<template>
    <div>
      <div class="search-box">
        <ul>
          <h3>data from showallLearningunits</h3>
          <input type="text" v-model="search" placeholder="search blogs">
            <li v-for="learningunit in filterdLearningunit" :key="learningunit.id" >
                <strong> {{ learningunit.id }}  </strong> 
                {{ learningunit.title }} -
                {{ learningunit.mc }} - 
                {{ learningunit.description }} -
                {{ learningunit.createdAt }} -
                {{ learningunit.updatedAt }}
            </li>
        </ul>
      </div>

        <div>
          <h3>data from learningunitById - {{ learningunitById.id}}  </h3>
          <ul>
            <li> {{ learningunitById.title }} </li>
            <li> {{ learningunitById.url }}</li>
            <li> {{ learningunitById.mc }}</li>
            <li> {{ learningunitById.description }}</li>
            <li> {{ learningunitById.createdAt }}</li>
            <li> {{ learningunitById.updatedAt }}</li>
          </ul>
        </div> 
        <hr>
        <!-- <h2 v-if="$apollo.queries.learningunitById.loading">Loading...</h2> -->
        <h3> {{ learningunitById.title }} </h3>
        <a v-bind:href = learningunitById.url >
            <p class="link-1">
                The Open University - Team and Group Effectiveness
            </p>
        </a>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { GET_LearningunitById } from "../queries"

export default {
  name: "header",
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(["learningunits"]),
    ...mapGetters(["learningunitById"]),
    filterdLearningunit: function() {
      return this.learningunits.filter((learningunit) => {
        return learningunit.id.match(this.search);
      })
    }
  },
  // apollo: {
  //   learningunit: {
  //     //graphql query
  //     query: GET_LearningunitById,
  //     error(error) {
  //       this.error = JSON.stringify(error.message)
  //     }
  //   }
  // },
  // data() {
  //   return {
  //     learningunit: [], // learningunit of learningunitById
  //     error: null
  //   }
  // },
};
</script>

<style scoped>
    .link-1{
        margin-bottom: 30px;
    }
    .search-box {
      border: 1px solid black;
      margin: 15px;
    }
</style>

