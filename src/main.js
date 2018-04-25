/**
 ** ********************************************************
 ** @file main.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-25 15:56:15
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-25 16:09:27
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

 var data = {
    "发票标题": "平安科技",
    "发票代码": "dddddddd",
    "发票号码": "5555555",
    "开票日期": "11111",
    "机器编号": "4444444"
};

function initDetailsInfo(obj){
    const tempArray = [];
    Object.keys(obj).forEach((key, index) => {
    tempArray.push({ name: key, value: obj[key], id: index });
        console.log(index, key);
    });
    console.log(tempArray, 'temparr');
    return tempArray;
}

initDetailsInfo(data);
