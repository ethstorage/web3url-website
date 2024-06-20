<template>
  <div class="video-container">
    <img
        v-if="!videoLoaded"
        src="@/assets/video-replace.png"
        alt="Video Placeholder"
        class="placeholder"
        fetchPriority="high"
        importance="high"
    />
    <video
        v-show="videoLoaded"
        @canplay="onVideoLoaded"
        loop
        autoplay
        muted
        playsinline
        class="video">
      <source src="@/assets/video.webm" type="video/webm"/>
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoLoaded: false,
    };
  },
  methods: {
    onVideoLoaded() {
      this.videoLoaded = true;
    }
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.placeholder {
  width: 100%;
  display: block;
}

.video {
  width: 100%;
  display: block;
}
</style>
