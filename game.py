from type import *
from player_input import *
from display import *

def run_game():
    keep_playing = True
    while keep_playing is True:
        display_game()
        user_play = get_user_play()
        computer_play = random_play()
        display_match(user_play, computer_play)
        winner = get_winner(user_play, computer_play)
        if winner == None:
            display_tie(user_play, computer_play)
        else:
            display_victory(winner)
        keep_playing = another_match()


def another_match():
    valid_option = False
    while not valid_option:
        try:
            print("\nLooking for another match?\n 1. Sure\n 2. Nah\n")
            user_play: int = int(input(" "))
            if user_play > 3 or user_play < 1:
                raise Exception()
            else:
                valid_option = True
                keep_playing = False
                if user_play == 1:
                    keep_playing = True
                    return keep_playing
                else:
                    print("\nThat's not being the very best...")
                    return keep_playing
        
        except:
            print("\nPlease, choose a valid number option!\n")


def random_play():
    return choice([Water(), Fire(), Plant(), Ice(), Rock()])

def get_winner(play1, play2):
    result = play1.compare(play2)
    if result == Result.WINS:
        winner = play1
    elif result == Result.LOSES:
        winner = play2
    else:
        winner = None
    return winner
