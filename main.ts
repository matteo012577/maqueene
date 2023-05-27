input.onButtonPressed(Button.A, function () {
    ingesteldeSnelheid += 10
    radio.sendValue("snelheid", ingesteldeSnelheid)
})
input.onGesture(Gesture.TiltRight, function () {
    rechts = 2
    radio.sendValue("rechts", ingesteldeSnelheid)
})
input.onButtonPressed(Button.AB, function () {
    ingesteldeSnelheid = 0
    radio.sendValue("snelheid", ingesteldeSnelheid)
})
input.onButtonPressed(Button.B, function () {
    ingesteldeSnelheid += -10
    radio.sendValue("snelheid", ingesteldeSnelheid)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    if (name == "links") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value)
    } else if (name == "rechts") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    links = 1
    radio.sendValue("links", ingesteldeSnelheid)
})
let ingesteldeSnelheid = 0
let rechts = 0
let links = 0
radio.setGroup(1)
links = 0
rechts = 0
ingesteldeSnelheid = 0
