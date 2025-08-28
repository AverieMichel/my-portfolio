import axios from 'axios';
import express  from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

const err = 404;
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const apiKey = process.env.WEATHER_API_KEY;
app.use(cors());
// Parse JSON bodies

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'portfolio',
    password: 'Averie1103',
    port: 5434,
});
db.connect()
.then(() => console.log("Connected to database"))
.catch((err) => {
  console.error("Database connection error:", err);
  process.exit(1); // Stop the server if DB connection fails
});

app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/reviews', async (req, res) => {
    // console.log("🔥 Incoming POST request");
    // console.log("Headers:", req.headers);
    // console.log("Body:", req.body);
    const {name, email, review} = req.body;

    if (!name || !email || !review) {
        return res.status(400).json({ error: "Missing fields" });
    }
    // console.log(req.body.name);
    try {
        const result = await db.query(
            'INSERT INTO portfolio_reviews (name, email, review) VALUES ($1, $2, $3) RETURNING *',
            [name , email, review]
        );

        // console.log(result);
        // console.log("Inserted review:", result.rows[0]);

        res.json(result.rows[0]);
    } catch (err) {
        console.log(err);
    }    
});

app.get('/weather', async (req, res) => {
    const {lat, lon} = req.query;

    if (!lat || !lon) {
        return res.status(400).json({error: 'Missing latitude or longitude'});

    }
    try {
    const result = await axios.get('http://api.weatherapi.com/v1/current.json', {
        params: {
            key: apiKey,
            q: `${lat},${lon}`,
            aqi:'no'
        }
    });
    res.json(result.data);
    } catch (err) {
        console.log('failed to fetch weather data');
    }

});

app.get('/reviews', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM portfolio_reviews ORDER BY created_at DESC');
      res.json(result.rows);
      console.log('Fetched reviews:', result.rows); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });