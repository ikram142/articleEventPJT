<template>

  <div>
     

           
    <q-list  no-border
        link
        inset-delimiter>
      <q-item v-for="(link, index) in links" :key="index" class="q-pa-none">
        <q-item :to="link.route">

           <q-item-side :icon="link.icon" />
           <q-item-tile >{{link.name}} </q-item-tile>
          <!-- <span>{{ link.name}}</span> -->
        </q-item>
      </q-item>
    </q-list>
  </div>

</template>
<script type="text/javascript">
export default {
  data() {
    return {
      links: [
        {
          name: "Article List",
          icon: "event",
          route: "/home"
        },
        {
          name: "Events Validation",
          icon: "note",
          route: "/editArticle"
        }
      ]
    };
  },

  methods: {},
  components: {}
};
</script>
<style scoped>
</style>
