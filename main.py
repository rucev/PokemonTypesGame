from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return send_from_directory("./html/", "index.html")


@app.route("/html/<string:name>")
def html(name):
    return send_from_directory("./html/", name)


@app.route("/images/<string:name>")
def images(name):
    return send_from_directory("./html/images", name)


if __name__ == "__main__":
    app.run()
