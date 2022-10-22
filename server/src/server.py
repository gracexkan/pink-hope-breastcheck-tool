from flask import Flask, request
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/api/hc", methods=['GET'])
def hc():
    print("Health Check")
    return "yes im alive"


if __name__ == "__main__":
    app.run(port=3001) 
    # Do not change the port address!