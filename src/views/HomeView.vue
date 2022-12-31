<template>
  <div class="home container d-flex justify-content-center">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab
          v-on:click="handleChangeTab(params.trending)"
          title="New and Trending"
          active
        >
          <Game-List-Container></Game-List-Container>
        </b-tab>
        <b-tab v-on:click="handleChangeTab(params.seller)" title="Top Sellers"
          ><p>Top Sellers</p></b-tab
        >
        <b-tab
          v-on:click="handleChangeTab(params.played)"
          title="What's Being Played"
          ><p>What's Being Played</p></b-tab
        >
        <b-tab v-on:click="handleChangeTab(params.upComing)" title="Upcoming"
          ><p>Upcoming</p></b-tab
        >
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiParams from "../constants/index";
import GameListContainer from "@/components/GameListContainer.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HomeView",
  components: {
    GameListContainer,
  },
  data() {
    return {
      params: ApiParams,
      tabName: "new_and_trending",
    };
  },
  computed: {
    ...mapGetters(["games", "loadingGames", "errorRequestGmaes"]),
  },
  methods: {
    ...mapActions(["getGames"]),
    handleChangeTab(tabName) {
      this.getGames(tabName);
    },
  },
  mounted() {
    this.getGames(this.tabName);
  },
});
</script>

<style lang="scss">
.home {
  .nav-tabs {
    border-bottom: 3px solid #214b6b;
    .nav-link {
      margin-bottom: -3px;
      font-size: 18px;
      font-weight: 800;
      color: #336992;
    }
    .active {
      background-color: #214b6b !important;
      border: none !important;
      color: #fff !important;
    }
  }
}
</style>
