from flask import Flask, request
import json
from decision_tree_model import predict
import seaborn as sb
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/api/user/checkup', methods=['POST'])
def query_ml_model():
    data = request.get_json()
    
    return predict(data)


@app.route("/api/hc", methods=['GET'])
def hc():
    print("Health Check")
    return "yes im alive"


if __name__ == "__main__":
    app.run(port=3001) 
    # Do not change the port address!