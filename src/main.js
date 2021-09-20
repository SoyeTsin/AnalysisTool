import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import zh from "@/i18n/zh";
import en from "@/i18n/en";
import "@/assets/icon/iconfont.css"
import '@/icons'
import isElectron from "is-electron";

if (isElectron()) {
    const { ipcRenderer } = window.require('electron');
    Vue.prototype.$electron = { ipcRenderer }
}
Vue.prototype.$EventBus = new Vue();
Vue.use(VueI18n)
Vue.config.productionTip = false

let locale = localStorage.getItem('language')

if (!locale) {
    locale = 'zh'
    localStorage.setItem('language', locale);
}
const i18n = new VueI18n({
    locale: locale,
    messages: {
        zh,
        en
    },
    silentTranslationWarn: true
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
