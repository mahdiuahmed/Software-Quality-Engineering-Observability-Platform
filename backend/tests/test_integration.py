from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_create_and_list_product():
    create_resp = client.post("/products/", json={
        "name": "Integration Test Product",
        "description": "Test Description",
        "price": 25.50
    })
    assert create_resp.status_code == 200
    list_resp = client.get("/products/")
    data = list_resp.json()
    assert any(p["name"] == "Integration Test Product" for p in data)
