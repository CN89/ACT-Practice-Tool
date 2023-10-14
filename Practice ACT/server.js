const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.get('/', (req, res) => {
  // Generate a unique user identifier and store it in the session
  if (!req.session.userId) {
    req.session.userId = generateUniqueId();
  }

  res.send('Welcome to the website. Your unique user ID is: ' + req.session.userId);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

function generateUniqueId() {
  // Generate a random unique ID, e.g., using UUID or a random string generator
  return 'unique-id-' + Math.random().toString(36).substring(2);
}
