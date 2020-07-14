import mysql.connector
from flask import Flask
from flask import request

app = Flask(__name__)
@app.route("/add_subscriber", methods=["GET", "POST"])

def add_subscriber():
	email= request.form['email']
	print(email)
