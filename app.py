# Import the required libraries
from sqlalchemy import create_engine, Table, MetaData
from flask import Flask, jsonify

# Flask setup
app = Flask(__name__)

# Database Setup
engine = create_engine("sqlite:///Coding/Data_Engineering.db")

# Reflect the tables
metadata = MetaData()
metadata.reflect(bind=engine)
EVs = metadata.tables['registration']
EV_Chargers = metadata.tables['ev_charger']
Fuel_Source = metadata.tables['fuel_type']

# Create an API route for EVs
@app.route("/api/v1.0/evs")
def get_EVs():
    conn = engine.connect()
    result = conn.execute(EVs.select()).fetchall()
    conn.close()

    # Print the structure of the row
    print(result[0])

    # Convert each row to a dictionary
    EVs_data = [dict(row._asdict()) for row in result]
    return jsonify(EVs_data)

# Create an API route for EV Chargers
@app.route("/api/v1.0/ev_chargers")
def get_EV_Chargers():
    conn = engine.connect()
    result = conn.execute(EV_Chargers.select()).fetchall()
    conn.close()

    # Print the structure of the row
    print(result[0])

    # Convert each row to a dictionary
    EV_Charger_data = [dict(row._asdict()) for row in result]
    return jsonify(EV_Charger_data)

# Create an API route for Fuel Sources
@app.route("/api/v1.0/fuel_sources")
def get_fuel_sources():
    conn = engine.connect()
    result = conn.execute(Fuel_Source.select()).fetchall()
    conn.close()

    # Print the structure of the row
    print(result[0])

    # Convert each row to a dictionary
    fuel_sources_data = [dict(row._asdict()) for row in result]
    return jsonify(fuel_sources_data)


# Create an API route for the Suburbs GeoJSON
@app.route("/api/v1.0/NSW_suburbs")
def get_geojson_data():
    # Read GeoJSON data
    with open("Resources/final_nsw.geojson", 'r') as geojson_file:
        geojson_data = geojson_file.read()
    return jsonify(geojson_data)