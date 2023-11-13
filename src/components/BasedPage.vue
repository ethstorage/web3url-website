<template>
  <div class="home">
    <div class="based">
      <p class="based-title">dApps and NFTs Accessible by web3://</p>
      <div class="based-li based-l1">
        <div class="based-image based-img1" @click.stop="goCyberbrokers">
          <div class="eth-icon" @click.stop="goCyberbrokersEth" />
          <span class="based-text">web3://cyberbrokers-meta.eth/renderBroker/5</span>
        </div>
        <div class="based-image based-img2" @click.stop="goEns">
          <div class="eth-icon" @click.stop="goEnsEth"/>
          <span class="based-text">web3://app-ens-domain.eth/</span>
        </div>
      </div>
      <div class="based-li based-l2 based-pc">
        <div class="based-image based-img3" @click.stop="goUni">
          <div class="eth-icon" @click.stop="goUniEth" />
          <span class="based-text">web3://app-uniswap-org.eth/</span>
        </div>
        <div class="based-image based-img4" @click.stop="goMoonBird">
          <div class="eth-icon" @click.stop="goMoonBirdEth"/>
          <span class="based-text">web3://moon-birds-xyz.eth/render/9880</span>
        </div>
        <div class="based-image based-img5" @click.stop="goVitalik">
          <div class="eth-icon" @click.stop="goVitalikEth"/>
          <span class="based-text">web3://vitalikblog.eth/</span>
        </div>
      </div>
      <div class="based-li based-l3 based-pc">
        <div class="based-image based-img6" @click.stop="goNous">
          <div class="eth-icon" @click.stop="goNousEth"/>
          <span class="based-text">web3://nouns-wtf.eth/render/505</span>
        </div>
        <div class="based-image based-img7" @click.stop="goArtBlock">
          <div class="eth-icon" @click.stop="goArtBlockEth"/>
          <span class="based-text">web3://art-blocks-io.eth/render/78/0</span>
        </div>
      </div>

      <!--   mobile ui   -->
      <div class="based-li based-l2 based-phone">
        <div class="based-image based-img3" @click.stop="goUni">
          <div class="eth-icon" @click.stop="goUniEth" />
          <span class="based-text">web3://app-uniswap-org.eth/</span>
        </div>
        <div class="based-image based-img4" @click.stop="goNous">
          <div class="eth-icon" @click.stop="goNousEth" />
          <span class="based-text">web3://nouns-wtf.eth/render/505</span>
        </div>
      </div>
      <div class="based-li based-l2 based-phone">
        <div class="based-image based-img5" @click.stop="goMoonBird">
          <div class="eth-icon" @click.stop="goMoonBirdEth" />
          <span class="based-text">web3://moon-birds-xyz.eth/render/9880</span>
        </div>
        <div class="based-image based-img6" @click.stop="goVitalik">
          <div class="eth-icon" @click.stop="goVitalikEth" />
          <span class="based-text">web3://vitalikblog.eth/</span>
        </div>
      </div>
      <div class="based-li based-l3 based-phone">
        <div class="based-image based-img7" @click.stop="goArtBlock">
          <div class="eth-icon" @click.stop="goArtBlockEth" />
          <span class="based-text">web3://art-blocks-io.eth/render/78/0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasedPage",
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
    },
    goCyberbrokers(){
      this.openUrl("https://cyberbrokers-meta.w3eth.io/renderBroker/5");
    },
    goEns(){
      this.openUrl("https://app-ens-domain.w3eth.io/");
    },
    goUni(){
      this.openUrl("https://app-uniswap-org.w3eth.io/");
    },
    goMoonBird() {
      this.openUrl("https://moon-birds-xyz.w3eth.io/render/9880");
    },
    goNous() {
      this.openUrl("https://nouns-wtf.w3eth.io/render/505");
    },
    goVitalik(){
      this.openUrl("https://vitalikblog.w3eth.io/");
    },
    goArtBlock(){
      this.openUrl("https://art-blocks-io.w3eth.io/render/78/0");
    },

    goCyberbrokersEth(){
      this.openUrl("https://etherscan.io/address/0x8bb9a8baeec177ae55ac410c429cbbbbb9198cac#code");
    },
    goEnsEth(){
      this.openUrl("https://explorer.galileo.web3q.io/address/0xAf9e71674b03fe08D6D8E6745637309378Dd8D8d/contracts");
    },
    goUniEth(){
      this.openUrl("https://explorer.galileo.web3q.io/address/0xB9CDD66E719CB0F8B6f956b8C9a5abE8c9340380/contracts");
    },
    goMoonBirdEth() {
      this.openUrl("https://etherscan.io/address/0x56B9308EFd014f10423B42B3aDE7eeCFe128B1BD#code");
    },
    goNousEth() {
      this.openUrl("https://etherscan.io/address/0xc4fa490829d7a8c6907d8e495ef089a45b64f68b#code");
    },
    goVitalikEth(){
      this.openUrl("https://nova.arbiscan.io/address/0xe4ba0e245436b737468c206ab5c8f4950597ab7f#code");
    },
    goArtBlockEth(){
      this.openUrl("https://etherscan.io/address/0x79a7aa92314fda49262649c6aef543fb0a652243#code");
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  background: #FFFFFF;
}

.based {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.based-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}

.based-li {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.based-l1 {
  margin-top: 80px;
}
.based-l2 {
  margin-top: 20px;
}
.based-l3 {
  margin-top: 20px;
  margin-bottom: 120px;
}
.based-phone {
  display: none;
}

.based-image {
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
.based-image:hover {
  box-shadow: 6px 6px 10px rgba(0,0,0,0.5);
}
.based-img1 {
  height: 360px;
  width: 750px;
  background-image: url(../assets/based1.png);
}
.based-img2 {
  height: 360px;
  width: 430px;
  background-image: url(../assets/based2.png);
}
.based-img3 {
  height: 300px;
  width: 300px;
  background-image: url(../assets/based3.png);
}
.based-img4 {
  height: 300px;
  width: 370px;
  background-image: url(../assets/moonbird.png);
}
.based-img5 {
  height: 300px;
  width: 490px;
  background-image: url(../assets/vblog.png);
}
.based-img6 {
  height: 340px;
  width: 430px;
  background-image: url(../assets/nous.png);
}
.based-img7 {
  height: 340px;
  width: 750px;
  background-image: url(../assets/based5.png);
}

.based-text {
  position: absolute;
  bottom:0;
  left: 0;
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.15);
  font-family: AlibabaPuHuiTiM;
}

.eth-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  content: url(../assets/eth-ico.png);
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .based {
    max-width: 100%;
  }

  .based-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .based-li {
    width: 95%;
  }
  .based-l1 {
    margin-top: 35px;
  }
  .based-l2 {
    margin-top: 10px;
  }
  .based-l3 {
    margin-top: 10px;
    margin-bottom: 35px;
  }
  .based-pc {
    display: none;
  }
  .based-phone {
    display: inherit;
  }

  .based-img1 {
    height: 130px;
    width: 64%;
    background-image: url(../assets/base-phone1.png);
  }
  .based-img2 {
    height: 130px;
    width: 34%;
    background-image: url(../assets/base-phone2.png);
  }
  .based-img3 {
    height: 130px;
    width: 46%;
    background-image: url(../assets/base-phone3.png);
  }
  .based-img4 {
    height: 130px;
    width: 52%;
    background-image: url(../assets/nous-phone.png);
  }
  .based-img5 {
    height: 130px;
    width: 54%;
    background-image: url(../assets/moonbird-phone.png);
  }
  .based-img6 {
    height: 130px;
    width: 44%;
    background-image: url(../assets/vblog-phone.png);
  }
  .based-img7 {
    height: 130px;
    width: 100%;
    background-image: url(../assets/base-phone5.png);
  }

  .based-text {
    height: 25px;
    font-size: 8px;
    line-height: 25px;
    font-family: AlibabaPuHuiTiR;
  }

  .eth-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
