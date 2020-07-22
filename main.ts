let index = 0
let bri = [255, 150, 50, 10, 0]
let x: number[] = []
for (let index2 = 0; index2 <= 4; index2++) {
    x.push(0)
}
let dt = 150
let t = input.runningTime()
while (true) {
    if (input.runningTime() - t >= dt) {
        t = input.runningTime()
        for (let y = 0; y <= 4; y++) {
            for (let index3 = 0; index3 <= x[y]; index3++) {
                if (index3 <= 4) {
                    led.plotBrightness(y, x[y] - index3, bri[index3])
                } else {
                    led.plotBrightness(y, x[y] - index3, 0)
                }
            }
            if (x[y] <= 8) {
                x[y] = x[y] + 1
            } else if (randint(0, 101) > 80) {
                x[y] = 0
            }
        }
    } else {
        basic.pause(dt - (input.runningTime() - t))
    }
}
