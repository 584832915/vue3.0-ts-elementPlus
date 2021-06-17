import Mock from 'mockjs';

import itemList from './itemList';

Mock.mock(/\/itemList\/getItemList/,'get',itemList.getItemList)