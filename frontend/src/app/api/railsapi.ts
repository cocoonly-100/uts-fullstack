import { baseurl } from "../baseurl";
import { headers } from "next/headers"
async function getnim() {
    const header=await headers()
    console.log('nim header:',header.get('nim'))
    return header.get('nim')
}
async function rail(method,one,route,data?){
    const nim=await getnim()
    let index='/'
    if (one===true){
        index= `/${nim}`
    }
    const upper=method.toUpperCase()
    if (method==='get'){
        console.log('gay',method)
        return await fetch(`${baseurl}/${route}${index}`)
    }else{
    return await fetch(`${baseurl}/${route}${index}`, {
        method: upper,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({nim:nim,...data})
    })
}
}
export async function postr(route,data) {
    return rail('post',false,route,data)
}
export async function putr(route,data) {
    return rail('put',true,route,data)
}
export async function patchr(route,data) {
    return rail('patch',true,route,data)
}
export async function get1r(route,data?){
    return rail('get',true,route)
}
export async function getr(route,data?){
    return rail('get',false,route)
}
export async function deleter(route,data){
    return rail('delete',true,route,data)
}

