from type import *

def display_game():
    print("PokéMon types fight")

def display_match(play1, play2):
    print(f"\n{play1.give_name()} vs {play2.give_name()}   FIGHT!\n")

def display_tie(play1, play2):
    print(f"Tie between two {play1.give_name()}")

def display_victory(winner):
    print(f"{winner.give_name()} wins")