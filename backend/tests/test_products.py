from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_create_product():
    response = client.post("/products/", json={
        "name": "Test Product",
        "description": "Test Description",
        "price": 10.99
    })
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Product"


def test_get_products():
    response = client.get("/products/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_create_product_missing_field():
    response = client.post("/products/", json={
        "name": "Incomplete Product"
    })
    assert response.status_code == 422 


def test_create_product_invalid_price():
    response = client.post("/products/", json={
        "name": "Bad Product",
        "description": "Invalid price",
        "price": "not-a-number"
    })
    assert response.status_code == 422
