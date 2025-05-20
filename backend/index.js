const express = require('express');
const app = express();
const connectDB = require('./db');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
connectDB();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/bookRoutes'));
app.use('/api', require('./routes/reviewRoutes'));




app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
