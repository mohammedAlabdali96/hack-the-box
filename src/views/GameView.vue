<template>
    <h1>this is game view</h1>
</template>
<script>
export default ({
  name: "GameView",
  data() {
    return {
    };
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
  mounted() {
    console.log(this.$route.params.id)
  },
});
</script>
