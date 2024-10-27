import pytest
from backend_app import app, db, User, Task, Tracking
from flask import Flask


@pytest.fixture
def client():
    # Setup for each test
    app.config['TESTING'] = True
    with app.app_context():
        db.create_all()
        client = app.test_client()
        yield client  # this is where the testing happens
        db.session.remove()
        db.drop_all()


def test_track_task(client):
    with app.app_context():
        user = User(username="testuser", password="password123")
        db.session.add(user)
        db.session.commit()

        task = Task(title="Test Task", description="Task description", frequency="daily", user_id=user.id)
        db.session.add(task)
        db.session.commit()

        response = client.post('/track', json={"task_id": task.id})
        assert response.status_code == 201
        assert response.get_json()["message"] == "Task tracked successfully"


def test_get_overview_day(client):
    with app.app_context():
        user = User(username="testuser", password="password123")
        db.session.add(user)
        db.session.commit()

        task = Task(title="Daily Task", description="Task description", frequency="daily", user_id=user.id)
        db.session.add(task)
        db.session.commit()

        # Add tracking entry
        tracking = Tracking(task_id=task.id)
        db.session.add(tracking)
        db.session.commit()

        response = client.get('/overview/day')
        assert response.status_code == 200
        assert "tasks" in response.get_json()

# Repeat similar context setup for week and month overview tests
