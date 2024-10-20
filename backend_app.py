from flask import Flask, jsonify, request

app = Flask(__name__)

data = []

@app.route('/submit', methods=['POST'])
def submit():
    # Accept data from the mobile app
    daily_data = request.json
    data.append(daily_data)
    
    return jsonify({'status': 'success', 'data': daily_data}), 200

@app.route('/cumulative_data', methods=['GET'])
def get_data():
    # Return cumulative data
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
