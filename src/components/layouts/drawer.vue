<template>
  <q-layout-drawer 
  mini side="left" :mini-width="200" behavior="desktop"  :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
     v-model="leftDrawerOpen"
      >
      <br>
    <br><br>
    <drawer-content></drawer-content>
  </q-layout-drawer>
</template>
<script type="text/javascript">
import drawerContent from "./drawer-content.vue";
export default {
  components: { drawerContent },
  data() {
    return {
      drawerVisibility: true,
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  }
};
</script>
<style scoped>
</style>
