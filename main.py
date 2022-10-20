from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)



@app.route("/")
def index():
    return send_from_directory("./html/","index.html")

@app.route("/choices")
def choices():
    return send_from_directory("./html/","choices.html")

@app.route("/match")
def match():
    return send_from_directory("./html/","match.html")

@app.route("/wins")
def wins():
    return send_from_directory("./html/","wins.html")

if __name__ == "__main__":
    app.run()


