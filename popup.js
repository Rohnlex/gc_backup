async function getData(){
    let params = {
        //* Default values to return if none are set.
        run: false
    }
    let data = await local_get(params)
    document.getElementById('cb_run').checked = data.run
}

async function setData(){
    let runState = document.getElementById('cb_run').checked
    let params = {
        run: runState
    }
    await local_set(params)
}

document.addEventListener('DOMContentLoaded', getData);
document.getElementById('cb_run').addEventListener('click', setData)
