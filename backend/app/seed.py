from .models import Product
from .database import SessionLocal


def seed_data():
    db = SessionLocal()
    if db.query(Product).count() == 0:
        db.add_all([
            Product(name="MacBook Air", price=999.99,
                    description="13-inch Apple laptop"),
            Product(name="Logitech Mouse", price=29.99,
                    description="Wireless mouse"),
            Product(name="Samsung Monitor", price=199.99,
                    description="27-inch 1080p monitor")
        ])
        db.commit()
    db.close()
