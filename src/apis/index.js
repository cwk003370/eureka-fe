import union from 'lodash/union';
import userManage from './user-manage';
import axios from 'axios'
import qs from 'qs'
const modules = union([
    {
        module: 'userManage',
        name: '用户管理模块',
        list: userManage
    }
]);
const apis = {};
modules.forEach((module) => {
    if (Array.isArray(module.list)) {
        module.list.forEach((api) => {
            apis[`${module.module}_${api.method}`] = (config) => {
                const type = api.type && api.type.toLowerCase() === 'post'? 'post': 'get';
                const result = Object.assign(
                    {},
                    {
                        method: type,
                        url: api.path
                    },
                    config
                );
                return ajax.request(result);
            };
        });
    }
});

export default apis;
