# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React frontend

# Sample route to return habits data
@app.route('/api/habits', methods=['GET'])
def get_habits():
    habits = [
        {"id": 1, "name": "Exercise", "streak": 5},
        {"id": 2, "name": "Meditate", "streak": 3},
    ]
    return jsonify(habits)

# Route to add a new habit
@app.route('/api/habits', methods=['POST'])
def add_habit():
    new_habit = request.json
    # Here you would typically save the new habit to the database
    return jsonify(new_habit), 201

if __name__ == '__main__':
    app.run(debug=True)
