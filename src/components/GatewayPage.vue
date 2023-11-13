<template>
  <div class="home">
    <div class="web-url">
      <p class="web-url-title">Access web3:// Using Gateways</p>
      <div class="gateway-table">
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-header">
              <p class="grid-text-header">Gateway</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-header">
              <p class="grid-text-header">Format</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-header">
              <p class="grid-text-header">Chain</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-header">
              <p class="grid-text-header">Example</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3eth.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[name].w3eth.io<br/>
                https://[contract address].w3eth.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img grid-left-other">
              <div class="grid-content-img-layout">
                <img src="../assets/eth.png" class="grid-content-img">
                <img src="../assets/ens.png" class="grid-content-img">
              </div>
              <p class="grid-text">Ethereum/ENS</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                <a href="https://w3url.w3eth.io" target="_blank" class="web-link">https://w3url.w3eth.io</a>
              </p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[name].eth.eth.w3link.io<br/>
                https://[contract address].eth.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img grid-left-other">
              <div class="grid-content-img-layout">
                <img src="../assets/eth.png" class="grid-content-img">
                <img src="../assets/ens.png" class="grid-content-img">
              </div>
              <p class="grid-text">Ethereum/ENS</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                <a href="https://w3url.eth.eth.w3link.io/" target="_blank" class="web-link">https://w3url.eth.eth.w3link.io/</a>
              </p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[name].w3q.w3q-g.w3link.io<br/>
                https://[contract address].w3q-g.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/galileo.png" class="grid-content-img">
              <p class="grid-text">Galileo</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://qrobot.w3q.w3q-g.w3link.io/" target="_blank" class="web-link">
                https://qrobot.w3q.w3q-g.w3link.io/
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].oeth.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/optimism.png" class="grid-content-img">
              <p class="grid-text">Optimism</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.oeth.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.oeth.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[contract address].arb1.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/arbitrumone.png" class="grid-content-img">
              <p class="grid-text">Arbitrum One</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://0xff970a61a04b1ca14834a43f5de4533ebddb5cc8.arb1.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xff970a61a04b1ca14834a43f5de4533ebddb5cc8.arb1.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].arb-nova.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/arbitrumnova.png" class="grid-content-img">
              <p class="grid-text">Arbitrum Nova</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0x2ce21976443622ab8f0b7f6fa3af953ff9bcdcf6.arb-nova.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0x2ce21976443622ab8f0b7f6fa3af953ff9bcdcf6.arb-nova.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[contract address].metis-andromeda.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/metis.png" class="grid-content-img">
              <p class="grid-text">Metis</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000.metis-andromeda.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000.metis-andromeda.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].scr-prealpha.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/scroll.png" class="grid-content-img">
              <p class="grid-text">Scroll</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0xb6dd07d1b65985113ebd3c47ad7aa852644aa3ad.scr-prealpha.w3link.io/hello.txt"
                 target="_blank" class="web-link">
                https://0xb6dd07d1b65985113ebd3c47ad7aa852644aa3ad.scr-prealpha.w3link.io/hello.txt
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].basegor.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/base.svg" class="grid-content-img">
              <p class="grid-text">Base chain</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0x99e94d39fad9806fb7098fcffbe18943cdca840e.basegor.w3link.io/hello.txt"
                 target="_blank" class="web-link">
                https://0x99e94d39fad9806fb7098fcffbe18943cdca840e.basegor.w3link.io/hello.txt
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[contract address].bnb.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/bsc.png" class="grid-content-img">
              <p class="grid-text">BNB Chain</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://0xe9e7cea3dedca5984780bafc599bd69add087d56.bnb.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xe9e7cea3dedca5984780bafc599bd69add087d56.bnb.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].avax.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/avalanche.png" class="grid-content-img">
              <p class="grid-text">Avalanche</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.avax.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.avax.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[contract address].ftm.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/fantom.png" class="grid-content-img">
              <p class="grid-text">Fantom</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://0x69c744d3444202d35a2783929a0f930f2fbb05ad.ftm.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0x69c744d3444202d35a2783929a0f930f2fbb05ad.ftm.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].matic.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/polygon.png" class="grid-content-img">
              <p class="grid-text">Polygon</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0x0000000000000000000000000000000000001010.matic.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0x0000000000000000000000000000000000001010.matic.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[contract address].qkc-s0.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/quarkchain.png" class="grid-content-img">
              <p class="grid-text">QuarkChain</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://0xc2f21f8f573ab93477e23c4abb363e66ae11bac5.qkc-s0.w3link.io/greet?returns=(string)"
                 target="_blank" class="web-link">
                https://0xc2f21f8f573ab93477e23c4abb363e66ae11bac5.qkc-s0.w3link.io/greet?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-left">
              <p class="grid-text">
                https://[contract address].hmy-s0.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-left-img">
              <img src="../assets/harmony.png" class="grid-content-img">
              <p class="grid-text">Harmony</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-left">
              <a href="https://0xcf664087a5bb0237a0bad6742852ec6c8d69a27a.hmy-s0.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xcf664087a5bb0237a0bad6742852ec6c8d69a27a.hmy-s0.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content grid-content-white">
              <p class="grid-text">w3link.io</p>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content grid-content-white grid-content-left">
              <p class="grid-text">
                https://[contract address].evmos.w3link.io
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content grid-content-white grid-content-left-img">
              <img src="../assets/evmos.png" class="grid-content-img">
              <p class="grid-text">Evmos</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content grid-content-white grid-content-left">
              <a href="https://0xc5e00d3b04563950941f7137b5afa3a534f0d6d6.evmos.w3link.io/name?returns=(string)"
                 target="_blank" class="web-link">
                https://0xc5e00d3b04563950941f7137b5afa3a534f0d6d6.evmos.w3link.io/name?returns=(string)
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #F9F9F9;
}

.web-url {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.web-url-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}

.gateway-table {
  width: 1200px;
  margin-top: 80px;
  margin-bottom: 120px;
}

.grid-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  border: 1px solid #000000;
  margin:0 -1px -1px 0;
}
.grid-content-header {
  height: 40px;
}
.grid-content-white {
  background: #FFFFFF;
}

.grid-text-header {
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  font-family: AlibabaPuHuiTiM;
}
.grid-text {
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  font-family: AlibabaPuHuiTiR;
}

.grid-content-left {
  justify-content: left;
  text-align: left;
  padding-left: 20px;
  word-break:break-all;
}
.grid-content-left-img {
  justify-content: left;
  text-align: left;
  padding-left: 47px;
}
.grid-left-other {
  padding-left: 17px;
}
.grid-content-img {
  width: 21px;
  height: 21px;
  margin-right: 5px;
}
.grid-content-text-color {
  color: #00B644;
}
.web-link {
  color: #1B60FF;
  text-decoration: underline;
}

.grid-content-img-layout {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
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

  .gateway-table {
    width: 97%;
    margin-top: 35px;
    margin-bottom: 35px;
  }

  .grid-content {
    height: 130px;
  }
  .grid-content-header {
    height: 40px;
  }

  .grid-text-header {
    font-size: 9px;
    line-height: 12px;
  }
  .grid-text {
    font-size: 9px;
    line-height: 18px;
    word-break: break-all;
  }

  .grid-content-left {
    justify-content: center;
    text-align: left;
    padding: 5px;
  }
  .grid-content-left-img {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1px;
  }
  .grid-left-other {
    padding-left: 1px;
  }
  .grid-content-img {
    width: 15px;
    height: 15px;
    margin-right: 3px;
  }
  .web-link {
    padding: 2px;
  }
  .content-world {
    word-break: break-word;
  }
}
</style>
