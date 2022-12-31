<template>
  <div class="game-list-container">
    <game-item></game-item>
  </div>
</template>
<script>
import GameItem from "./GameItem.vue";
export default {
  name: "GameListContainer",
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