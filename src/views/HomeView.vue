<template>
  <div class="home mt-4 container d-flex justify-content-center">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab
          v-on:click="onChangeTab(params.trending)"
          title="New and Trending"
          :active="tabName === params.trending"
        >
          <template v-if="loadingGames && errorRequestGmaes.length === 0">
            <Loading-wrapper></Loading-wrapper>
          </template>
          <template v-else-if="errorRequestGmaes.length !== 0">
            <Error-wrapper :error="errorRequestGmaes"></Error-wrapper>
          </template>
          <template v-else>
            <Game-List-Container
              v-if="searchResult.length > 0"
              :games="searchResult"
            ></Game-List-Container>

            <Game-List-Container v-else :games="games"></Game-List-Container>
          </template>
        </b-tab>
        <b-tab
          :active="tabName === params.seller"
          v-on:click="onChangeTab(params.seller)"
          title="Top Sellers"
        >
          <template v-if="loadingGames && errorRequestGmaes.length === 0">
            <Loading-wrapper></Loading-wrapper>
          </template>
          <template v-else-if="errorRequestGmaes.length !== 0">
            <Error-wrapper :error="errorRequestGmaes"></Error-wrapper>
          </template>
          <template v-else>
            <Game-List-Container
              v-if="searchResult.length > 0"
              :games="searchResult"
            ></Game-List-Container>

            <Game-List-Container v-else :games="games"></Game-List-Container>
          </template>
        </b-tab>
        <b-tab
          v-on:click="onChangeTab(params.played)"
          title="What's Being Played"
          :active="tabName === params.played"
        >
          <template v-if="loadingGames && errorRequestGmaes.length === 0">
            <Loading-wrapper></Loading-wrapper>
          </template>
          <template v-else-if="errorRequestGmaes.length !== 0">
            <Error-wrapper :error="errorRequestGmaes"></Error-wrapper>
          </template>
          <template v-else>
            <Game-List-Container
              v-if="searchResult.length > 0"
              :games="searchResult"
            ></Game-List-Container>

            <Game-List-Container v-else :games="games"></Game-List-Container>
          </template>
        </b-tab>
        <b-tab
          v-on:click="onChangeTab(params.upComing)"
          :active="tabName === params.upComing"
          title="Upcoming"
        >
          <template v-if="loadingGames && errorRequestGmaes.length === 0">
            <Loading-wrapper></Loading-wrapper>
          </template>
          <template v-else-if="errorRequestGmaes.length !== 0">
            <Error-wrapper :error="errorRequestGmaes"></Error-wrapper>
          </template>
          <template v-else>
            <Game-List-Container :games="games"></Game-List-Container>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import ApiParams from "../constants/index";
import GameListContainer from "@/components/homePage/GameListContainer.vue";
import LoadingWrapper from "@/components/LoadingWrapper.vue";
import ErrorWrapper from "@/components/ErrorWrapper.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    GameListContainer,
    LoadingWrapper,
    ErrorWrapper,
  },
  data() {
    return {
      params: ApiParams,
      tabName: "new_and_trending",
    };
  },
  computed: {
    ...mapGetters([
      "games",
      "loadingGames",
      "errorRequestGmaes",
      "searcGameResult",
      "tab",
      "searchResult",
    ]),
  },
  methods: {
    ...mapActions(["getGames", "handleChangeTab"]),

    onChangeTab(tabName) {
      this.$router.push({
        path: "apps",
        query: { tab: tabName },
      });

      this.handleChangeTab(tabName);
      this.getGames(this.tab);
    },
  },
  mounted() {
    this.$router
      .push({
        path: "apps",
        query: { tab: this.$store.getters.tab },
      })
      .catch(() => {});

    this.tabName = this.tab;
    this.getGames(this.$route.query.tab);
  },
};
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
