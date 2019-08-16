<!-- _id.vue signifies that this is not a static file this will have a dynamically passed value -->
<template>
<div>
    <h1> You've Searched for {{ $route.params.id}} </h1>
    <div>
    <h1>Results: </h1>
  <h1> REQUEST DATA RENDING FOR {{ $route.params.id}} HERE </h1>
</div>
 
    </div>
</template>

<script>
export default {
    validate(data){
         return data.params.id.toLowerCase() !== 'mens' || data.params.id.toLowerCase() !== 'womens' || data.params.id.toLowerCase() !== 'kids' || data.params.id.toLowerCase() !== 'active' ;
        // return /^\d+$/.test(data.params.id);
    }
}
</script>

<style scoped>

</style>
