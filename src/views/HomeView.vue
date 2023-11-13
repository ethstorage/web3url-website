<template>
  <div>
    <HeaderPage/>
    <BasedPage/>
    <WebUrlPage/>
    <UsePage/>
    <GatewayPage/>
    <BindingPage/>
    <WorkPage/>
    <DAppPage/>
    <FooterPage/>
  </div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue';
import BasedPage from '../components/BasedPage.vue';
import WebUrlPage from '../components/WebUrlPage.vue';
import UsePage from '../components/UsePage.vue';
import WorkPage from '../components/WorkPage.vue';
import DAppPage from '../components/DAppPage.vue';
import GatewayPage from '../components/GatewayPage.vue';
import BindingPage from '../components/BindingPage.vue';
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "Home",
  components: {
    HeaderPage,
    BasedPage,
    WebUrlPage,
    UsePage,
    WorkPage,
    DAppPage,
    GatewayPage,
    BindingPage,
    FooterPage,
  },
};
</script>
