export default {
    namespaced: true,
    state: {
       thesis: {}
    },
    mutations: {    // 同步操作
        setThesis(state, thesis) {
            state.thesis = thesis
        }
    },

    actions: {  // 异步操作

    }
}
