const express = require('express');
// const rateLimit = require('express-rate-limit');

const app = express();
const dotenv = require("dotenv")

dotenv.config()
// // Define the Rate Limiter
// const apiLimiter = rateLimit({
//     windowMs: 10 * 1000, // 10 seconds (Short window for testing)
//     limit: 5,            // Limit to 5 requests per window
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//     message: { 
//         status: 429, 
//         error: "Too many requests, please slow down!" 
//     }
// });

// Apply the limiter to the specific route
// app.use(apiLimiter);

app.get('/api/test', (req, res) => {
    console.log(req.ip)
    res.json({ 
        message: "Success! Request processed.", 
        // remaining: req.rateLimit.remaining // Internal prop added by the library
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
    console.log(`Rate Limit: 5 requests per 10 seconds.`);
});