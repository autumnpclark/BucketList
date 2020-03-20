<template>
  <div id="app">
    <div id="nav">
      <h1>Autumn's Bucket List</h1>
      <div id="nav-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/activities">Activities</router-link> |
        <router-link to="/new">Create New</router-link>
      </div>
    </div>
    <router-view/>
    <div id="footer">
      <a href="https://github.com/autumnpclark/BucketList">My Github Repo</a>
    </div>
  </div>
</template>

<style>
  @import "https://fonts.googleapis.com/css?family=Arvo";
</style>

<style>
#app {
  font-family: 'Arvo';
  font-size: 16px;
  background: #e8f4f8;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#nav {
  height: 50px;
  background-color: grey;
  padding: 15px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  color:#e8f4f8;
}

#nav-links {
  padding: 20px;
}

#nav a {
  color:#e8f4f8;
  text-decoration: none;
}

#nav a:hover {
  font-style: italic;
  color:#f3f3f3;
}

body {
  background: #f3f3f3;
  margin: 0px;
}

#footer {
  background-color: grey;
  width: 100%;
  height: 30px;
  display: flex;
  text-align: center;
}

#footer a {
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e8f4f8;
  text-decoration: none;
}

#footer a:hover {
  font-style: italic;
  color:#f3f3f3;
}
</style>
