# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'sqlite.db')
db = SQLAlchemy(app)

class Career(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    position = db.Column(db.String(255))
    location = db.Column(db.String(255))

# Define the route for /api/career
@app.route('/api/career', methods=['GET'])
def get_career_data():
    careers = Career.query.all()

    # Convert the list of Career objects to a list of dictionaries
    career_list = [
        {'id': career.id, 'position': career.position, 'location': career.location}
        for career in careers
    ]

    # Return the data as JSON
    return jsonify(career_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
