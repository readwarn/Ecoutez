import mysql.connector
from flask import Flask
from flask import request

def login():
	if request.method == 'POST':
		user = request.form['email']
		print(user)
		# code that uses the data you've got
		# in our case, checking if the user exists
		# and logs them in, if not redirect to sign up
		
	else:(print("erro"))