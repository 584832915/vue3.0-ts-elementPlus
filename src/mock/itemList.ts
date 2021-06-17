import Mock from 'mockjs'
let params =  Mock.mock({ // 数据池
    'userTableData|10': [{ // 图表过滤所需数据
        'name': '@cname',
        'date': '@date',
        'province': '@province',
        'city': '@city',
        'address': '@county(true) @ctitle() @natural(1000,9999) 号',
        'zip': '@zip'
    }]
})

export default {
    getItemList: () => ({
        code: 200,
        data: params
    })
}
