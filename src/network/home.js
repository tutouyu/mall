import {request} from './request'
export function getmultidata(){
       return request({
           url:'/home/multidata'
       })
}
export function gethomegoods(page,type){
    return request({
        url:'/home/data',
        params:{
           type,
           page
        }
    })
}