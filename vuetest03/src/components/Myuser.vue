<template>
	<div class="user">
		<h1> 用户列表 </h1>
		<ul>
		  <li v-for="u in users">{{u}}</li>
		</ul>
		<p>1111111111111111111</p>
		<p> {{ obj01.aa }}---{{ obj01.bb }}</p>
		<button @click="ccc333($event)">click api</button>
	</div>
</template>

<script>
import * as apiList from '@/api/api_testrequest'
  console.log(1111);
  export default {
    data(){
      return {
     	  obj01: {'aa': 'aaxxxxxxxxx', 'bb': 21111},
        users: ["tom", "jack", "mike"]
      }
    },
    methods: {
      ccc333: function(){ 
        console.log("aaa"+apiList);
        apiList.cfg().then(response => {
          this.obj01 = response
        }).catch(error => {

        })
      }
    }
    
  }
</script>

<style>
  h1{
    color: red;
  }
</style>