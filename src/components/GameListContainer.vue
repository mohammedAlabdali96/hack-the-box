<template>
  <div class="game-list-container">
    <game-item v-for="game in games" :key="game.id" :game="game"></game-item>
  </div>
</template>
<script>
import GameItem from "./GameItem.vue";
export default {
  name: "GameListContainer",
     props: {
      games: {
        type: Array,
        required: true
      }
    },
  components: {
    GameItem,
  },
};
</script>
<style lang="scss">
.game-list-container {
  margin-top: 16px;
}
</style>