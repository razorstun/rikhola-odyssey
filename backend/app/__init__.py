# backend/app/__init__.py
from flask import Flask
from flask_cors import CORS
from .models import db
from .routes.career_routes import career_bp

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_pyfile('../config.py')  # Load configuration from config.py

    # Initialize the database
    db.init_app(app)

    # Register blueprints
    app.register_blueprint(career_bp, url_prefix='/')

    return app