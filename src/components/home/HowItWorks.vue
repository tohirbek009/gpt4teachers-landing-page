<template>
    <div class="how-it-works" id="how-it-works">
        <h1>How It Works?</h1>
        <div class="empty_space"></div>
        <div class="blocks-wrapper">
            <v-row>
                <v-col cols="12" md="5" lg="6">
                    <div class="img-wrapper">
                        <v-img src="@/assets/img/howItWorks.jpg" />
                    </div>
                </v-col>
                <v-col cols="12" md="7" lg="6">
                    <div class="texts-wrapper">
                        <v-icon size="70" color="purple darken-2">
                            mdi-cloud-upload
                        </v-icon>
                        <h3>Teach It What It Needs To Know</h3>
                        <p>
                            Upload files or import content using URLs to provide your chatbot with the essential knowledge
                            to
                            serve its purpose effectively.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste dolor culpa eius
                            perferendis eos molestiae error ipsa? Nobis perspiciatis impedit delectus labore quia beatae
                            doloremque quidem placeat omnis voluptate quam corrupti, consectetur eius iusto quisquam.
                            Minima, error? Nostrum rem aliquid quis similique quaerat voluptates perferendis suscipit dolor
                            minima culpa!
                        </p>
                    </div>
                </v-col>
            </v-row>
            <div class="row-divider"></div>
            <v-row class="flex-md-row-reverse">
                <v-col cols="12" md="5" lg="6">
                    <div class="img-wrapper">
                        <v-img src="@/assets/img/howItWorks.jpg" />
                    </div>
                </v-col>
                <v-col cols="12" md="7" lg="6" class="flex-direction">
                    <div class="texts-wrapper">
                        <v-icon size="70" color="purple darken-2">
                            mdi-cloud-upload
                        </v-icon>
                        <h3>Teach It What It Needs To Know</h3>
                        <p>
                            Upload files or import content using URLs to provide your chatbot with the essential knowledge
                            to
                            serve its purpose effectively.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste dolor culpa eius
                            perferendis eos molestiae error ipsa? Nobis perspiciatis impedit delectus labore quia beatae
                            doloremque quidem placeat omnis voluptate quam corrupti, consectetur eius iusto quisquam.
                            Minima, error? Nostrum rem aliquid quis similique quaerat voluptates perferendis suscipit dolor
                            minima culpa!
                        </p>
                    </div>
                </v-col>
            </v-row>
            <div class="row-divider"></div>
            <v-row>
                <v-col cols="12" md="5" lg="6">
                    <div class="img-wrapper">
                        <v-img src="@/assets/img/howItWorks.jpg" />
                    </div>
                </v-col>
                <v-col cols="12" md="7" lg="6">
                    <div class="texts-wrapper">
                        <v-icon size="70" color="purple darken-2">
                            mdi-cloud-upload
                        </v-icon>
                        <h3>Teach It What It Needs To Know</h3>
                        <p>
                            Upload files or import content using URLs to provide your chatbot with the essential knowledge
                            to
                            serve its purpose effectively.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste dolor culpa eius
                            perferendis eos molestiae error ipsa? Nobis perspiciatis impedit delectus labore quia beatae
                            doloremque quidem placeat omnis voluptate quam corrupti, consectetur eius iusto quisquam.
                            Minima, error? Nostrum rem aliquid quis similique quaerat voluptates perferendis suscipit dolor
                            minima culpa!
                        </p>
                    </div>
                </v-col>
            </v-row>
            <div class="row-divider"></div>
            <v-row class="flex-md-row-reverse">
                <v-col cols="12" md="5" lg="6">
                    <div class="img-wrapper">
                        <v-img src="@/assets/img/howItWorks.jpg" />
                    </div>
                </v-col>
                <v-col cols="12" md="7" lg="6" class="flex-direction">
                    <div class="texts-wrapper">
                        <v-icon size="70" color="purple darken-2">
                            mdi-cloud-upload
                        </v-icon>
                        <h3>Teach It What It Needs To Know</h3>
                        <p>
                            Upload files or import content using URLs to provide your chatbot with the essential knowledge
                            to
                            serve its purpose effectively.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste dolor culpa eius
                            perferendis eos molestiae error ipsa? Nobis perspiciatis impedit delectus labore quia beatae
                            doloremque quidem placeat omnis voluptate quam corrupti, consectetur eius iusto quisquam.
                            Minima, error? Nostrum rem aliquid quis similique quaerat voluptates perferendis suscipit dolor
                            minima culpa!
                        </p>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.how-it-works {
    width: 100%;
    padding: 0 24px;
    background: radial-gradient(ellipse at center, $primaryLight, $primary 60%);

    h1 {
        font-size: 3rem;
        color: $white;
        width: 100%;
        text-align: center;

        @include for-phone-only {
            font-size: 2.25rem !important;
        }
    }

    .blocks-wrapper {

        .row-divider {
            width: 100%;
            height: 0.7px;
            border-radius: 10px;
            background: gray;
            margin: 28px 0;
            opacity: 0.6;
        }

        .img-wrapper {
            border: 2px solid $purple;
            border-radius: 12px;
            overflow: hidden;
        }

        .texts-wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h3 {
                font-size: 1.3rem !important;
                line-height: 18px;
                color: $white;
                font-weight: 500;
                margin: 1.3rem 0;
            }

            p {
                color: $grayLight;
                padding: 0 1.3rem;
                text-align: center;
            }
        }
    }
}</style>