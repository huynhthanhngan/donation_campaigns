CREATE TABLE IF NOT EXISTS campaigns (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  goal_amount INT NOT NULL,
  raised_amount INT DEFAULT 0,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  end_date DATE NOT NULL,
  status VARCHAR(50) NOT NULL,
  image TEXT,
  user_id SERIAL NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);