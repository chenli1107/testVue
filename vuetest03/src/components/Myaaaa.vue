<template>
	<div id="Myaaaa-temp">
		<h1> hi welcome to </h1>
		<div>{{name}}</div>
		<button @click="change">update name</button>
		<Myuser></Myuser>
	</div>
</template>

<script>
  import Myuser from './Myuser'
  export default {
    data(){
      return {
        name: "jack"
      }
    },
    methods: {
      change(){
        this.name="tom";
      }
    },
    components:{
      Myuser
    }
  }
</script>

<style>
  #my-cmp0{
    background-color: #ccc;
  }
</style>