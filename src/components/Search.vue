<template>
  <div>
    <input
      class="search-game-input py-2"
      v-model="text"
      @input="handleSearch"
      placeholder="Search game by name"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SearchInput",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(["searchText"]),
    handleSearch() {
      this.searchText(this.text);
    },
  },
};
</script>
<style lang="scss">
.search-game-input {
  width: 75%;
  overflow: visible;
  background: inherit;
  border: 2px solid #fff;
  color: #fff;
}
</style>