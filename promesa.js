function principal() {

    let promesa = new Promise(function (resolve, reject) {
        setTimeout(function () {

            console.log("soy la principal")
            if (true) {
                resolve("soy el callback")

            } else {
                reject("Falle")
            }


        }, 2000)
    })

    return promesa


}

principal()
    .then(function (res) {
        console.log(res)
    })
