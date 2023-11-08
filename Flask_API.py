# Import the required libraries\n",
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, text
from flask import Flask, jsonify

# Flask setup
app = Flask(__name__)

# Database Setup
engine = create_engine("sqlite:///Data_Engineering.db")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(autoload_with=engine)

#Define classes for each database
EVs = Base.classes.evcar 
Fuel_Source = Base.classes.fueltype

# Create an API route for EVs
@app.route("/api/v1.0/EVs")
def get_EVs():
    session = Session(engine)
    results = session.query(EVs).all()
    session.close()

    EVs_data = []
    for result in results:
        EVs_data.append(result)
    return jsonify(EVs_data)

# Create an API route for Fuel Sources
@app.route("/api/v1.0/Fuel_Sources")
def get_fuel_sources():
    session = Session(engine)
    results = session.query(Fuel_Source).all()
    session.close()

    fuel_sources_data = []
    for result in results:
        fuel_sources_data.append(result)
    return jsonify(fuel_sources_data)

# Create an API route for the Suburbs GeoJSON
@app.route("/api/v1.0/NSW_Geo")
def get_geojson_data():
    # Read GeoJSON data
    with open("Resources/suburb-2-nsw.geojson", 'r') as geojson_file:
        geojson_data = geojson_file.read()
    return jsonify(geojson_data)
