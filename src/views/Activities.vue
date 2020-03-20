<template>
<div class="homeView">
    <h2>Activities</h2>
    <div class="filters">
        <div>
            <label>Type of Activity: </label>
            <select @change="selectType($event)">
                <option v-for="item in this.$root.$data.activityTypes" v-bind:key="item">
                    {{item}}
                </option>
            </select>
        </div>
        <div>
            <label>Season: </label>
            <select @change="selectSeason($event)">
                <option v-for="item in this.$root.$data.activitySeasons" v-bind:key="item">
                    {{item}}
                </option>
            </select>
        </div>
        <div>
            <label>Completion Status: </label>
            <select @change="selectCompleted($event)">
                <option>All</option>
                <option>Not Completed</option>
                <option>Completed</option>
            </select>
        </div>
    </div>
    <h3>Don't see what you're looking for? 
        <router-link to="/new">Create a new bucket list adventure. </router-link></h3>
    <ActivitiesList :activities="activities" />
</div>
</template>

<script>
import ActivitiesList from "../components/ActivitiesList.vue"
export default {
  name: 'Activities',
  components: {
    ActivitiesList
  },
  data() {
      return {
          actSeason: this.$root.$data.activitySeasons[0],
          actType: this.$root.$data.activityTypes[0],
          completedStatus: "All"
      }
  },
  computed: {
    activities() {
      let returnList = this.$root.$data.activities;
      if(this.actType !== "All") {
          returnList = returnList.filter(item => item.type === this.actType);
      }
      if(this.actSeason !== "All") {
          returnList = returnList.filter(item => item.season === this.actSeason);        
      }
      if(this.completedStatus !== "All") {
          if(this.completedStatus === "Completed") {
            returnList = returnList.filter(item => item.completed);    
          }
          else {
            returnList = returnList.filter(item => !item.completed);    
          }
      }
      return returnList
    }
  },
  methods: {
      selectType(event) {
          this.actType = event.target.value;
      },
      selectSeason(event) {
          this.actSeason = event.target.value;
      },
      selectCompleted(event) {
          this.completedStatus = event.target.value;
      }
  }
}
</script>

<style scoped>
.homeView {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.filters {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
}

a {
  text-decoration: none;
  color:gray;
}

a:hover {
  font-style: italic;
}
</style>