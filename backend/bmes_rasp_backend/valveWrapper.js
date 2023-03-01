

class Valve {
    constructor(pin, name, debug) {
        this.pinCode = pin
        this.opened = false
        this.debug = debug
        this.name = name

        if (debug === false) {
            const raspi = require('raspi');
            const gpio = require('raspi-gpio');
            raspi.init(() => {
                this.pin = new gpio.DigitalOutput(pin);
                this.opened = this.pin.value
                console.log("valve on pin", pin, "initialized ")
            })
        }
    }

    open() {
        this.opened = true
        if(!this.debug)
            this.pin.write(gpio.HIGH)
    }

    close() {
        this.opened = false
        if(!this.debug)
            this.pin.write(gpio.LOW)
    }
    get state() {
        if(this.debug)
            return this.opened
        return this.pin.value
    }

    get allStats(){
        return {
            "pin": this.pinCode,
            "state": this.opened,
            "debug": this.debug,
            "name": this.name,
            "type": "valve"
        }
    }
}

module.exports = {
    Valve: Valve
}