import '@fortawesome/fontawesome-free/css/all.css'

import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || "fa"
    },
    theme: {
        themes: {
            light: {
                background: colors.shades.white,
                primary: "#ee44aa",
                secondary: "#424242",
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            },
            dark: {
                background: colors.shades.black
            }
        }
    }
});
