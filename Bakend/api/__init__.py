import firebase_admin
from flask import Flask
from firebase_admin import credentials
from flask_cors import CORS


cred = credentials.Certificate("C:/Users/JOJO/Desktop/nivo/nivochart/Bakend/key.json")
firebase_admin.initialize_app(cred)


def create_app():
    app= Flask(__name__)
    app.config['SECRET_KEY']='chart5cities'
    CORS(app)


    from .userAPI import userAPI

    app.register_blueprint(userAPI, url_prefix = '/chart')

    return app