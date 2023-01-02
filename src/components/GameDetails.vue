<template>
  <div class="details-container pb-3">
    <div class="mb-3">
        <img class="img-fluid w-100" :src="game.header_image" />
    </div>
    <div class="mb-3">
    {{game.short_description}}
    </div>
    <div>
      <div class="d-flex justify-content-between mx-5 px-5 border-top border-bottom">
        <div class="font-weight-bold">DEVELOPER</div>
        <div class="text-info"><span class="mx-1" v-for="(dev, key) in game.developers" :key="key">{{dev}}</span></div>
      </div>
      <div class="d-flex justify-content-between mx-5 mt-3 px-5 border-top border-bottom">
        <div class="font-weight-bold">PUBLISHER</div>
        <div class="text-info"><span class="mx-1" v-for="(dev, key) in game.publishers" :key="key">{{dev}}</span></div>
      </div>
      <div class="d-flex justify-content-between mx-5 mt-3 px-5 border-top border-bottom">
        <div class="font-weight-bold">PRICE</div>
        <div class="text-info">{{game.price_overview.final_formatted}}</div>
      </div>
        <div class="d-flex justify-content-between mx-5 mt-3 px-5 border-top border-bottom">
        <div class="font-weight-bold">discount</div>
        <div class="text-info">{{game.price_overview?.discount_percent}}%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameDetails",
    props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.details-container {
  border: 1px solid #fff;
  background-color: rgba(202, 221, 211, 0.2);
  color: #fff;
  border-radius: 10px;
  img {
      border-radius: 10px;

  }
}
</style>
