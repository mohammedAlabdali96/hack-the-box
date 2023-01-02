<template>
  <h1 class="text-light mt-5 mb-2 border-top border-bottom">{{name}}</h1>
</template>
<script>
export default {
  name: "GameName",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
