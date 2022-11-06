<template>
    <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 100px;
  background-color: white;

}

main {
  background-color: hsl(228, 26%, 96%);
  min-height: 800px;
}

div {
  display: block;
  margin: auto;
  position: relative;
}

footer {
  position: absolute;
  background-color: white;
  bottom: 0;
  width: 100%;
  height: 60px;

}
</style>
