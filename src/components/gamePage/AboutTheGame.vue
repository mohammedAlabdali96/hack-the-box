<template>
  <div class="text-light mt-4 about-the-game" v-html="info" />
</template>
<script>
export default {
  name: "AboutTheGame",
  data() {
    return {};
  },
  props: {
    info: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.about-the-game {
  img {
    width: 100%;
    max-width: 600px;
  }
  li {
    list-style: none;
    border-bottom: 1px solid rgb(118, 115, 115);
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
