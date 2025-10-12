import pandas as pd
import sqlalchemy

engine = sqlalchemy.create_engine(
    "postgresql+psycopg2://postgres:postgres@db:5432/shopzen"
)

df = pd.read_sql("SELECT * FROM products", engine)

print("\n📦 Product Inventory Overview:\n")
print(df.describe())

top_expensive = df.sort_values("price", ascending=False).head(5)
print("\n💰 Top 5 Most Expensive Products:\n", top_expensive)
