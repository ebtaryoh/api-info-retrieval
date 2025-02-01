require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        email: "ibitayo.akinnibosun@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/ebtaryoh/api-info-retrieval" 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
