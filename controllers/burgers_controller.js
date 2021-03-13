const express = require('express');
const router = express.Router();

// Import the model (burgerModel.js) to use its database functions.
const burgers = require('../models/burgerModel');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burgers.selectAll((data) => {
        const burgerHbsObject = {
            burgers: data,
        };
        console.log(burgerHbsObject);
        res.render('index', burgerHbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    // router.post('/', (req, res) => {
    burgers.insertOne(['burger_name'], [req.body.burger_name], (result) => {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burgers.updateOne({
            devoured: true,
        },
        condition, (result) => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


// Export routes for server.js to use.
module.exports = router;