<template>
    <v-footer dark padless>
        <v-card flat tile class="primary footer-wrapper">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-container fuid>
                <v-row class="footer-main">
                    <v-col cols="12" md="3">
                        <div class="first-part align-center align-md-start">
                            <div class="logo">
                                <v-img src="../../assets/logo.png" />
                            </div>
                            <div class="support-email">
                                <a href="mailto:support@gpt4teachers.com">support@gpt4teachers.com</a>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3">
                        <div class="next-part align-center align-md-start">
                            <h3>Support</h3>
                            <a href="#">Help</a>
                            <a href="#">Enterprise</a>
                            <a href="#">Our Blog</a>
                            <a href="#">API</a>
                            <a href="#">Community</a>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3">
                        <div class="next-part align-center align-md-start">
                            <h3>About</h3>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#pricing">Pricing</a>
                            <a href="/">Log In</a>
                            <a href="/">Sign Up</a>
                        </div>
                    </v-col>
                </v-row>
            </v-container>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>GPT4Teachers</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "FooterComponent",
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.footer-wrapper {
    width: 100%;

    .v-card__text {
        display: flex;
        justify-content: center;
    }

    .footer-main {
        padding: 2rem 3rem;
        justify-content: space-between;

        .first-part {
            display: flex;
            flex-direction: column;

            .logo {
                width: 60px;
                cursor: pointer;
                margin-bottom: 2rem;
            }

            .support-email {
                a {
                    text-decoration: none;
                    color: $white !important;
                }
            }
        }

        .next-part {
            display: flex;
            flex-direction: column;

            h3 {
                margin-bottom: 1.5rem;
            }

            a {
                text-decoration: none;
                color: $grayLight;
            }
        }
    }
}
</style>