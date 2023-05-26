<template>
    <v-main class="primary">
        <v-container fluid>
            <main-block />
            <div class="empty_space"></div>
            <what-can-do />
            <div class="empty_space"></div>
            <how-it-works />
            <div class="empty_space"></div>
            <div class="empty_space"></div>
            <f-a-q />
            <div class="empty_space"></div>
        </v-container>
        <pricing />
    </v-main>
</template>
  
<script>
import MainBlock from './MainBlock.vue';
import WhatCanDo from './WhatCanDo.vue';
import HowItWorks from './HowItWorks.vue';
import Pricing from './Pricing.vue';
import FAQ from './FAQ.vue';

export default {
    components: {
        MainBlock,
        WhatCanDo,
        HowItWorks,
        Pricing,
        FAQ
    },
    name: "Home-Component",
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.empty_space {
    height: 90px;

    @include for-tablet-portrait-down {
        height: 45px !important;
    }
}
</style>