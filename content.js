var loopCheckTime = 1000 //time in ms
var loopSearchTime = 300 //time in ms
var loopSearch
var loopCheck

async function check(){
    loopCheck = setInterval(async () => {
        let params = {
            run: false
        }
        let data = await local_get(params)

        if (data.run == true){
            clearInterval(loopCheck)
            console.log("\' giorgio: y la salarda papi ?")
            loopSearch = setInterval(async () => {
                let data = await local_get(params)
                if (data.run == false){
                    clearInterval(loopSearch)
                    console.log("\' giorgio: llego la poli.")
                    check()
                }
                needBackupLoop()
            }, loopSearchTime);
        }
    }, loopCheckTime);
}

async function needBackupLoop(){
    let btnAccept = document.getElementsByClassName("btn btn-success btn-success-default accept-btn")
    if (btnAccept.length != 0){
        console.log("\' giorgio: uhhh litooo")
        console.log("lobby id: "+btnAccept[0].dataset.id)
        console.log(document.querySelector("#completePlayerTemplate").innerHTML)
        btnAccept[0].id = 'giorgio'
        clearInterval(loopSearch)
        document.getElementById('giorgio').click();
        document.querySelector("#completePlayerModal > div > div.buttons > button.sm-button-accept.btn.btn-success").click()
    }   
}

check()