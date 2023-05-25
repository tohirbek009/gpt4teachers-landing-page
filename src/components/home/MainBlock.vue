<template>
    <div class="main-block">
        <h1>
            Your <span>GPT AI-Assistant</span> for Teachers
        </h1>

        <div class="base-button-wrapper">
            <base-button title="Get Started Free"></base-button>
        </div>
        <p>No Credit Card Required</p>

        <div class="empty_space"></div>

        <v-row class="v-row--custom">
            <v-col cols="12" md="7" lg="6">
                <div class="main-block-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/S7xTBa93TX8"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </v-col>
            <v-col cols="12" md="5" lg="6" class="mt-10 mt-md-0">
                <div class="what-is-gpt4teachers">
                    <h1>What is GPT4Teachers?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem, quod, eos quo recusandae
                        error, praesentium neque eveniet voluptatum et esse beatae perspiciatis impedit! Odio, quaerat?
                        Inventore velit ipsam odit.
                    </p>
                    <ul class="no-need-list">
                        <li>
                            <v-icon color="pink">mdi-close-circle-outline</v-icon>
                            <span>No Keyword Searches</span>
                        </li>
                        <li>
                            <v-icon color="pink">mdi-close-circle-outline</v-icon>
                            <span>No Regurgitated Answers</span>
                        </li>
                        <li>
                            <v-icon color="pink">mdi-close-circle-outline</v-icon>
                            <span>No Need to Give Context Every Time</span>
                        </li>
                    </ul>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.main-block {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $grayLight;
    background: radial-gradient(ellipse at center, $primaryLight, $primary 70%);

    h1 {
        font-size: 3.25rem !important;
        line-height: 3.5rem !important;
        margin-bottom: 2rem;

        @include for-tablet-portrait-down {
            font-size: 3rem !important;
            line-height: 3rem !important;
            margin-top: 0 !important;

            br {
                display: none;
            }
        }

        @include for-phone-only {
            font-size: 2.25rem !important;
        }

        span {
            @include liner-gradient-style-for-text;
        }
    }

    .base-button-wrapper {
        width: 100%;
    }

    p {
        margin-top: 6px;
    }

    .empty_space {
        height: 45px;
    }

    .v-row--custom {
        width: 100%;
    }

    .main-block-video {
        width: 100%;
        height: 600px;
        position: relative;
        border-radius: 30px;
        overflow: hidden;

        iframe {
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            width: 100%;
        }
    }

    .what-is-gpt4teachers {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 16px;

        h1 {
            font-size: 3rem !important;
            color: $white;
            margin-top: 0 !important;
            line-height: 1.4 !important;
        }

        .no-need-list {
            li {
                width: fit-content;
                margin: 16px auto;
                font-size: 1.3rem;
                list-style-type: none;
                padding: 10px 15px;
                border: 1px solid $pink;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: start;
                transition: all 0.3s ease-in-out;

                span {
                    margin-left: 10px;
                }

                &:hover {
                    box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.5);
                }
            }
        }
    }


}

@media screen {}
</style>