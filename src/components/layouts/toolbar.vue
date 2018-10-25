
<template>
    <q-toolbar class="toolbar" color="">
  <q-btn v-if="mobileFriendly"
         flat
         color="primary"
         :icon="drawerVisibility ? 'close' : 'menu'"
         @click="toggleDrawer"/>
 
</q-toolbar>
</template>

<script>
export default {
    data(){
        return{
            mobileFriendly:false,
            drawerVisibility:true
        }
    }
};
</script>

<style>
</style>
