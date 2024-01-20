# backend/config.py
import os

#SECRET_KEY = 'your_secret_key'
basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'sqlite.db')  # Modify this URI based on your database setup
SQLALCHEMY_TRACK_MODIFICATIONS = False