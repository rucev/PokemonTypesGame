from type import *
from random import choice

def get_user_play():
    user_choice = get_user_response()
    if user_choice == 1:
        return Fire()
    elif user_choice == 2:
        return Water()
    elif user_choice == 3:
        return Plant()
    elif user_choice == 4:
        return Ice()
    else:
        return Rock()
    

def get_user_response():
    valid_option = False
    while not valid_option:
        try:
            print("\nWhat do you want to play?\n 1. Fire\n 2. Water\n 3. Plant\n 4. Ice\n 5. Rock\n ")
            user_play: int = int(input(" "))
            if user_play > 5 or user_play < 1:
                raise Exception()
            else:
                valid_option = True
                return user_play

        except:
            print("\nPlease, choose a valid number option!\n")
