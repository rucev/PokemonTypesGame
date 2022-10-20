from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)


@app.route("/")
def frotend_index():
    return send_from_directory("./html/", "index.html")


@app.route("/html/<string:name>")
def frotend_html(name):
    return send_from_directory("./html/", name)


@app.route("/images/<string:name>")
def frotend_images(name):
    return send_from_directory("./html/images", name)


@app.route("/backend/match/<string:name>/choices")
def backend_match(name):
    choices = {
        "match_name": name,
        "choices": [
            {
                "player": "Flors",
                "choice": "water"
            },
            {
                "player": "Maria",
                "choice": "fire"
            }
        ]
    }
    return jsonify(choices)


if __name__ == "__main__":
    app.run()
