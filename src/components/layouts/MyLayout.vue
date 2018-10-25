<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <view-toolbar></view-toolbar> -->
     <q-toolbar
        color="primary"
       
      >
        <q-btn
         v-if="mobileFriendly"
         flat
         color="primary"
         icon="close"
         @click="toggleDrawer"></q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
     <q-layout-drawer
      mini
      side="left"
      :mini-width="100"
      behavior="desktop"
      v-model="drawerVisibility">
      <div class="menu-wrapper bg-tertiary text-white">
        <q-list
          no-border
          class="q-pa-none">
          <q-item
            v-for="(link, index) in links"
            :key="index"
            class="q-pa-none">

            <q-btn
              class="item-menu"
              flat
              size= "lg"
              :icon="link.icon"
              :to="link.route">
              <span class="menu-label text-secondary">{{ link.name }}</span>
            </q-btn>

          </q-item>
        </q-list>
      </div>
    </q-layout-drawer>
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import viewToolbar from './toolbar.vue'
import appHeader from './header.vue'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      drawerVisibility:true,
      mobileFriendly:false,
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
    }
  },
  components:{appHeader,viewToolbar},
  methods: {
    toggleDrawer: function () {
    this.drawerVisibility = !this.drawerVisibility
  }
  }
}
</script>

<style>
</style>