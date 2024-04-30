// 把数据提交到store
import $store from '../store/index'
import {saveInfo, addInfo} from "../api/modules";
import {ElMessage} from "element-plus";

const setItem = (store, item) => {
    store.commit('thesis/setThesis', item)
}

// 跳转路由
// 添加
export const addItem = ($router) => {
    $router.push({
        path: '/thesisAdd',
    }).then(r => console.log(r))
}
// 查看
export const ItemView = ($router, item) => {
    console.log(item)
    $router.push({
        path: '/thesisDetail',
        state: item,
    })
    setItem($store, item)
}
//保存
export const ItemSave = ($router, item) => {
    setItem($store, item)
//    发送请求
    console.log($router.currentRoute.value.path)
    const path = $router.currentRoute.value.path
    if (path === '/thesisEdit') {
        saveInfo(item).then(res => {
            if (res.data.code === '200') {
                ElMessage({
                    message: "保存成功",
                    type: "success",
                })
            } else {
                ElMessage({
                    message: "保存失败",
                    type: "error",
                })
            }
        })
    }else {
        addInfo(item).then(res => {
            if (res.data.code === '200') {
                ElMessage({
                    message: "保存成功",
                    type: "success",
                })
            } else {
                ElMessage({
                    message: "保存失败",
                    type: "error",
                })
            }
        })
    }
}
// 编辑
export const editorClick = ($router, item) => {
    console.log(item)
    $router.push({
        path: '/thesisEdit',
        state: item,
    }).then(r => console.log(r))
    setItem($store, item)
}
// 删除
export const DeleteItem = ($router, item) => {
    console.log(item)
    $router.push({
        path: '/thesisDelete',
        state: item,
    }).then(r => console.log(r))
    setItem($store, item)
}
