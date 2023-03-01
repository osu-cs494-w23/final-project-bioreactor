const Server = require('socket.io')

let io
const {Motor} = require("./motorWrapper");
const {Valve} = require("./valveWrapper");

let debugOnStartup = true

let devices = {
    "motor1": new Motor('GPIO21', "motor1", debugOnStartup),
    "valve1": new Valve('GPIO16', "valve1", debugOnStartup)
}


function init(server) {
    console.log("server initializing")
    io = Server(server, {
        cors: {
            origins: 'localhost'
        }
    })

    io.on('connection', (socket) => {
        console.log("connection initialized by id: ", socket.id)
        socket.on('getAllStatuses', (callback)=>{
            let returningThingie = Object.fromEntries(Object.values(devices).map(device=>[device.name, device.allStats]))
            callback({
                "status": "ok",
                "devices": returningThingie
            })
        })
        socket.on('setMotorSpeed', (deviceName, newSpeed, callback) => {
            checkCallback(callback, socket.id, "setMotorSpeed")
            if(devices[deviceName] === undefined){
                callback({
                    "status": "error",
                    "errorMessage": "device not found"
                })
                return
            }
            if(!devices[deviceName] instanceof Motor){
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
            if(devices[deviceName] === undefined){
                callback({
                    "status": "error",
                    "errorMessage": "device not found"
                })
                return
            }
            if(!devices[deviceName] instanceof Valve){
                callback({
                    "status": "error",
                    "errorMessage": "device not a valve"
                })
                return
            }
            if(state){
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
    })
}

function checkCallback(callback, socketID, functionName){
    if(typeof callback !== 'function') {
        console.log(socketID + " triggered " + functionName + " without providing a callback")
        return (_) => {
        }
    }
    else return callback
}

module.exports = {
    init: init
}