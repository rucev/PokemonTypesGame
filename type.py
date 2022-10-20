from enum import Enum

class Result(Enum):
    EQUAL = 0
    WINS = 1
    LOSES = 2


class Play(object):
    def give_name(self):
        pass

    def compare(self, otherPlay):
        pass

class Water(Play):
    def give_name(self):
        return "water"

    def compare(self, otherPlay):
        result = None
        if type(otherPlay) == Plant or Ice:
            result = Result.LOSES
        elif type(otherPlay) == Fire or Rock:
            result = Result.WINS
        else:
            result = Result.EQUAL
        return result
    

class Fire(Play):
    def give_name(self):
        return "fire"

    def compare(self, otherPlay):
        result = None
        if type(otherPlay) == Water or Rock:
            result = Result.LOSES
        elif type(otherPlay) == Plant or Ice:
            result = Result.WINS
        else:
            result = Result.EQUAL
        return result
    

class Plant(Play):
    def give_name(self):
        return "plant"

    def compare(self, otherPlay):
        result = None
        if type(otherPlay) == Fire or Ice:
            result = Result.LOSES
        elif type(otherPlay) == Water or Rock:
            result = Result.WINS
        else:
            result = Result.EQUAL
        return result


class Ice(Play):
    def give_name(self):
        return "ice"

    def compare(self, otherPlay):
        result = None
        if type(otherPlay) == Fire or Rock:
            result = Result.LOSES
        elif type(otherPlay) == Water or Plant:
            result = Result.WINS
        else:
            result = Result.EQUAL
        return result

class Rock(Play):
    def give_name(self):
        return "rock"

    def compare(self, otherPlay):
        result = None
        if type(otherPlay) == Plant or Water:
            result = Result.LOSES
        elif type(otherPlay) == Fire or Ice:
            result = Result.WINS
        else:
            result = Result.EQUAL
        return result