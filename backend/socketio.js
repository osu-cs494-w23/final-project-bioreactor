const Server = require('socket.io')

let io
const {Motor} = require("./motorWrapper");
const {Valve} = require("./valveWrapper");

const machineSpecification = require("./machine_specification.json")
const {machine, getAllStatuses} = require("./machine");

let debugOnStartup = true

function init(server) {
    console.log("server initializing")
    io = Server(server, {
        cors: {
            origins: 'localhost'
        }
    })

    io.on('connection', (socket) => {
        console.log("connection initialized by id: ", socket.id)
        socket.on('getMachineSpec', (callback) => {
            checkCallback(callback, socket.id, "getMachineSpec")
            callback({
                "status": "ok",
                "machineSpec": machineSpecification,
            })
        })
        socket.on('getAllStatuses', (callback) => {
            checkCallback(callback, socket.id, "getAllStatuses")
            // let returningThingie = Object.fromEntries(Object.values(devices).map(device => [device.name, device.allStats]))
            let returningThingie = getAllStatuses()
            callback({
                "status": "ok",
                "devices": returningThingie
            })
        })

        socket.on('setMotorSpeed', (jarName, deviceName, newSpeed, callback) => {
            checkCallback(callback, socket.id, "setMotorSpeed")

            if (devices[deviceName] === undefined) {
                callback({
                    "status": "error",
                    "errorMessage": "device not found"
                })
                return
            }
            if (!devices[deviceName] instanceof Motor) {
                callback({
                    "status": "error",
                    "errorMessage": "device not a motor"
                })
                return
            }
            devices[deviceName].Speed = newSpeed
            console.log("received new speed: ", newSpeed)
            callback({
                "status": "ok",
                "newSpeed": newSpeed
            })
        })
        socket.on('toggleValve', (deviceName, state, callback) => {
            checkCallback(callback, socket.id, "toggleValve")
            if (devices[deviceName] === undefined) {
                callback({
                    "status": "error",
                    "errorMessage": "device not found"
                })
                return
            }
            if (!devices[deviceName] instanceof Valve) {
                callback({
                    "status": "error",
                    "errorMessage": "device not a valve"
                })
                return
            }
            if (state) {
                devices[deviceName].open()
            } else {
                devices[deviceName].close()
            }
            console.log("toggled valve to: ", state)
            callback({
                "status": "ok",
                "state": state
            })
        })

        socket.on('loadRecipe', (newRecipe, jarName, callback) => {
            checkCallback(callback, socket.id, "loadRecipe")
            if( !machine["finalJars"].has(jarName)){
                callback({
                    "status": "error",
                    "errorMessage": "Jar not found"
                })
                return
            }

            machine["finalJars"].get(jarName).recipe = newRecipe
            callback({
                "status": "ok"
            })
            console.log("machine with recipe loaded: ", machine)
        })

        socket.on('startRecipe', (jarName, callback) => {
            checkCallback(callback, socket.id, "startRecipe")
            if(!machine["finalJars"].has(jarName)){
                callback({
                    "status": "error",
                    "errorMessage": "Jar not found"
                })
                return
            }
            let currentJar = machine["finalJars"].get(jarName)
            if(currentJar.recipe === null || currentJar.recipe === undefined){
                callback({
                    "status": "error",
                    "errorMessage": "Recipe not loaded"
                })
                return
            }

            currentJar.startRecipe()
            callback({
                "status": "ok"
            })
        })

        socket.on('pauseRecipe', (jarName, callback) => {
            checkCallback(callback, socket.id, "pauseRecipe")
            if(!machine["finalJars"].has(jarName)){
                callback({
                    "status": "error",
                    "errorMessage": "Jar not found"
                })
                return
            }
            let currentJar = machine["finalJars"].get(jarName)
            if(currentJar.recipe === null || currentJar.recipe === undefined){
                callback({
                    "status": "error",
                    "errorMessage": "Recipe not loaded"
                })
                return
            }
            if(currentJar.state !== "running"){
                callback({
                    "status": "error",
                    "errorMessage": "Recipe not running"
                })
            }
            currentJar.pauseRecipe()
            callback({
                "status": "ok"
            })
        })
    })
}

function checkCallback(callback, socketID, functionName) {
    if (typeof callback !== 'function') {
        console.log(socketID + " triggered " + functionName + " without providing a callback")
        return (_) => {
        }
    } else return callback
}

module.exports = {
    init: init
}