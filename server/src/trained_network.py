#%% 
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sb

df = pd.read_csv('data.csv')


#%%
# Reading data

print("Training model from " + str(df.shape[0]) + " patients on " + str(df.shape[1]) + " features")
print(df.head().columns)
#%%
# Cleaning data
df.isna().sum()
df = df.dropna(axis=1)
df.shape

#%%
# Further inspection of data
# df['diagnosis'].value_counts()
# sb.countplot(df['diagnosis'], label ='count')

#%%
# Encoding categorical data
df.dtypes
from sklearn.preprocessing import LabelEncoder
labelencoder_Y = LabelEncoder()
df.iloc[:, 1] = labelencoder_Y.fit_transform(df.iloc[:, 1].values)
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
# print(dropped_cols)
# print(list_of_characteristics)
df.drop([_ for _ in df.head().columns if _ not in list_of_characteristics], axis=1, inplace=True)
# df.shape
df.head()
df.tail()
# df.drop(['fractal_dimension_worst'])
# %%
# Creating a pairplot

sb.pairplot(df.iloc[:, 1:10], hue='diagnosis')
# %%
# Create Correlation of colms
df.iloc[:, 1:7].corr()
plt.figure(figsize=(10,10))
sb.heatmap(df.iloc[:, 1:10].corr(), annot=True, fmt='.0%')

# %%
# Create idv and dv
x = df.iloc[:, 2:10].values # idv from the characteristics to last index  
y = df.iloc[:, 1].values # dv diagnosis for malignant or benign

print(df.tail())
# %%
# Splitting (0.75, 0.25) -> (Training, Testing)
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25, random_state=0)

# %%
# Feature scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
x_train = sc.fit_transform(x_train)
x_test = sc.fit_transform(x_test)


# %%
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
    
    # test accuracy
    print("=-=-=-=-=-=Accuracy=-=-=-=-=-=")
    print("LR: ", lg.score(x_train, y_train))
    print("DT: ", t.score(x_train, y_train))
    print("RF: ", rf.score(x_train, y_train))
    print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    return lg, t, rf

models = model(x_train, y_train)

#%%
from sklearn.metrics import confusion_matrix
model_type = ['Logistic Regression', 'Decision Tree', 'Random Forest']
for i, j in enumerate(model_type):
    cm = confusion_matrix(y_test, models[i].predict(x_test))
    
    print("=-=-=-=-=-=Confusion Matrix for " + j + "=-=-=-=-=-=")
    true_positive = cm[0][0]
    true_negative = cm[1][1]
    false_positive = cm[0][1]
    false_negative = cm[1][0]
    total = true_negative + true_positive + false_negative + false_positive
    accuracy = (true_negative + true_positive) / total
    print("Accuracy: ", accuracy)
    print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
   
#

# %%
# Proper data visualisation
from sklearn.metrics import classification_report, accuracy_score

for i, j in enumerate(model_type):
    print(classification_report(y_test, models[i].predict(x_test)))
    print("Accuracy for " + j + ": " + str(accuracy_score(y_test, models[i].predict(x_test))))

# %%
# Decided to use decision tree
user =  {
    # "radius_mean" : 17.99,
    # "texture_mean": 10.38,
    # "perimeter_mean": 122.8,
    # "area_mean": 1001,
    # "smoothness_mean": 0.1184,
    # "compactness_mean": 0.2776,
    # "concavity_mean": 0.3001,
    # "concave points_mean": 0.1471,
    # "symmetry_mean": 0.1471,
    # "fractal_dimension_mean": 0.2419,
    # "radius_se": 0.07871,
    # "texture_se": 1.095,
    # "perimeter_se": 0.9053,
    # "area_se": 8.589,
    # "smoothness_se": 153.4,
    # "compactness_se": 0.006399,
    # "concavity_se": 0.04904,
    # "concave points_se": 0.05373,
    # "symmetry_se": 0.01587,
    # "fractal_dimension_se": 0.03003,
    # "radius_worst": 0.006193,
    # "texture_worst": 25.38,
    # "perimeter_worst": 17.330,
    # "area_worst":184.6,
    # "smoothness_worst": 2019,
    # "compactness_worst": 0.1622,
    # "concavity_worst": 0.6656,
    # "concave points_worst": 0.7119,
    # "symmetry_worst": 0.2654,
    # "fractal_dimension_worst": 0.1189,
    
    # "radius_mean" : 13.03,
   
    # "smoothness_mean": 0.1184,
    # "compactness_mean": 0.2776,
    # "concavity_mean": 0.3001,
    # "concave points_mean": 0.1471,
    # "symmetry_mean": 0.1471,
    # "fractal_dimension_mean": 0.2419,
    # "radius_se": 0.07871,
    # "texture_se": 1.095,
    # "perimeter_se": 0.9053,
    # "area_se": 8.589,
    # "smoothness_se": 153.4,
    # "compactness_se": 0.006399,
    # "concavity_se": 0.04904,
    # "concave points_se": 0.05373,
    # "symmetry_se": 0.01587,
    # "fractal_dimension_se": 0.03003,
    # "radius_worst": 0.006193,
    # "texture_worst": 25.38,
    # "perimeter_worst": 17.330,
    # "area_worst":184.6,
    # "smoothness_worst": 2019,
    # "compactness_worst": 0.1622,
    # "concavity_worst": 0.6656,
    # "concave points_worst": 0.7119,
    # "symmetry_worst": 0.2654,
    # "fractal_dimension_worst": 0.1189,
    
}

data = {
    'radius_mean': [18.87],
    'smoothness_mean': [0.09],
    'concave points_mean': [0.02],
    'symmetry_mean': [0.2],
    'radius_se': [0.23],
    'compactness_se': [0.02],
    'smoothness_se': [0.01],
    'symmetry_se': [0.03],
}




p_df = pd.DataFrame(data)
scaled_p_df = sc.fit_transform(p_df)
print(models[2].predict(scaled_p_df))

# scaled_p_df = sc.fit_transform(p_df)
# models[2].predict(scaled_p_df)
# patied_df = pd.DataFrame()

# models[2].predict(patient_data)
# # patient_data = [[]]
# print(models[2].predict(patient_data))
# # prediction = model[2].predict([[]])
# # %%

# %%

# %%
