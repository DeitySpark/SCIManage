import {
    LoginInfo
} from "../../api/modules";
import router from "../../router/router.js";
import {
    mix
} from "../../utils/color.js";
import {
    ElMessage
} from "element-plus";

export default {
    namespaced: true,
    state: {
        UserInfo: JSON.parse(sessionStorage.getItem("UserInfo")) || {},
        token: sessionStorage.getItem("token") || "",
        isCollapse: true,
        themeConfig: {
            primary: "#4060c7",
            tabColor: "#FFFFFF",
            footColor: "#606266",
            backgroundColor: "#FFFFFF",
            textColor: "#00000099",
            istags: true,
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        // 将用户信息存储在vuex之中
        setUserInfo(state, userInfo) {
            state.UserInfo = userInfo;
        },
        SetIsCollapse(state, isCollapse) {
            state.isCollapse = isCollapse;
        },
        setThemeConfig(state, primary) {
            state.themeConfig.primary = primary;
        },
        setThemeConfigTbaColor(state, primary) {
            state.themeConfig.tabColor = primary;
            if (primary == "#FFFFFF") {
                state.themeConfig.footColor = "#606266";
            } else {
                state.themeConfig.footColor = "#ffffff";
            }
        },
        setThemeConfigMenuColor(state, primary) {
            if (primary) {
                state.themeConfig.backgroundColor = "#FFFFFF";
                state.themeConfig.textColor = "#00000099";
            } else {
                state.themeConfig.backgroundColor = "#1d2129";
                state.themeConfig.textColor = "#bdbdc0";
            }
        },
        setThemeConfigchangeTags(state, primary) {
            if (primary) {
                state.themeConfig.istags = true
            } else {
                state.themeConfig.istags = false
            }
        },
    },

    actions: {
        login({
                  commit
              }, userInfo) {
            return new Promise((resolve, reject) => {
                LoginInfo(userInfo) // 调用登录接口
                    .then((res) => {
                        const obj = {
                            token: res.data.data.token,
                            user_id: res.data.data.user_id,
                            name: res.data.data.name,
                            role: res.data.data.role,
                            email: res.data.data.email,
                            phone: res.data.data.phone,
                        }
                        console.log(obj, 123)
                        console.log(res);
                        sessionStorage.setItem("token", obj.token); // 将token存储在cookie之中
                        sessionStorage.setItem("UserInfo", JSON.stringify(obj)); // 将用户信息存储在cookie之中
                        commit("setToken", obj.token);  // 将token存储在vuex之中
                        // 将用户信息存储在vuex之中
                        commit("setUserInfo", obj)
                        // 跳转到首页
                        router.replace("/");
                        ElMessage({
                            message: "登录成功",
                            type: "success",
                        });
                        resolve();
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        changeIsCollapse({
                             commit
                         }, str) {
            console.log(str);
            commit("SetIsCollapse", str);
        },

        changeThem({
                       commit
                   }, str) {
            commit("setThemeConfig", str);
            const pre = "--el-color-primary";
            // 白色混合色
            const mixWhite = "#ffffff";
            // 黑色混合色
            const mixBlack = "#4060c7";
            const el = document.documentElement;
            el.style.setProperty(pre, str);
            // 这里是覆盖原有颜色的核心代码
            for (let i = 1; i < 10; i += 1) {
                el.style.setProperty(`${pre}-light-${i}`, mix(str, mixWhite, i * 0.7));
            }
            el.style.setProperty("--el-color-primary-dark", mix(str, mixBlack, 0.1));
        },
        changeTabColor({
                           commit
                       }, val) {
            commit("setThemeConfigTbaColor", val);
        },
        changeMenuColor({
                            commit
                        }, val) {
            commit("setThemeConfigMenuColor", val);
        },
        changeTags({
                       commit
                   }, val) {
            commit("setThemeConfigchangeTags", val);
        },
    },
};
