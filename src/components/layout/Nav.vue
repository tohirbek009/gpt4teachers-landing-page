<template>
    <div class="navbar">
        <v-app-bar color="primary" class="v-app-bar--custom" flat>
            <div class="navbar-wrapper">
                <div class="logo">
                    <v-img src="../../assets/logo.png" />
                </div>

                <v-spacer></v-spacer>

                <div class="nav-links-wrapper">
                    <a v-for="link in links" :key="link.id" :href="`#${link.id}`">{{ link.title }}</a>
                </div>

                <v-spacer></v-spacer>

                <div class="navbar-btn">
                    <v-app-bar-nav-icon @click="drawer = !drawer" color="success"></v-app-bar-nav-icon>
                </div>
            </div>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary left color="primary" dark
            class="v-navigation-drawer--custom">
            <div class="navigation-drawer-wrapper">
                <v-btn color="pink" class="close-button" icon @click="drawer = false">
                    <v-icon>mdi-window-close</v-icon>
                </v-btn>
                <div class="logo-wrapper">
                    <div class="logo_">
                        <img src="../../assets/logo.png" />
                    </div>
                </div>

                <div class="links-wrapper">
                    <a v-for="link in links" :key="link.id" :href="`#${link.id}`" @click="drawer = false">{{ link.title }}</a>
                </div>

                <base-button title="Join Free"></base-button>
            </div>
        </v-navigation-drawer>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    name: "Nav-Component",
    data: () => ({
        drawer: false,
        links: [
            {
                title: "Why GPT4Teachers?",
                id: "why-gpt4teachers"
            },
            {
                title: "What Can Do?",
                id: "what-can-do"
            },
            {
                title: "How It Works",
                id: "how-it-works"
            },
            {
                title: "Pricing",
                id: "pricing"
            }
        ],
    }),
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.navbar {
    .v-app-bar--custom {
        height: fit-content !important;
        padding: 16px 24px !important;

        .navbar-wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .logo {
                width: 60px;
                cursor: pointer;
            }

            .nav-links-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;

                a {
                    text-decoration: none;
                    color: $grayLight;
                    margin: 0 16px;
                    font-weight: 500;
                    font-size: 16px;
                    transition: all 0.3s ease-in-out;

                    &:first-child {
                        color: $success;
                    }

                    &:hover {
                        color: $success;
                    }
                }

                @include for-tablet-portrait-down {
                    display: none;
                }
            }

            .navbar-btn {
                display: none;

                @include for-tablet-portrait-down {
                    display: block;
                }
            }
        }
    }
}

.v-navigation-drawer--custom {
    min-width: 50%;

    .navigation-drawer-wrapper {
        width: 100%;
        position: relative;
        padding: 25px;

        .close-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
        }

        .logo-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 0;

            .logo_ {
                width: 60px;
                cursor: pointer;

                img {
                    width: 100%;
                }
            }
        }

        .links-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0;

            a {
                text-decoration: none;
                color: $grayLight;
                margin-bottom: 1rem;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: $success;
                }
            }
        }
    }
}
</style>