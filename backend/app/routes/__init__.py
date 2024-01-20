# backend/app/routes/__init__.py
from flask import Blueprint

# Create blueprints for each set of routes
career_bp = Blueprint('career', __name__)

# Import route modules to register the routes with the blueprints
from . import career_routes

# Optionally, you can define any additional configuration or logic related to routes here
# For example, you might have middleware, route decorators, or other configuration specific to this module.