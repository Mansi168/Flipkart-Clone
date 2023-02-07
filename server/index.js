import express from 'express';


const app = express();

const PORT = 8081;

app.listen(PORT, () => console.log(`Server is running successfully on port 8081`));