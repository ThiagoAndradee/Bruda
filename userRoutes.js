// userRoutes.js
import express from 'express';

const router = express.Router();

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('User not authenticated');
};

// Protected route to get user data
router.get('/profile', isAuthenticated, (req, res) => {
  // Assuming the user profile is stored in req.user
  if (req.user) {
    // Construct a safe user object to return. Avoid sending sensitive data.
    const userData = {
      name: req.user.displayName,
      email: req.user.emails[0].value, // Make sure the email scope is requested
      profilePicture: req.user.photos[0].value,
      // Include other data you need, make sure you have permission to access them
    };

    res.json(userData);
  } else {
    res.status(404).send('User data not found');
  }
});

export default router;
