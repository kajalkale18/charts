from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from flask_cors import cross_origin

db = firestore.client()
user_Ref = db.collection('chart_data')

user_bar = db.collection('chart_data_bar')



userAPI = Blueprint('userAPI', __name__)

@userAPI.route('/add', methods = ['GET'])
@cross_origin()
def get_data():
    try:
        data=[]
        chart= db.collection('chart_data_pie')
        docs = chart.stream()
        for doc in docs:
           data.append(doc.to_dict())
        return jsonify(data), 200
    except Exception as e:
        return f"An Error Occured: {e}"    


@userAPI.route('/bar', methods = ['GET'])
@cross_origin()
def get_data_bar():
    try:
        data_bar=[]
        chart= db.collection('chart_data_bar')
        docs = chart.stream()
        for doc in docs:
           data_bar.append(doc.to_dict())
        return jsonify(data_bar), 200
    except Exception as e:
        return f"An Error Occured: {e}"    



# @userAPI.route('/data')
# def get():
#     return{
#         "Name":"sakshi",
#         "age":"21"
#     }    