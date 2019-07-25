<template>
    <div>
        <label>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            A set of criteria to evaluate current team effectiveness to identify
            team-building needs
        </label>
        <hr>
        <h1> {{learningunitById.title}} </h1>
        <h3>data from showallLearningunits</h3>
            <li v-for="learningunit in learningunits" :key="learningunit.id" >
                {{ learningunit.title }}
                {{ learningunit.id }}
            </li>
    </div>
</template>

<script>
//vuex method 
import { mapGetters } from "vuex";

export default {
  name: "Upload",
  computed: {
    ...mapGetters(["learningunitById"]),
    ...mapGetters(["learningunits"]),
  },
}
</script>

<style scoped>

</style>

