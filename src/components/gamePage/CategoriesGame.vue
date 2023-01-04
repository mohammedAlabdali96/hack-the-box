<template>
  <div class="">
    <h4 class="text-light">Is this game relevant to you?</h4>
    <div class="d-flex justify-content-center align-item-center flex-wrap">
      <b-badge
        v-for="category in categories"
        :key="category.id"
        class="primary mx-2 my-2"
        >{{ category.description }}</b-badge
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoriesGame",
  props: {
    categories: {
      type: Object,
      required: true,
    },
  },
};
</script>
