const getters = {
  token: (state) => state.user.token,
  isCollapse: (state) => state.user.isCollapse,
  UserInfo: (state) => state.user.UserInfo,
  themeConfig: (state) => state.user.themeConfig,
  tabsMenuList: (state) => state.tabs.tabsMenuList
};

export default getters;