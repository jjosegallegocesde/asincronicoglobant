function principal() {

    let promesa = new Promise(function (resolve, reject) {
        setTimeout(function () {

            console.log("soy la principal")
            resolve("termine")

        }, 2000)
    })

    return promesa
}

async function callback() {
    try {
        await principal()
        console.log("soy el callback")
    } catch (error) {
        console.log("error")
    }
}

callback()

