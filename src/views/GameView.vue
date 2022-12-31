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
  mounted() {
    console.log(this.$route.params.id)
  },
});
</script>
