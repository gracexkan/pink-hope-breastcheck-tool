from pymongo import MongoClient
import datetime
CLUSTER=""
client = MongoClient(CLUSTER)

print(client.list_database_names())
db = client.get_database('test')

schema = {
    "google_id": "1",
    "name": "Jane Doe",
    "age": 25,
    "cycle_length": 28,
    "days_period_tracked": [],
    "days_self_tracked": [datetime.datetime.now(), datetime.datetime.now()], 
}

users = db.users

# result = users.insert_one(schema) datetime.datetime.now(), datetime.datetime.now()

# result = todos.find_one({})