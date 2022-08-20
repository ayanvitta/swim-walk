input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        robotbit.Servo(robotbit.Servos.S7, 90)
        robotbit.Servo(robotbit.Servos.S3, 170)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S8, 90)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S4, 15)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S7, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S3, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S8, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S4, 180)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S5, 180)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S5, 0)
    basic.pause(1000)
})
basic.forever(function () {
	
})
