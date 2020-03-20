<template>
<div>
    <h1>Create New Element</h1>
    <!-- <label>Name</label><input v-model="newActivity.name"> -->
    <ActivityForm :activity="newActivity" />
    <button v-on:click="addAct()">Add Activity</button>
</div>
</template>

<script>
import ActivityForm from "../components/ActivityForm.vue"

export default {
    name: "NewActivity",
    components: {
        ActivityForm
    },
    data() {
        return {
            newActivity: {
                name: "",
                location: "",
                img: "",
                notes: "",
                type: "",
                season: "",
                cost: "0",
                completed: false
            }
        }
    },
    methods: {
        addAct() {
            this.newActivity.cost = parseFloat(this.newActivity.cost);
            this.$root.$data.activities.push(this.newActivity);
        }
    }
    
}
</script>