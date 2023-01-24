basic.showString("Hello World with Music!")
music.playMelody("C5 G B A F A C5 B ", 240)
if (true) {
    basic.showString("Music!")
    if (false) {
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            # . . . .
            # # # # #
            `)
    }
}
