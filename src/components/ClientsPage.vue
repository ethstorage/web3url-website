<template>
  <div class="home">
    <div class="clients">
      <p class="clients-title">Access web3:// URLs now</p>
      <div class="clients-url-bar-area">
        <div id="clients-url-bar-wrapper">
          <input id="clients-url-bar" type="text" placeholder="web3://..." v-model="web3Url" @keyup.enter="loadWeb3UrlInViewer" />

          <div id="clients-url-bar-examples" v-if="showWeb3UrlExamples">
            <div class="clients-url-bar-example" v-for="example in web3UrlExamples" :key="example.url" @click="web3Url = example.url; showWeb3UrlExamples = false; loadWeb3UrlInViewer()">
              <div class="clients-url-bar-example-title">{{ example.title }}</div>
              <div class="clients-url-bar-example-url">{{ example.url }}</div>
            </div>
          </div>
          <a id="clients-url-bar-examples-show-button" v-else @click="showWeb3UrlExamples = true">
            Try other web3:// URL examples
          </a>
        </div>
        <div class="clients-go-to-button" @click="loadWeb3UrlInViewer">
          Go to →
        </div>
      </div>
      <div id="clients-embedded-viewer-area">
        <div id="clients-embedded-viewer-url-infos">
          <div>
            <div class="infos-title">Smart Contract</div>
            <div class="infos-value">
              <div v-if="parsedWeb3Url.contractAddress == null" class="loading-spinner"></div>
              <div v-else>
                <div>
                  <a v-if="parsedWeb3Url.chainId in chainExplorerUrls" :href="chainExplorerUrls[parsedWeb3Url.chainId].replace('<address>', parsedWeb3Url.contractAddress)" target="_blank">
                    {{ parsedWeb3Url.contractAddress }}
                  </a>
                  <span v-else>
                    {{ parsedWeb3Url.contractAddress }}
                  </span>
                  @
                  <span v-if="chainList.find(chain => chain.id == parsedWeb3Url.chainId)">
                    {{ chainList.find(chain => chain.id == parsedWeb3Url.chainId).name }} 
                    <span v-if="parsedWeb3Url.chainId != 1">
                      (id {{ parsedWeb3Url.chainId }})
                    </span>
                  </span>
                  <span v-else>
                    chain id {{ parsedWeb3Url.chainId }}
                  </span>

                </div>
                <div style="font-size: 14px">
                  <span class="infos-value-subtitle">Domain name resolution: </span>
                  {{ parsedWeb3Url.nameResolution.resolver ? parsedWeb3Url.nameResolution.resolver.toUpperCase() : "(none)" }}
                  <span v-if="parsedWeb3Url.nameResolution.resolver">
                    @
                    <span v-if="chainList.find(chain => chain.id == parsedWeb3Url.nameResolution.resolverChainId)">
                      {{ chainList.find(chain => chain.id == parsedWeb3Url.nameResolution.resolverChainId).name }} 
                      <span v-if="parsedWeb3Url.nameResolution.resolverChainId != 1">
                        (id {{ parsedWeb3Url.nameResolution.resolverChainId }})
                      </span>
                    </span>
                    <span v-else>
                      chain id {{ parsedWeb3Url.nameResolution.resolverChainId }}
                    </span>

                    <span v-if="parsedWeb3Url.nameResolution.resolutionType == 'contentContractTxt'">
                      (via contentcontract TXT field<sup><a href="https://docs.web3url.io/web3-url-structure/domain-name" target="_blank">?</a></sup> )
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="infos-title">Resolve mode <sup><a href="https://docs.web3url.io/web3-url-structure/resolve-mode" target="_blank">?</a></sup></div>
            <div class="infos-value">
              <div v-if="parsedWeb3Url.mode == null" class="loading-spinner"></div>
              <div v-else>
                <a v-if="parsedWeb3Url.mode == 'manual'" href="https://docs.web3url.io/web3-url-structure/resolve-mode/mode-manual" target="_blank">
                  Manual
                </a>
                <a v-else-if="parsedWeb3Url.mode == 'auto'" href="https://docs.web3url.io/web3-url-structure/resolve-mode/mode-auto" target="_blank">
                  Auto
                </a>
                <a v-else-if="parsedWeb3Url.mode == 'resourceRequest'" href="https://docs.web3url.io/web3-url-structure/resolve-mode/mode-resource-request" target="_blank">
                  Resource request
                </a>
                <span v-else>
                  {{ parsedWeb3Url.mode }}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="infos-title">Smart Contract call</div>
            <div class="infos-value">
              <div v-if="parsedWeb3Url.parsedPath == null" class="loading-spinner"></div>
              <div v-else>
                <div v-if="parsedWeb3Url.parsedPath.contractCallMode == 'method'">
                  <div>
                    <span class="infos-value-subtitle">Method:</span> {{ parsedWeb3Url.parsedPath.methodName }}({{ parsedWeb3Url.parsedPath.methodArgs.map(arg => arg.type).join(', ') }})
                  </div>
                  <div>
                    <span class="infos-value-subtitle">Args: </span> 
                    <code v-for="argValue in parsedWeb3Url.parsedPath.methodArgValues" :key="argValue" style="margin-right: 10px;">{{ argValue }}</code>
                  </div>
                </div>
                <div v-else-if="parsedWeb3Url.parsedPath.contractCallMode == 'calldata'">
                  <span class="infos-value-subtitle">Calldata:</span> {{ parsedWeb3Url.parsedPath.calldata }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <span id="clients-embedded-viewer-notice" style="font-size: 12px; color: #616161">
            Embedded web3:// gateway preview, <a href="" @click.prevent="loadWeb3UrlInNewTab">click here</a> to load the gateway in a separate tab.
        </span>
        <iframe id="clients-embedded-viewer" src="" frameborder="0"></iframe>
      </div>
      <div class="clients-others">
        Or use the <a href="https://github.com/nand2/evm-browser" target="_blank">EVM Browser</a>, <a href="https://github.com/ComfyGummy/chrome-web3" target="_blank">Chrome extension</a> or <a href="https://github.com/web3-protocol/web3curl-js" target="_blank">web3curl app</a>
      </div>

    </div>
  </div>
</template>

<script>

import { Client } from 'web3protocol';
import { getDefaultChainList } from 'web3protocol/chains';

export default {
  name: "ClientsPage",
  data() {
    return {
      web3UrlExamples: [
        {
          title: "Vitalik's blog on Arbitrum Nova",
          url: "web3://vitalikblog.eth"
        },
        {
          title: "Display a Terraform (on-chain NFT)",
          url: "web3://0x4e1f41613c9084fdb9e34e11fae9412427480e56/tokenHTML/9352"
        },
        {
          title: "USDC balance of nemorino.eth",
          url: "web3://usdc.eth/balanceOf/nemorino.eth?returns=(uint256)"
        },
        {
          title: "Fetch a complex data structure",
          url: "web3://0x4e1f41613c9084fdb9e34e11fae9412427480e56/structureData/1699519297?returns=((uint,uint,int,int,int)[20])"
        },
        {
          title: "ResourceRequest resolve mode website",
          url: "web3://0x2b51A751d3c7d3554E28DC72C3b032E5f56Aa656/view/1234?x=1&b=2",
        },
        {
          title: "Call a contract method on goerli",
          url: "web3://0x76010876050387FA66E28a1883aD73d576D88Bf2:5/levelAndTile/2/50?returns=(uint256,uint256)"
        }
      ],
      showWeb3UrlExamples: false,
      chainList: {},
      web3Client: null,
      web3Url: "web3://vitalikblog.eth",
      // Incremental parsing of the web3 URL by web3protocol-js is stored here.
      parsedWeb3Url: {},
      chainExplorerUrls: {
        1: "https://etherscan.io/address/<address>#code",
        5: "https://goerli.etherscan.io/address/<address>#code",
        11155111: "https://sepolia.etherscan.io/address/<address>#code",
        137: "https://polygonscan.com/address/<address>#code",
        42170: "https://nova.arbiscan.io/address/<address>#code",
        10: "https://optimistic.etherscan.io/address/<address>#code",
      }
    }
  },
  created() {
    // Load the web3 protocol client
    this.chainList = getDefaultChainList()
    this.web3Client = new Client(this.chainList)
  },
  methods: {
    /**
     * Load the web3 URL in the embedded viewer.
     * It will first load the URL using web3protocol-js, display a few infos (smart contract
     * address, resolve mode, smart contract call) and then load the URL in an iframe.
     */
    async loadWeb3UrlInViewer(){
      // Reinitialize the parsed web3 url
      this.$set(this, 'parsedWeb3Url', {});
      // Reinitialize the viewer
      document.getElementById('clients-embedded-viewer').src = "";

      // Show the viewer area
      document.getElementById('clients-embedded-viewer-area').style.display = "block";

      let urlMainParts
      try {
        // Step 1.1 : Extract parts of the URL, determine if a chain id was provided.
        let chainId
        ({urlMainParts, chainId} = this.web3Client.parseUrlBasic(this.web3Url))
        this.$set(this.parsedWeb3Url, 'chainId', chainId);
      }
      catch(err) {
        alert("web3curl: Basic parsing: Error: " + err.message + "\n")
        return
      }

      try {
        // Step 1.2 : For a given hostname, determine the target contract address.
        let {contractAddress, chainId: updatedChainId, nameResolution} = await this.web3Client.determineTargetContractAddress(urlMainParts.hostname, this.parsedWeb3Url.chainId)
        this.$set(this.parsedWeb3Url, 'contractAddress', contractAddress);
        this.$set(this.parsedWeb3Url, 'chainId', updatedChainId);
        this.$set(this.parsedWeb3Url, 'nameResolution', nameResolution);
        
      }
      catch(err) {
        alert("web3curl: Hostname resolution: Error: " + err.message + "\n")
        return;
      }

      try {
        // Step 1.3 : Determine the web3 mode.
        const resolveModeDeterminationResult = await this.web3Client.determineResolveMode(this.parsedWeb3Url.contractAddress, this.parsedWeb3Url.chainId)
        this.$set(this.parsedWeb3Url, 'mode', resolveModeDeterminationResult.mode);
        this.$set(this.parsedWeb3Url, 'modeDeterminationCalldata', resolveModeDeterminationResult.calldata);
        this.$set(this.parsedWeb3Url, 'modeDeterminationReturn', resolveModeDeterminationResult.return);
      }
      catch(err) {
        alert("web3curl: Resolve mode determination: Error: " + err.message + "\n")
        return;
      }

      try {
        // Step 1.4 : Parse the path part of the URL, given the web3 resolve mode.
        let parsedPath = await this.web3Client.parsePathForResolveMode(urlMainParts.path, this.parsedWeb3Url.mode, this.parsedWeb3Url.chainId)
        this.$set(this.parsedWeb3Url, 'parsedPath', parsedPath);
      }
      catch(err) {
        alert("web3curl: Path parsing: Error: " + err.message + "\n")
        return;
      }

      // Show the viewer
      document.getElementById('clients-embedded-viewer').style.display = "block";
      document.getElementById('clients-embedded-viewer-notice').style.display = "block";

      // Load the web3 url in the embedded viewer
      let gatewayUrl = this.web3UrlToGatewayUrl(this.web3Url);
      document.getElementById('clients-embedded-viewer').src = gatewayUrl;
    },

    /**
     * Load the web3 URL in a new tab.
     */
    loadWeb3UrlInNewTab(){
      let gatewayUrl = this.web3UrlToGatewayUrl(this.web3Url);
      this.openUrlInNewTab(gatewayUrl);
    },

    /**
     * Translate a web3:// URL to a gateway URL.
     */
    web3UrlToGatewayUrl(web3Url) {
      // Parse the URL
      let matchResult = web3Url.match(/^(?<protocol>[^:]+):\/\/(?<hostname>[^:/?]+)(:(?<chainId>[1-9][0-9]*))?(?<path>.*)?$/)
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
      return gatewayUrl;
    },

    /**
     * Open a URL in a new tab.
     */
    openUrlInNewTab(url) {
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
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
  width: 1000px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: top;
  gap: 10px;
}

#clients-url-bar-wrapper {
  flex: 1;
  text-align: left;
}

#clients-url-bar {
  min-width: 300px;
  height: 40px;
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
}

#clients-url-bar-examples-show-button {
  font-size: 12px;
}

#clients-url-bar-examples {
  display: table;
  width: 100%;
  font-size: 14px;
  border-width: 0px 1px 1px 1px;
  border-color: #8f8f9d;
  border-style: solid;
  background-color: white;
}

#clients-url-bar-examples .clients-url-bar-example {
  display: table-row;
  text-align: left;
  cursor: pointer;
}
#clients-url-bar-examples .clients-url-bar-example:hover {
  background-color: #cfcfcf;
}

#clients-url-bar-examples .clients-url-bar-example-title,
#clients-url-bar-examples .clients-url-bar-example-url {
  display: table-cell;
  padding: 6px 20px;
}
#clients-url-bar-examples .clients-url-bar-example-url {
  word-break: break-all;
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

#clients-embedded-viewer-area {
  padding-top: 25px;
  margin-top: 25px;
  background-color: #e1e1e1;
  margin-bottom: 10px;
  width: 100%;
  display: none;
}

#clients-embedded-viewer-url-infos {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  row-gap: 20px;
  gap: 20px;
}

#clients-embedded-viewer-url-infos .infos-title {
  font-weight: bold;
  font-size: 18px;
}

#clients-embedded-viewer-url-infos .infos-value .infos-value-subtitle {
  font-weight: bold;
}

#clients-embedded-viewer {
  display: none;
  border: 1px solid rgb(97, 97, 97);
  width: calc(100% - 20px);
  height: 600px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

#clients-embedded-viewer-notice {
  display: none;
}

.clients-others {
  margin-top: 30px;
  margin-bottom: 80px;
}

.loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #1174FF;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
