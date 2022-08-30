DROP SCHEMA IF EXISTS plants_solid;
CREATE SCHEMA IF NOT EXISTS plants_solid;

CREATE TYPE specialCare AS OBJECT (
  waterFrequency: INTEGER
) NOT FINAL; 

CREATE TABLE plants_solid.Plants {
  id: INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  breed: TEXT NOT NULL,
  needsSun: BOOLEAN,
  origin: TEXT NOT NULL,
  size: INTEGER,
  specialCare: { waterFrequency: INTEGER }
}

INSERT INTO 
  plants_solid.plants (id, breed, size, needsSun, origin, specialCare)
VALUES
  (1, 'Bromelia', 102, false, 'Argentina', 3);
