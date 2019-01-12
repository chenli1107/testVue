<template>
	<div class="user">
		<h1> 用户列表 </h1>
		<ul>
		  <li v-for="u in users">{{u}}</li>
		</ul>
	</div>
</template>

<script>
  console.log(1111);
  export default {
    data(){
      return {
        users: ["tom", "jack", "mike"]
      }
    }
  }
</script>

<style>
  h1{
    color: red;
  }
</style>