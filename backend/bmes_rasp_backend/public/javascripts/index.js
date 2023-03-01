let motorText
let motorSpeed
let valveToggleBtn
let valveToggle = false

const socket = io()

window.onload = ()=>{
    motorSpeed = document.getElementById("motorSpeed")
    motorText = document.getElementById("currentMotorValue")
    valveToggleBtn = document.getElementById("toggleBtn")
}

function submitMotorSpeed(){
    socket.emit('setMotorSpeed', motorSpeed.value/1000)
    motorText.textContent = "Current motor value: " + (motorSpeed.value/1000)
}

function changeValve(){
    valveToggle = !valveToggle
    socket.emit(valveToggle ? 'openValve' : 'closeValve')
    console.log("sending server ", valveToggle ? 'openValve' : 'closeValve')
    valveToggleBtn.textContent = valveToggle ? 'Close Valve' : 'Open Valve'
}

function fetchAllChanges(){
    socket.emit('getAllStatus', (allStatuses)=>{
        console.log(allStatuses)
    })
}

var intervalId = setInterval(function() {
    alert("Interval reached every 5s")
}, 5000);