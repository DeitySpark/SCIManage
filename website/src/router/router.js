import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import home from "../views/home/index.vue";
import login from "../views/login/index.vue";
import Layout from "../layout/index.vue";

const routes = [
    {
        path: "/login",
        name: login,
        component: login,
    },
    {
        path: "/",
        component: Layout,
        name: "container",
        redirect: "home",
        meta: {
            requiresAuth: true, //有一些页面是否登录才能进去
            name: "首页",
        },
        children: [{
            path: "/home",
            name: "home",
            component: () => import("../views/home/index.vue"),
            meta: {
                requiresAuth: true, //有一些页面是否登录才能进去
                name: "首页",
            },
        },],
    },
    {
        path: "/thesis",
        name: "thesis",
        component: Layout,
        meta: {
            name: "论文管理",
        },
        children: [
            {
                path: "/thesisList",
                name: "thesisList",
                component: () => import("../views/thesis/thesisList.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "论文列表",
                },
            },
            {
                path: "/thesisDetail",
                name: "thesisDetail",
                component: () => import("../views/thesis/thesisDetail.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "论文详情",
                },
            },
            {
                path: "/thesisAdd",
                name: "thesisAdd",
                component: () => import("../views/thesis/thesisAdd.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "论文添加",
                },
            },
            {
                path: "/thesisEdit",
                name: "thesisEdit",
                component: () => import("../views/thesis/thesisEdit.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "论文编辑",
                },
            },
        ],
    },
    /*
    {
        path: "/form",
        name: "form",
        component: Layout,
        meta: {
            name: "表单页",
        },
        children: [{
            path: "/baseForm",
            name: "baseForm",
            component: () => import("../views/form/baseForm.vue"),
            meta: {
                requiresAuth: true, //有一些页面是否登录才能进去
                name: "基础表单",
            },
        },
            {
                path: "/stepFrom",
                name: "stepFrom",
                component: () => import("../views/form/stepFrom.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "分页表单",
                },
            },
            {
                path: "/advancedForm",
                name: "advancedForm",
                component: () => import("../views/form/advancedForm.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "高级表单",
                },
            },
        ],
    },
    {
        path: "/system",
        name: "system",
        component: Layout,
        meta: {
            name: "系统管理",
        },
        children: [{
            path: "/Department",
            name: "Department",
            component: () => import("../views/system/Department/index.vue"),
            meta: {
                requiresAuth: true, //有一些页面是否登录才能进去
                name: "机构管理",
            },
        },
            {
                path: "/UserList",
                name: "UserList",
                component: () => import("../views/system/UserList/index.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "内嵌表格",
                },
            },
            {
                path: "/RoleList",
                name: "RoleList",
                component: () => import("../views/system/RoleList/index.vue"),
                meta: {
                    requiresAuth: true,
                    name: "滑动加载",
                },
            },
            {
                path: "/MenuList",
                name: "MenuList",
                component: () => import("../views/system/MenuList/index.vue"),
                meta: {
                    requiresAuth: true,
                    name: "可编辑Table",
                },
            },
            {
                path: "/importExcel",
                name: "importExcel",
                component: () => import("../views/system/Excel/importExcel.vue"),
                meta: {
                    requiresAuth: true,
                    name: "Excel",
                },
            },
        ],
    },
    {
        path: "/ErrorMessage",
        name: "ErrorMessage",
        component: Layout,
        meta: {
            name: "异常页面",
        },
        children: [{
            path: "/404",
            name: "404",
            component: () => import("../views/ErrorMessage/404.vue"),
            meta: {
                requiresAuth: true, //有一些页面是否登录才能进去
                name: "404",
            },
        },
            {
                path: "/500",
                name: "500",
                component: () => import("../views/ErrorMessage/500.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "500",
                },
            },
        ],
    },
    {
        path: "/goods",
        name: "goods",
        component: Layout,
        meta: {
            name: "列表页",
        },
        children: [{
            path: "/goodCategory",
            name: "goodCategory",
            component: () => import("../views/goods/goodCategory.vue"),
            meta: {
                requiresAuth: true, //有一些页面是否登录才能进去
                name: "基础列表",
            },
        },
            {
                path: "/cardList",
                name: "cardList",
                component: () => import("../views/goods/cardList.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "卡片列表",
                },
            },
            {
                path: "/searchList",
                name: "searchList",
                component: () => import("../views/goods/searchList.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "搜索列表",
                },
            },
        ],
    },
    {
        path: "/able",
        name: "able",
        component: Layout,
        meta: {
            name: "功能",
        },
        children: [{
            path: "/watermark",
            name: "watermark",
            component: () => import("../views/able/watermark.vue"),
            meta: {
                requiresAuth: true, //有一些页面是否登录才能进去
                name: "水印",
            },
        },
            {
                path: "/countTo",
                name: "countTo",
                component: () => import("../views/able/countTo.vue"),
                meta: {
                    requiresAuth: true, //有一些页面是否登录才能进去
                    name: "数字动画",
                },
            },
            {
                path: "/batchImport",
                name: "batchImport",
                component: () => import("../views/able/batchImport.vue"),
                meta: {
                    requiresAuth: true,
                    name: "图片上传",
                },
            },
            {
                path: "/fileImport",
                name: "fileImport",
                component: () => import("../views/able/fileImport.vue"),
                meta: {
                    requiresAuth: true,
                    name: "文件上传",
                },
            },
            {
                path: "/Filepreview",
                name: "Filepreview",
                component: () => import("../views/able/Filepreview.vue"),
                meta: {
                    requiresAuth: true,
                    name: "文件预览",
                },
            },
            {
                path: "/wangEditor",
                name: "wangEditor",
                component: () => import("../views/able/wangEditor.vue"),
                meta: {
                    requiresAuth: true,
                    name: "富文本编辑器",
                },
            },
            {
                path: "/markdown",
                name: "markdown",
                component: () => import("../views/able/markdown.vue"),
                meta: {
                    requiresAuth: true,
                    name: "markdown",
                },
            },
            {
                path: "/strength",
                name: "strength",
                component: () => import("../views/able/strength.vue"),
                meta: {
                    requiresAuth: true,
                    name: "密码强度",
                },
            },
            {
                path: "/markmap",
                name: "markmap",
                component: () => import("../views/able/markmap.vue"),
                meta: {
                    requiresAuth: true,
                    name: "思维导图",
                },
            },
            {
                path: "/jsmind",
                name: "jsmind",
                component: () => import("../views/able/jsmind.vue"),
                meta: {
                    requiresAuth: true,
                    name: "可编辑的思维导图",
                },
            },
            {
                path: "/validation",
                name: "validation",
                component: () => import("../views/able/validation.vue"),
                meta: {
                    requiresAuth: true,
                    name: "验证组件",
                },
            },
            {
                path: "/guide",
                name: "guide",
                component: () => import("../views/able/guide.vue"),
                meta: {
                    requiresAuth: true,
                    name: "引导页",
                },
            },
            {
                path: "/embedded",
                name: "embedded",
                component: () => import("../views/able/embedded.vue"),
                meta: {
                    requiresAuth: true,
                    name: "内嵌页",
                },
            },
        ],
    },
    {
        path: "/flow",
        name: "flow",
        component: Layout,
        meta: {
            name: "图形编辑器",
        },
        children: [{
            path: "/flowCat",
            name: "flowCat",
            component: () => import("../views/flow/flowCat.vue"),
            meta: {
                requiresAuth: true,
                name: "流程图",
            },
        },],
    },
    {
        path: "/echarts",
        name: "echarts",
        component: Layout,
        meta: {
            name: "图表",
        },
        children: [{
            path: "/baidumap",
            name: "baidumap",
            component: () => import("../views/echarts/map/baidumap.vue"),
            meta: {
                requiresAuth: true,
                name: "百度地图",
            },
        },
            {
                path: "/gaodemap",
                name: "gaodemap",
                component: () => import("../views/echarts/map/gaodemap.vue"),
                meta: {
                    requiresAuth: true,
                    name: "高德地图",
                },
            },
            {
                path: '/histogram',
                name: 'histogram',
                component: () => import('../views/echarts/histogram.vue'),
                mate: {
                    requiresAuth: true,
                    name: '柱状图'
                }
            }, {
                path: '/line',
                name: 'line',
                component: () => import('../views/echarts/line.vue'),
                meta: {
                    requiresAuth: true,
                    name: '折线图'
                }
            }, {
                path: '/radar',
                name: 'radar',
                component: () => import('../views/echarts/radar.vue'),
                meta: {
                    requiresAuth: true,
                    name: '雷达图'
                }
            }
        ],
    },
    {
        path: "/video",
        name: "video",
        component: Layout,
        meta: {
            name: "视频播放器",
        },
        children: [{
            path: "/video",
            name: "video",
            component: () => import("../views/video/index.vue"),
            meta: {
                requiresAuth: true,
                name: "视频播放器",
            },
        },],
    },
    {
        path: "/DataReport",
        name: "DataReport",
        component: Layout,
        meta: {
            name: "数据统计",
        },
        children: [{
            path: "/demo1",
            name: "demo1",
            component: () => import("../views/DataReport/demo1.vue"),
            meta: {
                requiresAuth: true,
                name: "项目一",
            },
        },],
    },
    {
        path: "/material",
        name: "material",
        component: Layout,
        meta: {
            name: "素材管理",
        },
        children: [{
            path: "/materialIndex",
            name: "materialIndex",
            component: () => import("../views/material/materialIndex.vue"),
            meta: {
                requiresAuth: true,
                name: "素材管理",
            },
        },],
    },
    {
        path: "/directives",
        name: "directives",
        component: Layout,
        meta: {
            name: "自定义指令",
        },
        children: [{
            path: "/Drag",
            name: "Drag",
            component: () => import("../views/directives/Drag.vue"),
            meta: {
                requiresAuth: true,
                name: "拖拽",
            },
        },
            {
                path: "/throttle",
                name: "throttle",
                component: () => import("../views/directives/throttle.vue"),
                meta: {
                    requiresAuth: true,
                    name: "节流",
                },
            },
            {
                path: "/copy",
                name: "copy",
                component: () => import("../views/directives/copy.vue"),
                meta: {
                    requiresAuth: true,
                    name: "复制",
                },
            },
            {
                path: "/debounceDirect",
                name: "debounceDirect",
                component: () => import("../views/directives/debounceDirect.vue"),
                meta: {
                    requiresAuth: true,
                    name: "防抖",
                },
            },
            {
                path: "/longPress",
                name: "longPress",
                component: () => import("../views/directives/longPress.vue"),
                meta: {
                    requiresAuth: true,
                    name: "长按指令",
                },
            },
        ],
    },
    */

    {
        path: "/users",
        name: "users",
        component: Layout,
        meta: {
            name: "个人中心",
        },
        children: [{
            path: "/user",
            name: "user",
            component: () => import("../views/users/index.vue"),
            meta: {
                requiresAuth: true,
                name: "关于我",
            },
        }]
    },
    {
        name: 500,
        path: "/500",
        component: () => import("../views/ErrorMessage/500.vue"),
    },
    {
        name: 404,
        path: "/:pathMatch(.*)*",   // 此处需特别注意置于最底部
        component: () => import("../views/ErrorMessage/404.vue"),
    },
];

const router = createRouter({
    base:'./dist',
    history: createWebHashHistory(),
    routes,
});

export default router;
