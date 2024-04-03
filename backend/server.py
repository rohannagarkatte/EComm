from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/url',methods=["POST"])
def url():
    rate = request.json["Rate"]
    price=request.json["Price"]
    star=request.json["Star"]
    x=int(rate)+int(price)+int(star)
    # x=int(rate)+int(price)
    # y=int(star)
    return str(x)
if __name__ == '__main__':
    app.run(debug=True, port=5000)

