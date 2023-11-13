<template>
  <div class="home">
    <div class="web-url">
      <p class="web-url-title">Bind ENS Name to a Chain-Specific Address</p>
      <img class="feature-img" alt="web icon" src="../assets/binding.png">
      <span class="web-context">
        By adding a new text record named "contentcontract" (the value is an <a href="https://eips.ethereum.org/EIPS/eip-3770" target="_blank" class="web-link">EIP-3770</a> address)
        in the ENS setting panel, the users can upload content in any EVM-compatible chain and visit the content by their ENS names.
        Check out <a href="https://w3url.w3eth.io" target="_blank" class="web-link">https://w3url.w3eth.io</a>
        and its <a href="https://app.ens.domains/name/w3url.eth/details" target="_blank" class="web-link">ENS setting page</a>.
      </span>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FFFFFF;
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

.feature-img {
  width: 1200px;
  margin-top: 90px;
  margin-bottom: 0;
}

.web-context {
  width: 1200px;
  margin-top: 25px;
  margin-bottom: 100px;
  font-size: 18px;
  color: #000000;
  line-height: 36px;
  text-align: left;
  font-family: AlibabaPuHuiTiR;
}

.web-link {
  color: #1B60FF;
  text-decoration:underline;
}

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .web-url {
    max-width: 100%;
  }

  .web-url-title {
    max-width: 95%;
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .feature-img {
    width: 95%;
    margin-top: 35px;
    margin-bottom: 0;
  }

  .web-context {
    width: 95%;
    margin-top: 15px;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
