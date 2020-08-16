import instance from './ajax'

// 请求删除图片
export const reqRemoveImg = (name) => instance.post('/img/delete', { name })
