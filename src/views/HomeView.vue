<template>
  <div>
    <HeaderPage/>
    <BasedPage/>
    <ClientsPage/>
    <UsePage/>
    <WorkPage/>
    <WebUrlPage/>
    <HowPage/>
    <FooterPage/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

import HeaderPage from '../page/HeaderPage.vue';

const BasedPage = defineAsyncComponent(() => import('../page/BasedPage.vue'));
const ClientsPage = defineAsyncComponent(() => import('../page/ClientsPage.vue'));
const UsePage = defineAsyncComponent(() => import('../page/UsePage.vue'));
const WorkPage = defineAsyncComponent(() => import('../page/WorkPage.vue'));
const WebUrlPage = defineAsyncComponent(() => import('../page/WebUrlPage.vue'));
const HowPage = defineAsyncComponent(() => import('../page/HowPage.vue'));
const FooterPage = defineAsyncComponent(() => import('../page/FooterPage.vue'));

export default {
  name: "HomePage",
  components: {
    HeaderPage,
    BasedPage,
    ClientsPage,
    UsePage,
    WorkPage,
    WebUrlPage,
    HowPage,
    FooterPage,
  },
};
</script>
