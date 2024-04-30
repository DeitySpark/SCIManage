// 引入mockjs
import Mock from "mockjs";
import {options} from "../views/home/options";

const Random = Mock.Random;

let menuList = [
    {
        title: "首页",
        url: "/home",
        icon: "HomeFilled",
    },
    {
        title: "论文列表",
        url: "/thesis",
        icon: "Menu",
        children: [
            {
                title: "论文列表",
                url: "/thesisList",
                icon: "Menu",
            },
            {
                title: "论文详情",
                url: "/thesisDetail",
                icon: "Menu",
            },
            {
                title: "论文编辑",
                url: "/thesisEdit",
                icon: "Menu",
            }, {
                title: "论文添加",
                url: "/thesisAdd",
                icon: "Menu",
            },
        ],
    },
    /*
    {
        title: "页面管理",
        url: "/page",
        icon: "Checked",
        children: [
            {
                title: "表单页",
                url: "/form",
                icon: "Checked",
                children: [
                    {
                        title: "基础表单",
                        url: "/baseForm",
                        icon: "Menu",
                    },
                    {
                        url: "/stepFrom",
                        title: "步骤表单",
                        icon: "Menu",
                    },
                    {
                        url: "/advancedForm",
                        title: "高级表单",
                        icon: "Menu",
                    },
                ],
            },
            {
                url: "/system",
                title: "表格管理",
                icon: "Grid",
                children: [
                    {
                        url: "/Department",
                        title: "基础表格",
                        icon: "Menu",
                    },
                    {
                        url: "/UserList",
                        title: "内嵌表格",
                        icon: "Menu",
                    },
                    {
                        url: "/RoleList",
                        title: "滑动加载",
                        icon: "Menu",
                    },
                    {
                        url: "/MenuList",
                        title: "可编辑Table",
                        icon: "Menu",
                    },
                    {
                        url: "/importExcel",
                        title: "导入Excel",
                        icon: "Menu",
                    },
                ],
            },
            {
                url: "/goods",
                title: "列表页",
                icon: "List",
                children: [
                    {
                        url: "/goodCategory",
                        title: "基础列表",
                        icon: "Menu",
                    },
                    {
                        url: "/cardList",
                        title: "卡片列表",
                        icon: "Menu",
                    },
                    {
                        url: "/searchList",
                        title: "搜索列表",
                        icon: "Menu",
                    },
                ],
            },
            {
                url: "/ErrorMessage",
                title: "异常页面",
                icon: "WarningFilled",
                children: [
                    {
                        url: "/404",
                        title: "404",
                        icon: "Menu",
                    },
                    {
                        url: "/500",
                        title: "500",
                        icon: "Menu",
                    },
                ],
            },
        ],
    },

    {
        title: "图形图表",
        url: "/echarts",
        icon: "Histogram",
        children: [
            {
                title: "地图",
                url: "/echarts/map",
                icon: "Menu",
                children: [
                    {
                        url: "/baidumap",
                        title: "百度地图",
                        icon: "Menu",
                    },
                ],
            },
            {
                title: "雷达图",
                url: "/radar",
                icon: "Menu",
            },
            {
                title: "柱状图",
                url: "/histogram",
                icon: "Menu",
            },
            {
                title: "折线图",
                url: "/line",
                icon: "Menu",
            },
        ],
    },

    {
        url: "/able",
        title: "功能",
        icon: "HelpFilled",
        children: [
            {
                url: "/watermark",
                title: "水印",
                icon: "Menu",
            },
            {
                url: "/countTo",
                title: "数字动画",
                icon: "Menu",
            },
            {
                url: "/batchImport",
                title: "图片上传",
                icon: "Menu",
            },
            {
                url: "/markmap",
                title: "思维导图",
                icon: "Menu",
            },
            {
                url: "/jsmind",
                title: "可编辑的思维导图",
                icon: "Menu",
            },
            {
                url: "/fileImport",
                title: "文件上传",
                icon: "Menu",
            },
            {
                url: "/Filepreview",
                title: "文件预览",
                icon: "Menu",
            },
            {
                url: "markdown",
                icon: "Platform",
                title: "编辑器",
                children: [
                    {
                        url: "/wangEditor",
                        title: "富文本编辑器",
                        icon: "Menu",
                    },
                    {
                        url: "/markdown",
                        title: "markdown",
                        icon: "Menu",
                    },
                ],
            },
            {
                url: "/strength",
                title: "密码强度",
                icon: "Menu",
            },
            {
                url: "/validation",
                title: "验证组件",
                icon: "Menu",
            },
            {
                url: "/guide",
                title: "引导页",
                icon: "Menu",
            },
            {
                url: "/embedded",
                title: "内嵌页",
                icon: "Menu",
            },
        ],
    },
    {
        url: "/directives",
        title: "自定义指令",
        icon: "Stamp",
        children: [
            {
                url: "/copy",
                title: "复制",
                icon: "Menu",
            },
            {
                url: "/Drag",
                title: "拖拽",
                icon: "Menu",
            },
            {
                url: "/debounceDirect",
                title: "防抖指令",
                icon: "Menu",
            },
            {
                url: "/throttle",
                title: "节流指令",
                icon: "Menu",
            },
        ],
    },
    {
        url: "/flow",
        title: "图形编辑器",
        icon: "BrushFilled",
        children: [
            {
                url: "/flowCat",
                title: "流程图",
                icon: "Menu",
            },
        ],
    },
    {
        url: "/video",
        title: "视频播放器",
        icon: "VideoCameraFilled",
        //
        children: [
            {
                url: "/video",
                title: "视频播放器",
                icon: "Menu",
            },
        ],
    },
    {
        url: "/DataReport",
        title: "数据统计",
        icon: "TrendCharts",

        children: [
            {
                url: "/demo1",
                title: "项目一",
                icon: "Menu",
            },
        ],
    },
    {
        url: "/material",
        title: "素材中心",
        icon: "PictureFilled",
        children: [{
            url: "/materialIndex",
            title: "素材管理",
            icon: "Menu",
        },],
    },
    */
    {
        url: "/user",
        title: "个人中心",
        icon: "Avatar",
        children: [
            {
                url: "/user",
                title: "关于我",
                icon: "Menu",
            },
        ],
    },
];

// // 导出一个函数LoginInfo，用于接收post参数
// export const LoginInfo = (options) => {
//   // 打印接收到的post参数
//   console.log(options, "接收post参数");
//   // 将接收到的post参数转换为对象
//   const { username, password } = JSON.parse(options.body);
//   // 判断用户名和密码是否正确
//   if (username === "admin" && password !== "123456") {
//     // 如果错误，返回错误信息
//     return {
//       code: "-200",
//       data: {
//         message: "用户不存在",
//       },
//     };
//   } else {
//     // 如果正确，返回用户信息
//     return {
//       code: "200",
//       data: {
//         user_id: Random.id(),
//         name: Random.cname(),
//         token: Random.guid(),
//         image:
//           "https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1660064400&t=6fe6057370cbe369654ff2e132d02a37",
//       },
//     };
//   }
// };

export const getMenuList = (options) => {
    const obj = JSON.parse(options.body);
    return {
        code: 200,
        data: {
            menuList: menuList,
        },
    };
};

// 用户列表
let userList = [];
for (let index = 0; index < 50; index++) {
    let obj = {
        id: Random.id(),
        username: Random.cname(),
        email: Random.email(),
        date: Random.date(),
        address: Random.city(true),
        content: Random.csentence(),
    };
    userList.push(obj);
}
const param2Obj = (url) => {
    let obj = JSON.parse(url);
    let page = obj.page;
    console.log(page);
    return page;
};

export const UserList = (options) => {
    const currentPage = param2Obj(options.body);
    let cameraData = userList.filter((item, index) => {
        return index >= (currentPage - 1) * 10 && index < currentPage * 10;
    });
    return {
        code: 200,
        data: {
            total: userList.length,
            userList: cameraData,
        },
    };
};

export const addUserList = (options) => {
    console.log("传过来的数据" + JSON.parse(options.body));
    let obj = JSON.parse(options.body);
    obj.id = Random.id();
    userList.unshift(obj); // 将前台返回来的数据，拼接到数组中。
    return {
        data: userList,
        id: obj.id,
    };
};

// 数据的修改操作
export const listUpdate = (options) => {
    let obj = JSON.parse(options.body);
    userList = userList.map((val) => {
        return val.id == obj.id ? obj : val;
    });
    return {
        data: userList,
    };
};

export const Newslist = (options) => {
    let obj = JSON.parse(options.body);
    let newList = [];
    for (let i = 0; i < 10; i++) {
        let item = {
            title: Random.csentence(5, 8), //  Random.csentence( min, max )
            notifyPic: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            notifyType: Random.integer(1, 3), //随机生成1-3的Integer
            isTop: Random.integer(1, 2), //随机生成1-2的Integer
            createUser: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            email: Random.email(),
            number: "$" + Random.integer(100, 5000) + ".00",
            createTime: Random.date() + " " + Random.time(),
            pay_state: "100" + Random.integer(1, 3),
        };
        newList.push(item);
    }
    return {
        data: newList,
    };
};
export const orderLists = (options) => {
    let obj = JSON.parse(options.body);
    let orderList = [];
    for (let i = 0; i < 60; i++) {
        let item = {
            goodsId: i,
            code: Random.guid(),
            title: Random.ctitle(4, 5),
            commodity: "10010" + i,
            goodsname: Random.cword(2, 6), //  Random.csentence( min, max )
            brand: Random.cword(2, 4),
            sku: "1ml", // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            inventory: Random.integer(10, 100),
            number: Random.integer(100, 5000), //100到5000的随机整数
            costPrice: Random.integer(10, 20),
            amount: Random.integer(100, 200), //100到5000的随机整数
            itemEdit: false,
            ItemData: [
                {
                    address: Random.city(true),
                    email: Random.email(),
                    state: Random.boolean(),
                    salenumber: Random.integer(10, 100),
                    receivable: Random.integer(10, 100),
                },
            ],
        };
        orderList.push(item);
    }

    return {
        total: 60,
        data: obj.size == 10 ? orderList.slice(obj.size * obj.page - obj.size, obj.size * obj.page) : orderList,
    };
};

export const homeList = (options) => {
    let homeList = [];
    for (let index = 0; index < 10; index++) {
        let obj = {
            name: "限时秒杀",
            title_id: Random.integer(0, 10) + "id",
            type: Random.boolean(),
            number: Random.integer(10, 100),
            order_number: Random.integer(100, 1000),
            GWV_number: Random.integer(100, 5000),
            state: Random.boolean(),
        };
        homeList.push(obj);
    }

    return {
        data: homeList,
    };
};

export const noticeLists = (options) => {
    let noticeLists = [];
    for (let index = 0; index < 10; index++) {
        let item = {
            text: Random.csentence(),
        };
        noticeLists.push(item);
    }
    return {
        data: noticeLists,
    };
};

export const cardlists = (options) => {
    let obj = JSON.parse(options.body);
    let cardlists = [];
    for (let i = 0; i < 50; i++) {
        let item = {
            title: Random.csentence(5, 8), //  Random.csentence( min, max )
            user_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            email: Random.email(),
            number: "$" + Random.integer(100, 5000) + ".00",
            date: Random.date(),
            pay_state: "100" + Random.integer(1, 3),
            content: Random.csentence(),
        };
        cardlists.push(item);
    }
    return {
        data: cardlists,
    };
};
