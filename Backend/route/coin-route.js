const express = require('express');

const coinControllers = require('../controllers/coin-controller');

const router = express.Router();


router.get('/', coinControllers.getAllCoin);

router.post('/', coinControllers.createCoin);

router.patch('/:pid', coinControllers.updateCoin);

router.delete('/:pid', coinControllers.deleteCoin);

module.exports = router;