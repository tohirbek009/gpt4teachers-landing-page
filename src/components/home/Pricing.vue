<template>
    <div class="pricing" id="pricing">
        <div class="pricing-title">
            <span>Get Started for Free</span>
        </div>
        <p class="small-info-about-pricing">
            Wether you’re using Cody for personal use,
            with a team, or plan to provide it to your clients we have a package for you.
        </p>
        <div class="empty_space"></div>
        <v-row class="pricing-blocks-wrapper">
            <v-col cols="12" md="4">
                <div class="block">
                    <h3>Personal</h3>
                    <p>No Credit Card Required</p>
                    <div class="price">$0</div>
                    <div class="divider"></div>
                    <div class="features">
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">250 GPT3.5 Queries Per Month</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">3 Users</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">3 Bots</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">100 Documents</div>
                        </div>
                    </div>
                    <base-button title="Get Started For Free"></base-button>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="block">
                    <h3>Personal</h3>
                    <div class="price">$29/mo</div>
                    <div class="divider"></div>
                    <div class="features">
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">2,500 GPT3.5 Queries Per Month</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">3 Users</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">3 Bots</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">1,000 Documents</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">Embed Website Widget</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">Customize Widget</div>
                        </div>
                    </div>
                    <base-button title="Subscribe"></base-button>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="block">
                    <h3>Personal</h3>
                    <div class="price">$99/mo</div>
                    <div class="divider"></div>
                    <div class="features">
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">1,000 GPT4 Queries or 10,000 GPT3.5 Queries Per Month</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">15 Users</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">15 Bots</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">Website Crawler</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">10,000 Documents</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">10,000 Website Pages</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">10,000 Website Pages</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">Customize Website Widget</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">Remove Cody Branding on Widget</div>
                        </div>
                        <div class="feature-item">
                            <v-icon color="success">mdi-check-decagram-outline</v-icon>
                            <div class="item-info">API</div>
                        </div>
                    </div>
                    <base-button title="Subscribe"></base-button>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
    name: "Pricing-Component",
    comments: {
        BaseButton
    },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.pricing {
    width: 100%;
    background-color: $primaryDark;
    padding: 45px 24px;

    @include for-tablet-portrait-down {
        padding-top: 35px;
    }

    .pricing-title {
        width: 100%;
        text-align: center;
        margin-bottom: 1.5rem;

        span {
            font-size: 4.5rem;
            font-weight: 600;

            @include liner-gradient-style-for-text;

            @include for-tablet-portrait-down {
                font-size: 3rem !important;
            }

            @include for-phone-only {
                font-size: 2.25rem !important;
            }
        }
    }

    .small-info-about-pricing {
        color: $grayLight;
        font-size: 16px;
        width: 100%;
        text-align: center;
    }

    .pricing-blocks-wrapper {
        display: flex;
        justify-content: center;
        padding: 0 7rem;

        @media (max-width: 1200px) {
            padding: 0 3rem;
        }

        @include for-phone-only {
            padding: 0 1rem;
        }

        .block {
            border: 0.15rem solid #2f325a;
            background-color: $blueDark;
            padding: 2rem;
            border-radius: 1.8rem;

            h3 {
                color: $white;
                margin-bottom: 0.5rem;
            }

            p {
                color: $grayLight;
            }

            .price {
                font-size: 3rem;
                margin-bottom: 1.5rem;
                font-weight: 700;
                font-family: 'Manrope', sans-serif !important;

                @include liner-gradient-style-for-text;
            }

            .divider {
                border: 0.5px solid;
                border-image: linear-gradient(to right, $pink, $success);
                border-image-slice: 0.5;
                margin-bottom: 1.5rem;
            }

            .features {
                margin-bottom: 1.5rem;
                .feature-item {
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    margin-bottom: 0.5rem;

                    .item-info {
                        color: $grayLight;
                        font-size: 16px;
                        margin-left: 6px;
                    }
                }
            }
        }

    }
}
</style>