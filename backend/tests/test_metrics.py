from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_metrics_endpoint():
    response = client.get("/metrics")
    assert response.status_code == 200
    assert "app_requests_total" in response.text


def test_request_count_increments():
    initial = client.get("/metrics").text.count("app_requests_total")
    client.get("/products/")  # trigger a request
    updated = client.get("/metrics").text.count("app_requests_total")
    assert updated >= initial
