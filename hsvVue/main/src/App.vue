<template>
  <head>
    <link rel="shortcut icon" type="image/x-icon" href="/resources/img/codingquokka.png">
    <title>한성대학교 온라인 투표 시스템</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://www.markuptag.com/bootstrap/5/css/bootstrap.min.css">
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>-->
<!--    <script type="text/javascript" src="/resources/js/rsa.js"></script>-->
<!--    <script type="text/javascript" src="/resources/js/jsbn.js"></script>-->
<!--    <script type="text/javascript" src="/resources/js/prng4.js"></script>-->
<!--    <script type="text/javascript" src="/resources/js/rng.js"></script>-->
<!--    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>-->
  </head>
  <header class="fixed-top">
    <img src="./resources/img/Logo.png" style="height: 100px;">
  </header>

  <main>
    <LoginComponent/>
  </main>
  <div class="fixed-bottom">
    <footer>
      <div>
        <p style="text-align:center; color: hsl(0, 0%, 34%); padding: 1rem;">@2022 Team Coding Quokka All Rights
          Reserved</p>
      </div>
    </footer>
  </div>
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import LoginComponent from './components/LoginComponent.vue';

@Options({
  components: {
    HelloWorld,
    LoginComponent
  },
})
export default class App extends Vue {}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
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
