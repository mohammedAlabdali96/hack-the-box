<template>
  <div class="home container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  methods: {
  },
  mounted() {
  },
});
</script>

<style lang="scss">
.home {
  .nav-tabs {
    border-bottom: 3px solid #214b6b;
    .nav-link {
      margin-bottom: -3px;
      font-size: 18px;
      font-weight: 800;
      color: #336992;
    }
    .active {
      background-color: #214b6b !important;
      border: none !important;
      color: #fff !important;
    }
  }
}
</style>
