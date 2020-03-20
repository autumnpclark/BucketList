<template>
    <ul>
        <li v-for="item in activities" v-bind:key="item.name">
            <img :src="item.img"/>
            <div class="content"> 
                <div class="topRow">               
                    <h3>{{item.name}}</h3>
                    <div class="complete">            
                        <label>Completed? </label>
                        <input type="checkbox" v-model="item.completed">
                    </div>
                </div>
                <div class="bottomRow">
                    <p>{{item.location}}</p>
                    <p>Notes: {{item.notes}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {

  name: 'ActivitiesList',
  props: {
    activities: Array
  }
}
</script>

<style>
img {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

ul {
    list-style: none;
}

li {
    background: #fff;
    width: 900px;
    min-height: 30px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.content {
    display:flex;
    flex-direction:column;
    flex:3;
}

.topRow, .bottomRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.complete {
    margin-left: 400px;
}
</style>