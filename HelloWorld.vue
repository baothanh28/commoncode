<template>
  <div class="hello">
    <h1>{{ newProxy.msg }}</h1>
    <div>{{newProxy.newVal}}</div>
  <input type="text" v-model="newProxy.newVal">
  </div>
</template>

<script>

import {ref,toRef } from 'vue';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props){
    vue.set(props,'newVal',4);
    const newProxy= props.toRef()
    return {
     newProxy
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
