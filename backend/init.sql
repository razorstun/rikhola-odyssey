CREATE TABLE IF NOT EXISTS career (
    id INTEGER PRIMARY KEY,
    position TEXT,
    location TEXT
);

INSERT INTO career (position, location) VALUES
    ('Software Engineer', 'Example City'),
    ('Data Scientist', 'Another City');