const express = require('express');
const router = express.Router();
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [
    // ABI array here
];

const calculator = new web3.eth.Contract(abi, contractAddress);

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/calculate', async (req, res) => {
    const { num1, num2, operation } = req.body;
    const accounts = await web3.eth.getAccounts();
    let result;

    switch (operation) {
        case 'add':
            result = await calculator.methods.add(num1, num2).send({ from: accounts[0] });
            break;
        case 'subtract':
            result = await calculator.methods.subtract(num1, num2).send({ from: accounts[0] });
            break;
        case 'multiply':
            result = await calculator.methods.multiply(num1, num2).send({ from: accounts[0] });
            break;
        case 'divide':
            result = await calculator.methods.divide(num1, num2).send({ from: accounts[0] });
            break;
    }

    res.json({ result: result.events.CalculationResult.returnValues.result });
});

module.exports = router;
