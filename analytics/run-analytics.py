import pandas as pd
import sqlalchemy

engine = sqlalchemy.create_engine(
    "postgresql+psycopg2://postgres:postgres@localhost:5432/ecommerce")
df = pd.read_sql("SELECT * FROM orders", engine)
top_products = df['product_id'].value_counts().head(10)
print(top_products)
