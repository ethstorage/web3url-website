<template>
  <div class="video-container">
    <link rel="preload" href="@/assets/video.webm" crossorign="crossorign" as="video" type="media" fetchPriority="high"
          importance="high"/>
    <img
        v-if="!videoLoaded"
        src="@/assets/video-replace.png"
        alt="Video Placeholder"
        class="placeholder"
    />
    <video
        v-show="videoLoaded"
        @canplay="onVideoLoaded"
        loop
        autoplay
        muted
        playsinline
        class="video">
      <source :src="videoSrc" type="video/webm" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoLoaded: false,
      videoSrc: require('@/assets/video.webm')
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
