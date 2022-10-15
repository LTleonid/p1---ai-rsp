BC = 0
PM = 1

def on_forever():
    global BC, PM
    if input.button_is_pressed(Button.A):
        BC = randint(1, 3)
        if PM == 1:
            basic.show_icon(IconNames.SMALL_SQUARE)
        elif PM == 2:
            basic.show_icon(IconNames.SCISSORS)
        elif PM == 3:
            basic.show_icon(IconNames.CHESSBOARD)
        if PM > 0:
            PM += -1
        else:
            PM = 3
    elif input.button_is_pressed(Button.B):
        if PM < 3:
            PM += 1
        else:
            PM = 1
        if PM == 1:
            basic.show_icon(IconNames.SMALL_SQUARE)
        elif PM == 2:
            basic.show_icon(IconNames.SCISSORS)
        elif PM == 3:
            basic.show_icon(IconNames.CHESSBOARD)
    if input.is_gesture(Gesture.LOGO_DOWN):
        if PM == 1 and BC == 1:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                # # # # #
                                . . . . .
            """)
        elif PM == 2 and BC == 2:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                # # # # #
                                . . . . .
            """)
        elif PM == 3 and BC == 3:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                # # # # #
                                . . . . .
            """)
        elif PM == 1 and BC == 3:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                . # # # .
                                # . . . #
            """)
        elif PM == 2 and BC == 3:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        elif PM == 1 and BC == 2:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        elif PM == 3 and BC == 2:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                . # # # .
                                # . . . #
            """)
        elif PM == 2 and BC == 1:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                . # # # .
                                # . . . #
            """)
        elif PM == 3 and BC == 1:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        control.reset()
basic.forever(on_forever)
