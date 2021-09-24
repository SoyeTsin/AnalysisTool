import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: null,
        fileActive: ['0'], // 当前激活的文件夹
        fileObject: {}, // 文件夹总数据
        fileContent: []// 当前文件夹下的图片文件
    },
    mutations: {
        changeFileActive(state, value) {
            state.fileActive = value
        },
        changeFileObject(state, value) {
            state.fileObject = value
        },
        changeFileContent(state, value) {
            state.fileContent = value
        }
    },
    actions: {},
    getters: {
        getName: state => {
            state.name
        }
    },
    modules: {}
})

export default store;
