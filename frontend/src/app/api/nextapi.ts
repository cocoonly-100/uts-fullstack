export async function apihelper(method,route,data?){
    const upper=method.toUpperCase()
    console.log(`api/${route}`)
    if (method==='get'){
        return await fetch(`api/${route}`)
    }else{
    return await fetch(`/api/${route}`, {
            method: upper,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }
}