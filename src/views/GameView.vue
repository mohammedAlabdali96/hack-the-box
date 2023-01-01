<template>
  <b-container fluid>
    <b-row v-if="isloaded && !loadingGames">
      <b-col sm="12" md="6">
        <App-Carousel
          :starting-image="0"
          :images="getCarouselItems"
        ></App-Carousel>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col class="d-flex align-item-center justify-content-center" sm="12">
        <h1 class="text-light">loading ...</h1>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AppCarousel from "@/components/AppCarousel.vue";

export default {
  name: "GameView",
  data() {
    return {};
  },
  components: {
    AppCarousel,
  },
  computed: {
    ...mapGetters([
      "game",
      "loadingGames",
      "errorRequestGmaes",
      "searcGameResult",
    ]),

    isloaded() {
      return Object.keys(this.game).length !== 0;
    },

    getCarouselItems() {
      if (Object.keys(this.game).length !== 0) {
        const items = this.game.screenshots.slice();
        items.unshift({
          id: this.game.movies.id,
          path_thumbnail: this.game.movies[0].thumbnail,
          path_full: this.game.movies[0].mp4["480"],
        });
        items.map((x, index) =>
          index === 0 ? (x["isVideo"] = true) : (x["isVideo"] = false)
        );
        return items;
      } else return {};
    },
  },

  methods: {
    ...mapActions(["getGame", "handleChangeTab"]),
  },

  mounted() {
    this.getGame(this.$route.params.id);
  },
};
</script>
