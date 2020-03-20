<template>
<form>
    <label>
        Name
        <input v-model="activity.name" placeholder="">
    </label>
    <label>
        Location
        <select v-model="activity.location">
        <option v-for="item in this.$root.$data.locations" v-bind:key="item.name">
            {{item.name}}
        </option>
        </select>
    </label>
    <label>
        Image Link
        <input v-model="activity.img" placeholder="">
    </label>
    <label>
        Notes
        <input v-model="activity.notes" placeholder="">
    </label>
    <label>
        Type
        <select v-model="activity.type">
        <option v-for="item in this.$root.$data.activityTypes" v-bind:key="item">
            {{item}}
        </option>
        </select>
    </label>
    <label>
        Season
        <select v-model="activity.season">
        <option v-for="item in this.$root.$data.activitySeasons" v-bind:key="item">
            {{item}}
        </option>
        </select>
    </label>
    <label>
        Cost
        <input v-model="activity.cost" placeholder="">
    </label>
</form>
</template>

<script>
export default {
    name: "ActivityForm",
    props: {
        activity: Object
    }
}
</script>

<style scoped>
label, input, select {
    display: block;
}

label {
    margin-bottom: 20px;
}
</style>