/**
 * transmitter=guest
 * 
 * receiver=house owner
 * 
 * play sound-led flashing
 * 
 * no sound-led door
 */
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) == 1) {
        radio.sendString("ring")
        basic.showIcon(IconNames.Yes)
    } else if (pins.analogReadPin(AnalogPin.P0) == 0) {
        basic.showIcon(IconNames.No)
        radio.sendString("x")
    }
})
