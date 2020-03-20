<template>
<div>
    <h1>Create New Activity</h1>
    <!-- <label>Name</label><input v-model="newActivity.name"> -->
    <div class="form">
        <ActivityForm :activity="newActivity" />
        <button v-on:click="addAct()">Add Activity</button>
    </div>
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
            this.$root.$data.activities.unshift(this.newActivity);
            this.$router.push("/activities")
        }
    }
    
}
</script>

<style scoped>
.form {
    margin:50px;
    padding: 30px;
    background-color: #fff;
}

h1 {
    text-align: center;
}
</style>