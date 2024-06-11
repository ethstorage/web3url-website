<template>
  <div class="home">
    <div class="work">
      <p class="work-title">How web3:// Works ?</p>
      <CardComponent class="work-card"
                     bgColor="#FFF"
                     shadowColor="#FFEAB5"
                     :showTitle="false">
        <img class="work-image" src="@/assets/work.png"/>
      </CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent";

export default {
  name: "UsePage",
  components: {
    CardComponent
  },
};
</script>

<style scoped>
.home {
  background: #F9F7EB;
  width: 100%;
}

.work {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.work-title {
  margin-top: 120px;
  color: #000;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.work-card {
  width: 100%;
  margin-top: 40px;
  height: 600px;
  margin-bottom: 80px;
}
.work-image {
  height: 405px;
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .work {
    max-width: 95%;
  }

  .work-title {
    margin-top: 40px;
    font-size: 16px;
  }

  .work-card {
    width: 100%;
    margin-top: 5px;
    height: 235px;
    margin-bottom: 40px;
  }
  .work-image {
    height: 140px;
  }
}
</style>
