<template>
  <div class="game-list-container">
    <Search-input></Search-input>
    <game-item v-for="game in games" :key="game.id" :game="game"></game-item>
  </div>
</template>
<script>
import GameItem from "./GameItem.vue";
import SearchInput from './Search.vue'
export default {
  name: "GameListContainer",
  data() {
    return {
      searchText: "",
    };
  },
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSearch() {
      console.log(this.searchText);
    },
  },
  components: {
    GameItem,
    SearchInput
  },
};
</script>
<style lang="scss">
.game-list-container {
  margin-top: 16px;
   input {
    width: 75%;
    overflow: visible;
    background: inherit;
    border: 2px solid #fff;
    color: #fff;
   }
}
</style>