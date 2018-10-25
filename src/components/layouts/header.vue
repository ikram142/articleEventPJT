
<template>
  <q-layout >
    <!--q-layout-header>
      <q-toolbar
        color="secondary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header-->

    <!-- <q-layout-header>
            <q-toolbar>
                <q-toolbar-title color="black">
                    <span id="content-header-title" class="vertical-bottom">{{routerTitle}}</span>
                </q-toolbar-title>
            </q-toolbar>
        </q-layout-header> -->
    <!-- <q-list no-border link inset-delimiter>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/home">
        <q-item-side icon="note" />
        <q-item-main label="Articles " />
      </q-item>
      <q-item to="/editArticle">
        <q-item-side icon="event_note" />
        <q-item-main label="Events Validation" />
      </q-item>

    </q-list> -->
    <!-- <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">

        <q-toolbar-title>
          {{routerTitle}}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header> -->
<q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          OppScience
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
  </q-layout>
</template>

<script>
export default {
  data(){
    return{
            leftDrawerOpen: this.$q.platform.is.desktop

    }
  },
  computed: {
    routerTitle() {
      return this.$route.meta.name;
    },
    links() {
      return this.$router.path;
    }
  }
};
</script>

<style>
</style>
