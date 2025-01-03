ALTER TABLE users 
ADD COLUMN IF NOT EXISTS username VARCHAR(100) NOT NULL UNIQUE,
ADD COLUMN IF NOT EXISTS first_name VARCHAR(100) NOT NULL,
ADD COLUMN IF NOT EXISTS last_name VARCHAR(100) NOT NULL,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS avatar_url VARCHAR(512),
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
