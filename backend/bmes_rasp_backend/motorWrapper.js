

class Motor{
    constructor(pin, name, debug) {
        this.pinCode = pin
        this.speed = 0
        this.debug = debug
        this.name = name

        if(debug === false) {
            const raspi = require('raspi');
            const pwm = require('raspi-soft-pwm');
            raspi.init(() => {
                this.pin = new pwm.SoftPWM({pin: pin, frequency: 200});
                console.log("motor on pin", pin, "has been initialized")
            })
        }
    }

    set Speed(speed){
        this.speed = speed
        if(!this.debug)
            this.pin.write(speed)
    }

    get allStats(){
        return {
            "pin": this.pinCode,
            "speed": this.speed,
            "debug": this.debug,
            "name": this.name,
            "type": "motor"
        }
    }
}

module.exports={
    Motor: Motor
}