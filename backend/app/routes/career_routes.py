# backend/app/routes/career_routes.py
from flask import Blueprint, jsonify
from ..models import Career

career_bp = Blueprint('career', __name__)

@career_bp.route('/api/career', methods=['GET'])
def get_career_data():
    careers = Career.query.all()

    career_list = [
        {'id': career.id, 'position': career.position, 'location': career.location}
        for career in careers
    ]

    return jsonify(career_list)