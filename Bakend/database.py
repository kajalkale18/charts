
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("C:/Users/JOJO/Desktop/nivo/nivochart/Bakend/key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
chart= db.collection('chart_data_pie').add  ({
        "id": "pune",
        "value": 300,
        "color": "hsl(542, 70%, 50%)",
        "label": "Chennai"

      })

