<template>
    <div>
        <label>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            A set of criteria to evaluate current team effectiveness to identify
            team-building needs
        </label>
    </div>
</template>

<script>
export default {
    name: "Upload",
}
</script>

<style scoped>

</style>

