import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    vuetify: {
        customVariables: ['@/assets/colors/colors.scss'],
        treeShake: true
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#110121",
                primaryLight: "#350249",
                purple: "#a020f0",
                bgDark: "#15091f",
                bgLight: "#d7d3d8",
                success: "#0FAE96",
                grayLight: "#E9EEED",
                white: "#ffffff",
                pink: "#EA689E"
            },
        },
    },
    icons: {
        iconfont: 'fa' || 'mdi' || 'mdiSvg' || 'md',
    },
});
