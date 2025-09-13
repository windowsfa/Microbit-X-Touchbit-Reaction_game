let Random = 0
let Time = 0
basic.forever(function () {
    Random = randint(1, 4)
    if (Random == 1) {
        Time = timeanddate.secondsSinceReset()
        touchbit.setLight(touchbit.TouchPad.a, 1)
    } else if (Random == 2) {
        Time = timeanddate.secondsSinceReset()
        touchbit.setLight(touchbit.TouchPad.b, 1)
    } else if (Random == 3) {
        Time = timeanddate.secondsSinceReset()
        touchbit.setLight(touchbit.TouchPad.c, 1)
    } else {
        Time = timeanddate.secondsSinceReset()
        touchbit.setLight(touchbit.TouchPad.d, 1)
    }
})
