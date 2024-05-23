<template>
  <div class="home">
    <div class="use">
      <p class="use-title">Use web3://</p>

      <p class="use-schema-title">URL Schema</p>
      <div class="use-context use-context-web3">
        <div class="use-label">Web3 URL (defined by <a href="https://eips.ethereum.org/EIPS/eip-4804" target="_blank">ERC4804</a>)</div>
        <img class="use-image1" src="@/assets/use1.png"/>
        <img class="use-image1" src="@/assets/use1-1.png"/>
        <div class="use1-text">
          <a class="use1-text-a" href="https://docs.web3url.io/web3-url-structure/resolve-mode" target="_blank">
            More About Resolve Mode
          </a>
        </div>
      </div>
      <div class="use-context use-context-http">
        <div class="use-label">HTTP URL</div>
        <img class="use-image2" src="@/assets/use2.png"/>
      </div>

      <p class="use-schema-title">Firefox Extension</p>
      <div class="use-firefox">
        <div class="use-firefox-icon">
          <img class="use-icon-img" src="@/assets/use-firfox.png" />
          <div class="use-icon-text">
            <div class="use-icon-title">Download</div>
            <div class="use-icon-message">https://addons.mozilla.org/en-US/firefox/addon/web3url/</div>
          </div>
        </div>
        <div class="use-firefox-button" @click="goFirefox">
          <img style="width: 19px; margin-right: 10px" src="@/assets/use-down.png"/>
          <p class="use-button-text">Try web3:// Now</p>
        </div>
      </div>
      <div class="use-firefox-button-phone" @click="goFirefox">
        <img style="width: 19px; margin-right: 10px" src="@/assets/use-down.png"/>
        <p class="use-button-text">Try web3:// Now</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsePage",
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
    },
    goFirefox(){
      this.openUrl("https://addons.mozilla.org/en-US/firefox/addon/web3url/");
    },
  },
};
</script>

<style scoped>
img {
  image-rendering:-moz-crisp-edges;
  image-rendering:-o-crisp-edges;
  image-rendering:-webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  -webkit-font-smooting:  antialiased;
}

.home {
  background: #FFFFFF;
}

.use {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.use-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}

.use-schema-title {
  margin-top: 80px;
  margin-bottom: 10px;
  font-size: 24px;
  color: #000000;
  line-height: 24px;
  font-family: AlibabaPuHuiTiM;
}

.use-context {
  width: 100%;
  margin-top: 20px;
  box-shadow: 6px 6px 0 0 #EDEDED;
  border: 1px solid #000000;
}
.use-context-web3 {
  background: #FCE6D3;
}
.use-context-http {
  background: #E5EDFF;
}

.use-label {
  width: 300px;
  height: 40px;
  background: #FFFFFF;
  border-style: none solid solid;
  border-color: #000000;
  border-width: 1px;
  font-size: 16px;
  color: #000000;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  font-family: AlibabaPuHuiTiM;
}

.use-image1 {
  width: 1020px;
  margin-top: 35px;
  margin-left: -18px;
}
.use1-text {
  font-size: 16px;
  color: #1174FF;
  line-height: 22px;
  margin: 35px 0;
  font-family: AlibabaPuHuiTiM;
}
.use1-text-a{
  text-decoration:underline;
}
.use1-text-a:hover{
  background: transparent;
}
.use-image2 {
  width: 935px;
  margin-top: 35px;
  margin-bottom: 70px;
  margin-left: -100px;
}

.use-firefox {
  margin-top: 30px;
  margin-bottom: 120px;
  height: 100px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 6px 6px 0px 0px #EDEDED;
  border: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.use-firefox-icon {
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.use-icon-img {
  width: 64px;
}
.use-icon-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
}
.use-icon-title {
  font-size: 18px;
  color: #000000;
  line-height: 18px;
  font-family: AlibabaPuHuiTiB;
}
.use-icon-message {
  margin-top: 10px;
  font-size: 16px;
  color: #000000;
  line-height: 16px;
  font-family: AlibabaPuHuiTiR;
}

.use-firefox-button {
  width: 220px;
  height: 50px;
  margin-right: 40px;
  background: #1174FF;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.use-button-text {
  font-size: 16px;
  color: #FFFFFF;
  font-family: AlibabaPuHuiTiB;
}
.use-firefox-button-phone {
  display: none;
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .use {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .use-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .use-schema-title {
    margin-top: 25px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 14px;
  }

  .use-context {
    width: 95%;
    margin-top: 12px;
  }

  .use-label {
    width: 210px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
  }

  .use-image1 {
    width: 95%;
    margin-top: 25px;
    margin-left: 0;
  }
  .use1-text {
    font-size: 14px;
    line-height: 20px;
    margin: 20px 0;
  }
  .use-image2 {
    width: 95%;
    margin-top: 25px;
    margin-bottom: 20px;
    margin-left: 0;
  }

  .use-firefox {
    margin-top: 15px;
    margin-bottom: 17px;
    height: 58px;
    width: 95%;
  }

  .use-firefox-icon {
    margin-left: 8px;
  }
  .use-icon-img {
    width: 30px;
  }
  .use-icon-text {
    margin-left: 8px;
  }
  .use-icon-title {
    font-size: 12px;
    line-height: 12px;
  }
  .use-icon-message {
    font-size: 9px;
    line-height: 10px;
    text-align: left;
    -webkit-text-size-adjust: none;
  }

  .use-firefox-button {
    display: none;
  }
  .use-firefox-button-phone {
    width: 210px;
    height: 40px;
    margin: 0 auto 35px;
    background: #1174FF;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
