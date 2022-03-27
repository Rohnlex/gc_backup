const local_get = (params) => {
    return new Promise(resolve => {
        chrome.storage.local.get(params, function(items){
            resolve(items)
        })
    })
}

const local_set = (params) => {
    return new Promise(resolve => {
        chrome.storage.local.set(params, status => { resolve(status) })
    })
}