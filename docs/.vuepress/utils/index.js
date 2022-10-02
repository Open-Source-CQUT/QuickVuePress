const fs = require('fs');

module.exports = {
    genderSidebar,
    generateSideGroup
};


/**
 * 生成单侧边栏组信息
 * @param root
 * @param path
 * @returns {*[]}
 */
function genderSidebar(root, path) {

    if (!fs.existsSync(root + path)) {
        console.error("folder is not exist!")
        return
    }

    let children = []

    let files = fs.readdirSync(root + path);

    files.forEach((value, index, array) => {
        if (value.indexOf("README") !== -1){
           return
        }
        let vPath = path + value.slice(0,value.lastIndexOf('.'))

        children.push(vPath)
    })

    const reg = /[^0-9]/ig

    children.sort((a,b)=>{
         a = Number.parseInt(a.replace(reg,''));
        b = Number.parseInt(b.replace(reg,''));

        return a - b;
    })
    return children;
}

/**
 * 跟组侧边栏组信息生成多个侧边栏组
 * @param root 根目录
 * @param sideList 侧边栏组信息
 * @returns {*}
 */
function generateSideGroup(root,sideList){

    const children = "children";

    sideList.forEach(side=>{
        side[children] = genderSidebar(root,side.path);
    })

    return sideList;
}