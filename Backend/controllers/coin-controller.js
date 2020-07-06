const mongoose = require('mongoose')

const Coin = require('../models/Coin');

const getAllCoin = async(req, res, next) => {
    let coinAll;
    try {
        coinAll = await Coin.find();
    } catch (err) {
        const error = new Error("could not find");
        return next(error);
    }
    res.json({ coinAll });
}
const createCoin = async(req, res, next) => {

    const { name, coin } = req.body;

    const createdCoin = new Coin({
        name,
        coin,
    });

    //console.log(user);
    try {
        await createdCoin.save();
    } catch (err) {
        const error = new Error(
            'Creating Coin failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ Coin: createdCoin.toObject({ getters: true }) });
};

const updateCoin = async(req, res, next) => {
    const { coin } = req.body;
    const CoinId = req.params.pid;

    let coinUpdate;
    try {
        coinUpdate = await Coin.findById(CoinId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not find a Coin.',
            500
        );
        return next(error);
    }

    coinUpdate.coin = coin;

    try {
        await coinUpdate.save();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not update Coin.',
            500
        );
        return next(error);
    }

    res.status(200).json({ Coin: coinUpdate.toObject({ getters: true }) });
};

const deleteCoin = async(req, res, next) => {
    const CoinId = req.params.pid;

    let coinDelete;
    try {
        coinDelete = await Coin.findById(CoinId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not delete Coin.',
            500
        );
        return next(error);
    }

    if (!coinDelete) {
        const error = new Error('Could not find Coin for this id.', 404);
        return next(error);
    }

    try {
        await coinDelete.remove();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not delete Coin.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Deleted Coin.' });
};

exports.getAllCoin = getAllCoin;
exports.createCoin = createCoin;
exports.updateCoin = updateCoin;
exports.deleteCoin = deleteCoin;