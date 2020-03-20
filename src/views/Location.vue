<template>
<div class="homeView">
    <h1>{{this.locationID}}</h1>
    <h2> Total Cost {{getCost()}} </h2>
    <ActivitiesList :activities="activities" />
</div>
</template>

<script>
import ActivitiesList from "../components/ActivitiesList.vue"
export default {
    name: "Location",
    components: {
        ActivitiesList
    },
    props: ["locationID"],
    computed: {
        activities() {
            let returnList = this.$root.$data.activities;
            returnList = returnList.filter(item => item.location == this.locationID);
            return returnList;
        },
    },
    methods: {
        getCost() {
            let allActivities = this.$root.$data.activities.filter(x => x.location == this.locationID);
            let totalCost = allActivities.reduce((a,b)=>a+b.cost, 0);
            return "$" + totalCost.toFixed(2);
        }
    }
}
</script>

<style scoped>

.homeView {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

</style>