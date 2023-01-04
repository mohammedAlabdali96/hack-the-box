<template>
  <div>
    <video
      class="video-js"
      ref="videoPlayer"
    ></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
<style scoped>
.video-js {
  position: relative !important;
  height: 343px;
  padding-top: 0 !important;
  line-height: 0;
  width:100%;
}
.vjs-control-bar {
  line-height: 1;
}
</style>