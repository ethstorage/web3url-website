<template>
  <div class="home">
    <div class="how-web3">
      <p class="how-web3-title">How to Use web3:// ?</p>

      <div class="how-card">
        <div class="web-context">
          <div class="web-context-left1">
            <div class="web-left-title">Access web3:// Through<br/>HTTP Gateways</div>
            <div class="web-left-title2">Two types of gateways:</div>
            <div class="web-left-msg">
              1. Multi-Blockchain Gateway: w3link.io <img @click="onReadMore" class="rt-go" src="@/assets/arrow.svg"/>
            </div>
            <div class="web-left-msg">
              2.Ethereum-Only Gateway: w3eth.io <img @click="onW3link" class="rt-go" src="@/assets/arrow.svg"/>
            </div>

            <div class="web-left-title2">Example:</div>
            <div class="web-left-link">web3://vitalikblog.eth</div>
            <div class="web-left-link">https://vitalik.eth.eth.w3link.io/</div>

            <div class="web-left-msg web-margin">
              Wanna contribute to the decentralization and run your gateway? Apply a grant for support!
            </div>
          </div>
          <div class="web-context-right1">
            <div class="web-context-layout">
              <div class="web-right-item">
                <div class="web-right-title">Chain</div>
                <div class="web-context-layout web-context-layout-margin1">
                  <img class="web-right-img" alt="" src="@/assets/eth.svg" />
                  <div class="web-right-msg">Ethereum/ENS</div>
                </div>
                <div class="web-context-layout web-context-layout-margin">
                  <img class="web-right-img" alt="" src="@/assets/op.svg" />
                  <div class="web-right-msg">Optimism</div>
                </div>
                <div class="web-context-layout web-context-layout-margin">
                  <img class="web-right-img" alt="" src="@/assets/arb.svg" />
                  <div class="web-right-msg">Arbitrum One</div>
                </div>
              </div>

              <div class="web-right-item">
                <div class="web-right-title">Gateway</div>
                <div class="web-context-layout web-context-layout-margin1">
                  <img class="web-right-img" alt="" src="@/assets/other.svg"/>
                  <div class="web-right-msg">
                    <p>w3link.io</p>
                    <p>+w3eth.io</p>
                  </div>
                </div>
                <div class="web-context-layout web-context-layout-margin">
                  <img class="web-right-img" alt="" src="@/assets/other.svg"/>
                  <div class="web-right-msg">w3link.io</div>
                </div>
                <div class="web-context-layout web-context-layout-margin">
                  <img class="web-right-img" alt="" src="@/assets/other.svg"/>
                  <div class="web-right-msg">w3link.io</div>
                </div>
              </div>
            </div>
            <div class="web-right-text-layout">
              <span class="web-right-text" @click="onReadMore">Show More <img src="@/assets/arrow.svg"/></span>
            </div>
          </div>
        </div>
      </div>

      <div class="how-card how-card-margin">
        <div class="web-context">
          <div class="web-context-right1 web-context-left2">
            <div class="web-context-layout">
              <div class="web-right-item">
                <div class="web-lr-title">
                  Firefox Extension <img @click="onFirefox" class="rt-go" src="@/assets/arrow-right.svg"/>
                </div>
                <div class="web-lr-msg">
                  The extension will let you use the HTTP gateway more efficiently, by converting web3:// URLs into
                  their
                  gateway equivalent.
                </div>
              </div>
              <img class="web-lr-img web-lr-img-margin" alt="" src="@/assets/firefox.svg"/>
            </div>

            <div class="web-context-layout web-lr-margin">
              <img class="web-lr-img web-lr-img-margin2" alt="" src="@/assets/browser.svg"/>
              <div class="web-right-item">
                <div class="web-lr-title">
                  Native Browser <img @click="onBrowser" class="rt-go" src="@/assets/arrow-right.svg"/>
                </div>
                <div class="web-lr-msg">
                  EVM browser is a basic web browser based on electron/chromium which supports the web3:// protocol via
                  the web3protocol library.
                </div>
              </div>
            </div>

            <div class="web-context-layout">
              <div class="web-right-item">
                <div class="web-lr-title">
                  Web3curl <img @click="onWeb3curl" class="rt-go" src="@/assets/arrow-right.svg"/>
                </div>
                <div class="web-lr-msg">
                  Web3curl is a curl-like app to download data from an web3:// URL. It can be very useful to help
                  debugging URLs.
                </div>
              </div>
              <img class="web-lr-img web-lr-img-margin" alt="" src="@/assets/firefox.svg"/>
            </div>
          </div>

          <div class="web-context-left1 web-context-right2">
            <div class="web-rl-title">Experience Native web3://<br/>Clients</div>
            <div class="web-rl-msg">
              Multiple web3:// clients can accept native web3:// URLs to retrieve the data and access the full-decentralized world.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HowPage",
  methods: {
    openUrlInNewTab(url) {
      window.open(url, "_blank");
    },
    onW3link() {
      this.openUrlInNewTab("https://docs.web3url.io/web3-clients/https-gateway#w3eth.io-single-blockchain-public-gateway");
    },
    onReadMore() {
      this.openUrlInNewTab("https://docs.web3url.io/web3-clients/https-gateway#w3link.io-all-blockchains-public-gateway");
    },
    onFirefox() {
      this.openUrlInNewTab("https://addons.mozilla.org/en-US/firefox/addon/web3url/");
    },
    onBrowser() {
      this.openUrlInNewTab("https://github.com/nand2/evm-browser");
    },
    onWeb3curl() {
      this.openUrlInNewTab("https://github.com/web3-protocol/web3curl-js");
    }
  }
};
</script>


<style scoped>
.home {
  background: #D8CCFF;
}

.how-web3 {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.how-web3-title {
  margin-top: 120px;
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.how-card {
  width: 100%;
  margin-top: 90px;
  background: #000;
}

.web-context {
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
}

.web-context-left1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  padding-right: 120px;
}
.web-left-title {
  margin-top: 50px;
  margin-bottom: 8px;
  text-align: left;
  color: #FF8C5B;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
  font-family: Satoshi;
}
.web-left-title2 {
  margin-top: 28px;
  margin-bottom: 6px;
  color: #FFDCD5;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 33.6px */
  font-family: Satoshi;
}
.web-left-msg {
  text-align: left;
  color: rgba(255, 220, 213, 0.80);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 25.2px */
  font-family: SatoshiRegular;
}
.web-left-link {
  margin-top: 23px;
  width: 100%;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 25.2px */
  opacity: 0.8;
  font-family: SatoshiRegular;
}
.web-margin {
  margin-top: 40px;
  margin-bottom: 85px;
}

.web-context-right1 {
  width: 55%;
  border-radius: 20px;
  border: 1px solid #0C1064;
  background: #FFDCD5;
  margin-top: -32px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 50px 40px;
}
.web-context-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.web-right-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.web-right-title {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 200% */
  font-family: Satoshi;
}
.web-right-img {
  height: 78px;
}
.web-right-msg {
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 66.667% */
  font-family: Satoshi;
  text-align: left;
  min-width: 220px;
  margin-left: 20px;
}
.web-context-layout-margin1 {
  margin-top: 30px;
}
.web-context-layout-margin {
  margin-top: 35px;
}


.web-right-text-layout {
  width: 100%;
  text-align: right;
  margin-top: 40px;
  margin-bottom: 40px;
}
.web-right-text {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
  cursor: pointer;
}
.web-right-text:hover {
  opacity: 0.6;
}

.rt-go {
  cursor: pointer;
  padding: 3px 3px 5px 1px;
}
.rt-go:hover {
  opacity: 0.7;
}

.how-card-margin {
  margin-top: 122px;
  margin-bottom: 80px;
}
.web-context-left2 {
  background: #D8CCFF;
  padding-left: 80px;
  padding-bottom: 80px;
}
.web-lr-title {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 200% */
  font-family: Satoshi;
}
.web-lr-msg {
  margin-top: 15px;
  text-align: left;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 22.4px */
  font-family: SatoshiRegular;
}
.web-lr-img {
  width: 118px;
}
.web-lr-margin {
  margin-top: 65px;
  margin-bottom: 65px;
}
.web-lr-img-margin {
  margin-left: 30px;
}
.web-lr-img-margin2 {
  margin-right: 35px;
}


.web-context-right2 {
  padding-left: 120px;
  padding-right: 0px;
}
.web-rl-title {
  text-align: left;
  margin-top: 75px;
  color: #D8CCFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
  font-family: Satoshi;
}
.web-rl-msg {
  margin-top: 60px;
  text-align: left;
  color: #D8CCFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 33.6px */
  font-family: SatoshiRegular;
}

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .web-url {
    max-width: 100%;
  }

  .web-url-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .web-context {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
  }
  .web-context-item {
    max-width: 88%;
    margin-top: 35px;
  }
  .web-context-title {
    margin-top: 15px;
    font-size: 16px;
    line-height: 16px;
  }
  .web-context-message {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
