import mysql.connector
from flask import Flask
from flask import request
from flask import render_template
from flask import url_for

app = Flask(__name__)
@app.route('/add_user', methods=['GET', 'POST'])

def add_subscriber():
	print("sfdffd")
		
<<<<<<< HEAD
=======

>>>>>>> e215a70f787a440417dda81f59e050434cb7079c
