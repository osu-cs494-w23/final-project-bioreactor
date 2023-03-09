class Sensor{
    pin
    value
    constructor(pin, name, jarName, debug) {
        this.pinCode = pin
        this.name = name
        this.jarName = jarName
        this.debug = debug

        if(debug === false) {
            const raspi = require('raspi');
            const pwm = require('raspi-soft-pwm');
            raspi.init(() => {
                this.pin = new pwm.SoftPWM({pin: pin, frequency: 200});
                console.log("motor on pin", pin, "has been initialized")
            })
        }
    }

    set value(newValue){
        if(!this.debug)
            return
        this.value = newValue
    }

    get allStats(){
        return {
            "pin": this.pinCode,
            "value": this.value,
            "debug": this.debug,
            "name": this.name,
            "jarName": this.jarName,
            "type": "sensor"
        }
    }
}

module.exports = {
    Sensor: Sensor
}