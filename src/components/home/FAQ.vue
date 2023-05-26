<template>
    <div class="faq-wrapper" id="faq">
        <h1>Frequently Asked Questions</h1>

        <div class="faq-main">
            <v-expansion-panels accordion flat class="v-expansion-panels--custom">
                <v-expansion-panel v-for="(faqItem, i) in faqItems" :key="i">
                    <v-expansion-panel-header>{{ faqItem.question }}</v-expansion-panel-header>
                    <v-expansion-panel-content>{{ faqItem.answer }}</v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script>
export default {
    name: "FAQComponent",
    data() {
        return {
            selectedFAQ: null,
            faqItems: [
                {
                    id: 1,
                    question: "What Is GPT4Teachers?",
                    answer: `GPT4Teachers is an AI-powered virtual employee that can assist your
                        business in various tasks, such as answering questions, completing tasks, 
                        onboarding new hires, providing support and troubleshooting, and bringing new ideas and insights.`
                },
                {
                    id: 2,
                    question: "How Does GPT4Teachers Work?",
                    answer: `GPT4Teachers searches all of your accumulated company data, 
                        including articles, PowerPoints, and PDFs, and sources the top 10 most relevant 
                        documents to create an answer to your question in seconds.`
                },
                {
                    id: 3,
                    question: "Can I Upload Documents To Cody?",
                    answer: `Yes, you can upload various types of documents to Cody, 
                    such as Word, PowerPoint, and PDFs, and Cody will instantly learn all that information and use
                     it to provide answers to your questions.`
                },
                {
                    id: 4,
                    question: "What Is GPT4Teachers?",
                    answer: `GPT4Teachers is an AI-powered virtual employee that can assist your
                        business in various tasks, such as answering questions, completing tasks, 
                        onboarding new hires, providing support and troubleshooting, and bringing new ideas and insights.`
                },
                {
                    id: 5,
                    question: "How Does GPT4Teachers Work?",
                    answer: `GPT4Teachers searches all of your accumulated company data, 
                        including articles, PowerPoints, and PDFs, and sources the top 10 most relevant 
                        documents to create an answer to your question in seconds.`
                }
            ]
        }
    },
    methods: {
        selectFAQ(faqItemId) {
            if (faqItemId === this.selectedFAQ) {
                this.selectedFAQ = null;
                return;
            }

            this.selectedFAQ = faqItemId;
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.faq-wrapper {
    h1 {
        font-size: 3rem;
        margin-bottom: 45px;
        color: $white;
        width: 100%;
        text-align: center;

        @include for-phone-only {
            font-size: 2.25rem !important;
        }
    }

    .faq-main {
        width: 70%;
        margin: 0 auto;

        @include for-tablet-portrait-down {
            width: 100%;
            padding: 0 24px;
        }

        .v-expansion-panels--custom::v-deep {
            .v-expansion-panel {
                background-color: $primaryDark;
                color: $grayLight;
                border-radius: 10px;
                margin-bottom: 1.5rem;
                box-shadow: 0px 10px 35px -8px $primaryLight;
                border-left: 8px solid $grayLight;
                padding: 0 28px;

                @include for-tablet-portrait-down {
                    padding: 0 22px;
                }

                .v-expansion-panel-header {
                    padding: 36px 0;
                    font-size: 24px !important;
                    font-weight: 600;

                    @include for-tablet-portrait-down {
                        padding: 28px 0;
                        font-size: 18px !important;
                        font-weight: 500 !important;
                    }

                    .v-expansion-panel-header__icon {
                        .v-icon {
                            color: $grayLight !important;

                            @include for-tablet-portrait-down {
                                font-size: 18px !important;
                            }
                        }
                    }
                }

                .v-expansion-panel-header--active {
                    color: $pink !important;

                    .v-expansion-panel-header__icon {
                        .v-icon {
                            color: $pink !important;
                        }
                    }
                }

                .v-expansion-panel-content {
                    .v-expansion-panel-content__wrap {
                        padding: 0 0 36px 0 !important;
                        line-height: 1.6 !important;
                        font-size: 18px;

                        @include for-tablet-portrait-down {
                            padding-bottom: 28px !important;
                            font-size: 16px !important;
                            line-height: 1.4 !important;
                        }
                    }
                }
            }

            .v-expansion-panel--active {
                border-left-color: $pink;
            }
        }
    }
}
</style>