<template>
  <div id="app">
    <div class="homeView">
      <h1>Adventure is out there!</h1>
      <h2>Where will you go next?</h2>
      <ul>
        <li v-for="item in locations" v-bind:key="item.name">
          <!--<img :src="item.img"/>-->
          <!-- <a :href="item.link">Info</a> -->
          <!-- <a :href="'location/'+item.name">Activities</a> -->
          <router-link :to="'location/' + item.name"><h3>{{item.name}}</h3></router-link>
          <p>Percent Complete: {{getPercent(item.name)}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {actRegion: this.$root.$data.regions[0]}
  },
  computed: {
    // locations: function() {
    //   return this.$root.$data.locations;
    // },
    locations() {
      let returnList = this.$root.$data.locations;
      if(this.actRegion !== "All") {
          returnList = returnList.filter(item => item.region === this.actRegion);        
      }
      return returnList
    } 
  },
  methods: {
    getPercent(countryName) {
      let allActivities = this.$root.$data.activities.filter(x => x.location == countryName);
      let l = allActivities.length;
      let l_filtered = allActivities.filter(x => x.completed).length;

      if(l === 0) {
        return "0%"
      }
 
      let percent = l_filtered / l;

      percent = Math.round(percent * 100) + "%";

      return percent
    },
    selectRegion(event) {
          this.actRegion = event.target.value;
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

a {
  text-decoration: none;
  color:darkgray;
}

a:hover {
  font-style: italic;
}

ul {
    list-style: none;
}

li {
    background: #fff;
    width: 500px;
    min-height: 30px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.delete {
    display: none;
    margin-left: auto;
}

li:hover .delete {
    display: block;
}

label {
    width: 400px;
}

.completed {
    text-decoration: line-through;
}

/* Form */

input[type=checkbox] {
    transform: scale(1.5);
    margin-right: 10px;
}

input[type=text] {
    font-size: 1em;
}

button {
    font-family: 'Arvo';
    font-size: 1em;
}

/* Controls */

.controls {
    margin-top: 20px;
}

img {
  width: 100px;
  height: auto;
}

</style>
