import {
  ElStep
} from "element-plus";
import router from "../../router/router.js";
export default {
  namespaced: true,
  state: {
    tabsMenuList: [{
      title: "首页",
      url: 'home',
      icon: "Menu",
      close: false,
      checked: true
    }]
  },
  mutations: {
    addTabsMenu(state, obj) {

      let titles = state.tabsMenuList.map(item => item.title).join(',')
      if (titles.includes(obj.title)) {
        for (let index = 0; index < state.tabsMenuList.length; index++) {
          const element = state.tabsMenuList[index];
          state.tabsMenuList[index].checked = false
          if (element.title == obj.title) {
            state.tabsMenuList[index].checked = true
          }
        }
      } else {
        state.tabsMenuList.forEach(item => {
          item.checked = false
        });
        state.tabsMenuList.push(obj)
      }
    },

    delectTagMenu(state, item) {
      if (state.tabsMenuList.length == 0) {
        return
      }
      for (let i = 0; i < state.tabsMenuList.length; i++) {
        let ele = state.tabsMenuList[i]
        console.log(ele)
        if (ele == item) {
          state.tabsMenuList[i - 1].checked = true
          state.tabsMenuList.splice(i, 1)
          return router.push(state.tabsMenuList[i - 1].url)
        }
      }
      console.log(state.tabsMenuList)
    }
  },

  actions: {

    addTabs({
      commit
    }, str) {
      console.log(str);
      commit("addTabsMenu", str);
    },
    delectTag({
      commit
    }, val) {

      commit('delectTagMenu', val)
    }

  },
};