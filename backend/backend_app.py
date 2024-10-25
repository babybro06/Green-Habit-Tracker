# backend/backend_app.py

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta

# Initialize the Flask app and database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///green_habits.db'
db = SQLAlchemy(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=True)
    frequency = db.Column(db.String(50))  # daily, weekly, monthly
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class Tracking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'))
    date = db.Column(db.DateTime, default=datetime.utcnow)

# Routes
@app.route('/track', methods=['POST'])
def track_task():
    data = request.get_json()
    task_id = data['task_id']
    tracking_entry = Tracking(task_id=task_id)
    db.session.add(tracking_entry)
    db.session.commit()
    return jsonify({"message": "Task tracked successfully"}), 201

@app.route('/overview/<string:period>', methods=['GET'])
def get_overview(period):
    today = datetime.utcnow()
    if period == 'day':
        start_date = today
    elif period == 'week':
        start_date = today - timedelta(days=7)
    elif period == 'month':
        start_date = today - timedelta(days=30)
    tasks = Tracking.query.filter(Tracking.date >= start_date).all()
    return jsonify({"tasks": [task.task_id for task in tasks]})

# Create tables in the database within the application context
with app.app_context():
    db.create_all()

# Run the application
if __name__ == '__main__':
    app.run(debug=True)
