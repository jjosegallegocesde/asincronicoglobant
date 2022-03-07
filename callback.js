function principal(callback) {

    setTimeout(function () {

        console.log("soy la principal")
        callback()

    }, 2000)

}

principal(function () {
    console.log("soy el callback")
})