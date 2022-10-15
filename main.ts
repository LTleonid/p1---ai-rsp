let BC = 0
let PM = 1
game.setScore(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (PM == 1) {
            basic.showIcon(IconNames.SmallSquare)
        } else if (PM == 2) {
            basic.showIcon(IconNames.Scissors)
        } else if (PM == 3) {
            basic.showIcon(IconNames.Chessboard)
        }
        if (PM > 0) {
            PM += -1
        } else {
            PM = 3
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (PM < 3) {
            PM += 1
        } else {
            PM = 1
        }
        if (PM == 1) {
            basic.showIcon(IconNames.SmallSquare)
        } else if (PM == 2) {
            basic.showIcon(IconNames.Scissors)
        } else if (PM == 3) {
            basic.showIcon(IconNames.Chessboard)
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
        BC = randint(1, 3)
        if (PM == 1 && BC == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . . .
                # # # # #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                . # . . .
                . . # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # # .
                . . . . .
                `)
        } else if (PM == 2 && BC == 2) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . . .
                # # # # #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                . # . . .
                . . # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # # .
                . . . . .
                `)
        } else if (PM == 3 && BC == 3) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . . .
                # # # # #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                . # . . .
                . . # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # # .
                . . . . .
                `)
        } else if (PM == 1 && BC == 3) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                # . . # #
                # . # . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (PM == 2 && BC == 3) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . # . . .
                . # . # .
                . # . # .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                . # # . .
                . . # . .
                # # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # . # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            game.addScore(1)
        } else if (PM == 1 && BC == 2) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                . # # . .
                . . # . .
                # # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # . # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            game.addScore(1)
        } else if (PM == 3 && BC == 2) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                # . . # #
                # . # . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (PM == 2 && BC == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                # . . # #
                # . # . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (PM == 3 && BC == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                . # # . .
                . . # . .
                # # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # . # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            game.addScore(1)
        }
    }
})
