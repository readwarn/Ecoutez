import mysql.connector
from flask import Flask
from flask import request
from flask import render_template
from flask import url_for

app = Flask(__name__)
@app.route('/add_user', methods=['GET', 'POST'])

def add_subscriber():
	print("sfdffd")
		

