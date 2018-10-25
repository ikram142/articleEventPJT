<template>
  <q-page>
    <view-toolbar></view-toolbar>
    <div class="layout-padding ">

      <div class="row">

        <div class="col-sm-3" style="width: 200px;">
          <q-field label="Entity name" :count="10">
            <q-input v-model="text" placeholder="Entity name" color="secondary" />
          </q-field>
        </div>
        <div class="col-sm-3">
          <q-select multiple filter placeholder="Entity Type" color="secondary" v-model="multipleSelect" :options="options" />
        </div>

        <div class="col-sm-3">
          <q-select placeholder="Language" color="secondary" v-model="multipleSelect" :options="selectedLg" />
        </div>
        <div class="col-sm-3 " style="    margin-left: 50px;">
          <q-btn color="primary" to="/newArticle" label="Create Article" />
        </div>
      </div>
      <br><br><br>

      <q-card v-for="article in articles" :key="article" inline class="q-ma-sm" style="width: 1000px;">
        <q-card-title>
          {{article.title}}
          <span slot="subtitle">{{article.date}}</span>
          <q-icon slot="right" name="alarm" />
        </q-card-title>
        <q-card-main>
          {{article.content.slice(0,250)+'....'}}
        </q-card-main>
        <q-card-separator style="bg-color: black" />
        <q-card-actions>
          <q-btn flat>show more</q-btn>
          <q-btn  flat>Add Event</q-btn>

        </q-card-actions>
      </q-card>
      <div>
        <q-list highlight inset-separator>

          <q-item v-for="article in articles" :key="article" multiline>
            <q-item-side />
            <q-item-main :label="article.title" label-lines="2" :sublabel="article.content.slice(0,200)+'...'">
              <router-link link to="/detailArticle">read more</router-link>
              <span class="add-event">
                <router-link to="/newEvent" right>Add event</router-link>
              </span>
            </q-item-main>
            <q-item-side right :stamp="article.date" />

          </q-item>

        </q-list>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import viewToolbar from '../layouts/toolbar.vue'
export default {
  name: "PageIndex",
  components:{viewToolbar},
  data() {
    return {
      lang: "",
      text: "",
      multipleSelect: [""],
      selectedLg: [
        { label: "Français", value: "Français" },
        { label: "English", value: "English" }
      ],
      options: [
        {
          label: "personne_role",
          value: "goog"
        },
        {
          label: "Company_acquisition",
          value: "fb"
        }
      ],
      articles: [
        {
          title: "Titre A",
          entity_name: "Company_acquisition",
          date: "12 sep 2019",
          content:
            "Blocktrade Token (CURRENCY:BTT) traded up 4.6% against the US dollar during the 24 hour period ending at 9:00 AM Eastern on October 24th. Blocktrade Token has a market cap of $3.88 million and approximately $1,053.00 worth of Blocktrade Token was traded on exchanges in the last 24 hours. One Blocktrade Token token can currently be purchased for about $0.0717 or 0.00001107 BTC on exchanges including IDEX and LATOKEN. Over the last seven days, Blocktrade Token has traded 0.1% higher against the US dollar."
        },
        {
          title: "Titre A",
          entity_name: "Company_acquisition",
          date: "12 sep 2019",
          content:
            "content content content contentcontent content content contentcontent content content contentcontent content content content"
        },
        {
          title: "Titre B",
          entity_name: "Company_acquisition",
          date: "12 sep 2019",
          content:
            "content content content contentcontent content content contentcontent content content contentcontent content content content"
        },
        {
          title: "Titre C",
          entity_name: "Company_acquisition",
          date: "12 sep 2019",
          content:
            "content content content contentcontent content content contentcontent content content contentcontent content content content"
        },
        {
          title: "Titre D",
          entity_name: "Company_acquisition",
          date: "12 sep 2019",
          content:
            "content content content contentcontent content content contentcontent content content contentcontent content content content"
        }
      ]
    };
  }
};
</script>
<style scoped>
.col-sm-3 {
  padding-right: 25px;
}
.add-event {
  padding-left: 700px;
}
</style>
