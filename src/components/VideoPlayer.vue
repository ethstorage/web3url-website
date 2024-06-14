<template>
  <div class="video-container">
    <img
        v-if="!videoLoaded"
        :src="placeholderImage"
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
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    placeholderImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videoLoaded: false,
    };
  },
  methods: {
    onVideoLoaded() {
      this.videoLoaded = true;
    },
  },
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
