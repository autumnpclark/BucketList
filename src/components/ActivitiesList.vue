<template>
    <ul>
        <li v-for="item in activities" v-bind:key="item.name">
            <img :src="item.img"/>
            <label>{{item.name}}</label>
            <label>{{item.location}}</label>
            <p>{{item.notes}}</p>
            <label>Completed</label>
            <input type="checkbox" v-model="item.completed">
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
}
</style>