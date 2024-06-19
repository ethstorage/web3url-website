<template>
  <div class="rectangleParent">
    <div class="frameChild" :style="{ height: shadowHeight + 'px', backgroundColor: this.shadowColor}">
      <img class="frameItem" alt="" src="@/assets/shadow.png"/>
    </div>
    <div ref="sourceDiv" class="frameInner" :style="{ backgroundColor: this.bgColor}">
      <slot></slot>
    </div>
    <div v-if="this.showTitle" ref="centerDiv" class="rectangleGroup">
      <div class="rectangleDiv">
        <div class="web3AccessibleMainnetRes">
          {{ this.title }}
          <slot name="title"></slot>
        </div>
      </div>
      <div ref="centerTitle" class="web3AccessibleMainnetResWrapper" :style="{ backgroundColor: this.titleBgColor}">
        <div class="web3AccessibleMainnetRes">
          {{ this.title }}
          <slot name="title"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shadowHeight: 0,
      resizeObserver: null,
    };
  },
  props: {
    bgColor: {
      type: String,
      default: 'lightcoral'
    },
    shadowColor: {
      type: String,
      default: 'lightcoral'
    },
    titleBgColor: {
      type: String,
      default: 'lightcoral'
    },
    title: {
      type: String,
      default: ''
    },
    showTitle: {
      type: Boolean,
      default: true,
    }
  },
  mounted() {
    this.updateTargetSize();
    window.addEventListener('resize', this.updateTargetSize);

    this.resizeObserver = new ResizeObserver(this.updateTargetSize);
    if (this.$refs.centerTitle) {
      this.resizeObserver.observe(this.$refs.centerTitle);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateTargetSize);
    if (this.resizeObserver && this.$refs.centerTitle) {
      this.resizeObserver.unobserve(this.$refs.centerTitle);
    }
  },
  methods: {
    updateTargetSize() {
      this.$nextTick(() => {
        if (this.$refs.sourceDiv) {
          this.shadowHeight = this.$refs.sourceDiv.offsetHeight;
        }

        if (this.$refs.centerTitle) {
          const containerWidth = this.$el.offsetWidth;
          const viewWidth = this.$refs.centerTitle.offsetWidth;
          const leftPosition = (containerWidth - viewWidth) / 2;
          this.$refs.centerDiv.style.left = `${leftPosition}px`;
        }
      });
    },
  },
};
</script>

<style>
.rectangleParent {
  position: relative;
  width: 100%;
}

.frameChild {
  position: absolute;
  top: 75px;
  left: 28px;
  border-radius: 20px;
  border: 2px solid #000;
  box-sizing: border-box;
  width: 98%;
}

.frameItem {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.frameInner {
  position: absolute;
  top: 42px;
  left: 0;
  border-radius: 20px;
  border: 2px solid #000;
  box-sizing: border-box;
  width: 97.5%;
  padding: 80px 50px 35px;
}

.rectangleGroup {
  position: absolute;
  left: 0;
  height: 77px;
}
.rectangleDiv {
  position: absolute;
  top: 12px;
  left: 13px;
  border-radius: 20px;
  background-color: #000;
  height: 65px;
  box-sizing: border-box;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.web3AccessibleMainnetResWrapper {
  position: absolute;
  border-radius: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
  height: 65px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
.web3AccessibleMainnetRes {
  min-width: 423px;
  margin: auto 25px;
  color: #000;
  font-size: 1.625rem;
  font-weight: 500;
  line-height: normal;
  font-style: normal;
  font-family: Inter;
}

@media screen and (max-width: 500px) {
  .frameChild {
    top: 28px;
    left: 6px;
    border-radius: 12px;
    border: 1px solid #000;
  }

  .frameInner {
    top: 18px;
    border-radius: 12px;
    border: 1px solid #000;
    padding: 32px 8px 24px;
  }

  .rectangleGroup {
    height: 36px;
  }
  .rectangleDiv {
    top: 4px;
    left: 4px;
    height: 28px;
    border-radius: 12px;
  }
  .web3AccessibleMainnetResWrapper {
    height: 28px;
    border-radius: 12px;
  }
  .web3AccessibleMainnetRes {
    min-width: auto;
    font-size: 10px;
  }

}
</style>
