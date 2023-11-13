# Import the required libraries
from sqlalchemy import create_engine, Table, MetaData
from flask import Flask, jsonify, send_file
from flask_cors import CORS

# Flask setup
app = Flask(__name__)
CORS(app)
# Database Setup
engine = create_engine("sqlite:///Resources/Data_Engineering.db")

# Reflect the tables
metadata = MetaData()
metadata.reflect(bind=engine)
EVs = metadata.tables['registration']
EV_Chargers = metadata.tables['ev_charger']
Fuel_Source = metadata.tables['fuel_type']

# Main route
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"Electrical vehicles registered in NSW<br/>"
        f"/api/v1.0/evs<br/>"
        f"<br/>"
        f"Electrical vehicle chargers in NSW<br/>"
        f"/api/v1.0/ev_chargers<br/>"
        f"<br/>"
        f"Sources for generation of power per stated in Australia<br/>"
        f"/api/v1.0/fuel_sources<br/>"
        f"<br/>"
        f"Geojson with suburbs in NSW<br/>"
        f"/api/v1.0/NSW_suburbs<br/>"
        f"<br/>"
    )

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
    # Return GeoJSON data as a string
    with open("Resources/final_nsw.geojson", 'r') as geojson_file:
        geojson_data = geojson_file.read()
    return geojson_data

if __name__ == '__main__':
    app.run(debug=True)