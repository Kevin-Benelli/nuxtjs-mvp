<template>
<div>
    <!-- In vue we have a tag called <router-link> </router-link>  with nuxt it's <nuxt-link></nuxt-link> -->
    <!-- new request to server does not have to be sent every time because routing -->
    <!-- <nuxt-link to ="/search">Look at search</nuxt-link> -->
    <!-- You can make a dynamic link this way: but it's not an SPA <a href = "/search"> search Posts </a> -->
    
<!--     
    <input type = "text" v-model="searchId">
    <button @click="onClickPost" class = 'btn btn-info'> Load Search Post</button> -->
    <nuxt-child />



</div>
</template>

<script>
export default {

    data(){
        return{
            searchId:''
        }
    },
    methods:{
        onClickPost(){
            this.$router.push('/search/' + this.searchId)
        }
    }
}
</script>

<style>

</style>
