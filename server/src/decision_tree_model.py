 
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sb
import os
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

df = pd.read_csv('./server/src/data.csv')

# Cleaning data
df.isna().sum()
df = df.dropna(axis=1)



labelencoder_Y = LabelEncoder()
df[df.columns[1]] = newvals = labelencoder_Y.fit_transform(df.iloc[:, 1].values)
list_of_characteristics = ['id', 
                           'diagnosis',
                           'radius_mean',
                           'smoothness_mean',
                           'concave points_mean',
                           'symmetry_mean',
                           'radius_se',
                           'smoothness_se',
                           'concave points_se',
                           'symmetry_se',
                           ]



dropped_cols = [col for col in df.columns if col not in list_of_characteristics]

df.drop([_ for _ in df.head().columns if _ not in list_of_characteristics], axis=1, inplace=True)
df.columns = ['id', 
            'diagnosis',
            'radius_mean',
            'smoothness_mean',
            'concave_points_mean',
            'symmetry_mean',
            'radius_se',
            'smoothness_se',
            'concave_points_se',
            'symmetry_se',
            ]

# Create idv and dv
x = df.iloc[:, 2:10].values # idv from the characteristics to last index  
y = df.iloc[:, 1].values # dv diagnosis for malignant or benign

# Splitting (0.75, 0.25) -> (Training, Testing)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25, random_state=0)


# Feature scaling
from sklearn.preprocessing import StandardScaler

sc = StandardScaler()
x_train = sc.fit_transform(x_train)
x_test = sc.fit_transform(x_test)



def model(x_train, y_train):
    #LR
    from sklearn.linear_model import LogisticRegression
    lg = LogisticRegression(random_state=0)
    lg.fit(x_train, y_train)
    
    #DT
    from sklearn.tree import DecisionTreeClassifier
    t = DecisionTreeClassifier(criterion='entropy', random_state=0)
    t.fit(x_train, y_train)
    
    #RF
    from sklearn.ensemble import RandomForestClassifier
    rf = RandomForestClassifier(n_estimators=10, criterion='entropy', random_state=0)
    rf.fit(x_train, y_train)
    return lg, t, rf

models = model(x_train, y_train)

# Decided to use decision tree
# Example of patient with benign cancer
data = {
    'radius_mean': [7.76],
    'smoothness_mean': [0.05263],
    'concave_points_mean': [0.0],
    'symmetry_mean': [0.1587],
    'radius_se': [0.3857],
    'concave_points_se': [0.007],
    'smoothness_se': [0.007],
    'symmetry_se': [0.02],
}

# Example of patient with malignant cancer
# data = { 
#     'radius_mean': [21.56],
#     'smoothness_mean': [0.111],
#     'concave_points_mean': [0.13890],
#     'symmetry_mean': [0.1726],
#     'radius_se': [0.01],
#     'concave_points_se': [0.02],
#     'smoothness_se': [0.01],
#     'symmetry_se': [0.03],
# }

# # Example 
# data = pd.DataFrame(data)
# data = data.iloc[:, 0:8].values
# data = sc.transform(data)

# # return {'probability' : models[2].predict_proba(data)}

def predict(data):
    data = pd.DataFrame(data)
    data = data.iloc[:, 0:8].values
    data = sc.transform(data)
    return {'should_get_checked' : models[2].predict(data).tolist()[0]}


print(predict(data))