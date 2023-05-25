<template>
    <div class="what-can-do" id="what-can-do">
        <h1>What Can GPT4Teachers Do?</h1>
        <div class="blocks-wrapper">
            <div class="block">
                <div class="block-left-side">
                    <v-icon size="70" color="purple darken-2">
                        mdi-dialpad
                    </v-icon>
                </div>
                <div class="block-right-side">
                    <h3>Instant Answers To Your Business Questions</h3>
                    <p>
                        No need to track down manuals or sift through endless documents. Cody analyzes all accumulated
                        documents and acts as an expert on all your company processes to provide the answer you need in
                        seconds.
                    </p>
                </div>
            </div>
            <div class="block">
                <div class="block-left-side">
                    <v-icon size="70" color="success">
                        mdi-android
                    </v-icon>
                </div>
                <div class="block-right-side">
                    <h3>Instant Answers To Your Business Questions</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi reiciendis mollitia veritatis, natus
                        harum expedita enim fugiat laudantium culpa nemo!
                        No need to track down manuals or sift through endless documents. Cody analyzes all accumulated
                        documents and acts as an expert on all your company processes to provide the answer you need in
                        seconds.
                    </p>
                </div>
            </div>
            <div class="block">
                <div class="block-left-side">
                    <v-icon size="70" color="pink darken-2">
                        mdi-dialpad
                    </v-icon>
                </div>
                <div class="block-right-side">
                    <h3>Instant Answers To Your Business Questions</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate architecto esse illo odit.
                    </p>
                </div>
            </div>
            <div class="block">
                <div class="block-left-side">
                    <v-icon size="70" color="info darken-2">
                        mdi-package-variant-closed-plus
                    </v-icon>
                </div>
                <div class="block-right-side">
                    <h3>Instant Answers To Your Business Questions</h3>
                    <p>
                        No need to track down manuals or sift through endless documents. Cody analyzes all accumulated
                        documents and acts as an expert on all your company processes to provide the answer you need in
                        seconds.
                    </p>
                </div>
            </div>
            <div class="block">
                <div class="block-left-side">
                    <v-icon size="70" color="purple darken-2">
                        mdi-dialpad
                    </v-icon>
                </div>
                <div class="block-right-side">
                    <h3>Instant Answers To Your Business Questions</h3>
                    <p>
                        No need to track down manuals or sift through endless documents. Cody analyzes all accumulated
                        documents and acts as an expert on all your company processes to provide the answer you need in
                        seconds.
                    </p>
                </div>
            </div>
            <div class="block">
                <div class="block-left-side">
                    <v-icon size="70" color="purple darken-2">
                        mdi-dialpad
                    </v-icon>
                </div>
                <div class="block-right-side">
                    <h3>Instant Answers To Your Business Questions</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti consequatur nulla ratione,
                        consequuntur atque ducimus quaerat, voluptatibus, ab autem veritatis ad rem! Unde aliquam, optio
                        accusantium voluptatibus nisi facere in!
                        No need to track down manuals or sift through endless documents. Cody analyzes all accumulated
                        documents and acts as an expert on all your company processes to provide the answer you need in
                        seconds.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.what-can-do {
    width: 100%;
    border: 2px solid $primaryLight;
    background-color: $bgDark;
    padding: 65px;
    border-radius: 30px;

    @include for-phone-only {
        padding: 35px;
    }

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

    .blocks-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .block {
            max-width: 32%;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            align-items: start;
            background: $bgLight;
            box-shadow: 0px 20px 40px -5px #383838;
            border-radius: 20px;
            margin-bottom: 22.5px;
            transition: all 0.4s ease-in-out;

            &:hover {
                transform: translateY(-3px) scale(1.03);
                box-shadow: 0px 25px 45px -10px #434242;
            }

            @media (max-width: 1200px) {
                max-width: 48%;
            }

            @include for-tablet-only {
                max-width: 100%;
            }

            @include for-phone-only {
                max-width: 100%;
            }

            .block-left-side {
                margin-top: 8px;
            }

            .block-right-side {
                margin-left: 12px;

                h3 {
                    line-height: 22px;
                }

                p {
                    font-size: 14px;
                    line-height: 18px;
                    margin-top: 8px;
                }
            }
        }
    }
}
</style>