# backend/app/models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Career(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    position = db.Column(db.String(255))
    location = db.Column(db.String(255))