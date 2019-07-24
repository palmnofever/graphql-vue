<template>
    <div class="content">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="2">
                    <div class="img-1">
                        <img src="../assets/learningunit.png" alt="urlVideo" class="img-1">
                    </div>
                </b-col>
                <b-col cols="10">
                    <p class="top"><strong>Develop Team Effectiveness</strong></p>
                    <p class="mid">
                        {{ learningunit.description }}
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { GET_LearningunitById } from "../queries"

export default {
    name: "Content",
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
}
</script>

<style scoped>
    .img-1 {
        object-fit: cover;
        width: 100%;
        max-height: 100%;
        padding: 0;
    }
    div.col-2 {
        padding-left: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
    div.col-8 {

    }
    .mid {
        padding-bottom: 0;
        margin-bottom: 0;
    }
    .content {
        margin-bottom: 30px;
    }
</style>
