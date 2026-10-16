-- ASTRONOMICAL DATABASE SCHEMA
-- Authoritative scientific schema for Universe Explorer

CREATE TABLE IF NOT EXISTS celestial_objects (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,           -- planets, stars, exoplanets, galaxies, black_holes, pulsars, nebulae, asteroids, comets, clusters, spacecraft
    object_type TEXT NOT NULL,
    catalog_id TEXT,
    constellation TEXT,
    parent_id TEXT,                   -- Parent star / parent planet / host galaxy
    
    -- Spatial coordinates
    pos_x REAL NOT NULL DEFAULT 0.0,
    pos_y REAL NOT NULL DEFAULT 0.0,
    pos_z REAL NOT NULL DEFAULT 0.0,
    distance_from_earth TEXT,
    distance_ly REAL,
    distance_au REAL,
    
    -- Physical measurements
    radius_km REAL,
    mass_kg REAL,
    mass_formatted TEXT,
    surface_temp_k REAL,
    temp_formatted TEXT,
    gravity_ms2 REAL,
    density_gcm3 REAL,
    magnetic_field TEXT,
    
    -- Orbit & Rotation
    semi_major_axis_au REAL,
    orbital_period_days REAL,
    orbital_period_years REAL,
    rotation_period_hours REAL,
    axial_tilt_deg REAL,
    eccentricity REAL,
    
    -- Water, Atmosphere & Habitability
    water_status TEXT NOT NULL DEFAULT 'UNKNOWN',
    water_details TEXT,
    atmosphere_composition TEXT,
    atmosphere_pressure_bar REAL,
    atmosphere_thickness TEXT,
    habitability_rating TEXT NOT NULL DEFAULT 'UNKNOWN',
    life_status TEXT NOT NULL DEFAULT 'UNKNOWN',
    
    -- Scientific accuracy & provenance
    data_status TEXT NOT NULL DEFAULT 'REAL / CATALOGUED',
    visualization_status TEXT NOT NULL DEFAULT 'PROCEDURAL VISUALIZATION',
    source TEXT NOT NULL,
    
    -- Educational content
    description TEXT NOT NULL,
    what_is_it TEXT NOT NULL,
    why_special TEXT NOT NULL,
    how_big TEXT,
    why_question TEXT,
    why_answer TEXT,
    how_question TEXT,
    how_answer TEXT,
    evidence_text TEXT
);

CREATE TABLE IF NOT EXISTS quiz_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    object_id TEXT NOT NULL,
    question TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_option TEXT NOT NULL,       -- 'A', 'B', 'C', 'D'
    explanation TEXT NOT NULL,
    FOREIGN KEY(object_id) REFERENCES celestial_objects(id)
);

CREATE INDEX IF NOT EXISTS idx_objects_category ON celestial_objects(category);
CREATE INDEX IF NOT EXISTS idx_objects_parent ON celestial_objects(parent_id);
CREATE INDEX IF NOT EXISTS idx_quiz_object ON quiz_questions(object_id);
