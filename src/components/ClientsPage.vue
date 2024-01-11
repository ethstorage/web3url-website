<template>
  <div class="home">
    <div class="clients">
      <p class="clients-title">Access web3:// URLs now</p>
      <div class="clients-url-bar-area">
        <input id="clients-url-bar" type="text" placeholder="web3://..." value="web3://vitalikblog.eth" />
        <div class="clients-go-to-button" @click="goToUrl">
          Go to via gateway →
        </div>
      </div>
      <div class="clients-others">
        Or use the <a href="https://github.com/nand2/evm-browser" target="_blank">EVM Browser</a>, <a href="https://github.com/ComfyGummy/chrome-web3" target="_blank">Chrome extension</a> or <a href="https://github.com/web3-protocol/web3curl-js" target="_blank">web3curl app</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsPage",
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
    },
    goToUrl(){
      let url = document.getElementById('clients-url-bar').value;

      // Parse the URL
      let matchResult = url.match(/^(?<protocol>[^:]+):\/\/(?<hostname>[^:/?]+)(:(?<chainId>[1-9][0-9]*))?(?<path>.*)?$/)
      if(matchResult == null) {
        alert("Invalid web3:// URL");
      }
      let urlMainParts = matchResult.groups

      // Check protocol name
      if(["web3", "w3"].includes(urlMainParts.protocol) == false) {
        throw new Error("Bad protocol name");
      }

      // Get subdomain components
      let gateway = "w3link.io"
      let subDomains = []
      // Is the contract an ethereum address?
      if(/^0x[0-9a-fA-F]{40}$/.test(urlMainParts.hostname)) {
        subDomains.push(urlMainParts.hostname)
        if(urlMainParts.chainId !== undefined) {
          subDomains.push(urlMainParts.chainId)
        }
        else {
          gateway = "w3eth.io"
        }
      }
      // It is a domain name
      else {
        // ENS domains on mainnet have a shortcut
        if(urlMainParts.hostname.endsWith('.eth') && urlMainParts.chainId === undefined) {
          gateway = "w3eth.io"
          subDomains.push(urlMainParts.hostname.slice(0, -4))
        }
        else {
          subDomains.push(urlMainParts.hostname)
          if(urlMainParts.chainId !== undefined) {
            subDomains.push(urlMainParts.chainId)
          }
        }
      }

      let gatewayUrl = "https://" + subDomains.join(".") + "." + gateway + (urlMainParts.path ?? "")
      this.openUrl(gatewayUrl);
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  background: #F9F9F9;
}

.clients {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.clients-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}

.clients-url-bar-area {
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  width: 800px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#clients-url-bar {
  flex: 1;
  min-width: 300px;
  height: 40px;
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
}

.clients-go-to-button {
  width: 220px;
  height: 50px;
  background: #1174FF;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #FFFFFF;
  font-family: AlibabaPuHuiTiB;
}

.clients-others {
    margin-top: 30px;
    margin-bottom: 80px;
}

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .clients {
    max-width: 100%;
  }

  .clients-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .clients-url-bar-area {
    width: auto;
  }
}
</style>
