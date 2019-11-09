<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home/> -->
    <!-- <app-user class=""></app-user>   -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button @click="selectedComponent = 'appQuote'">Quote</button>
          <button @click="selectedComponent = 'appAuthor'">Author</button>
          <button @click="selectedComponent = 'appNew'">New</button>
          <br>
          <p>{{ selectedComponent }}</p>
          <keep-alive>
            <component :is="selectedComponent">
              <p>Default Component</p>
            </component>
          </keep-alive>
          <!-- <app-quote quote="A Wonderful Quote!">
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p>A wonderfull quote</p>
          </app-quote> -->
          <!-- <app-quote></app-quote>
          <app-author></app-author>
          <app-new></app-new> -->

        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import User from './components/users/User.vue'
import Quote from './components/quote/Quote.vue'
import Author from './components/quote/Author.vue'
import New from './components/quote/New.vue'

export default {
  // name: 'app',
  data: function(){
    return {
      quoteTitle: "The Quote??",
      selectedComponent: 'appQuote'
    }
  },
  components: {
    // appUser: User
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  },  
}
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.component{
  border: 1px solid black;
  padding: 30px;
}
</style>
