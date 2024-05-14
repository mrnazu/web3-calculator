const express = require('express');
const router = express.Router();
const { Web3 } = require('web3'); // Ensure this line correctly imports Web3

// Initialize Web3
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); // Correctly initialize Web3 provider

// Your contract ABI and address
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "add",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "subtract",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "multiply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "divide",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];

// Create contract instance
const calculator = new web3.eth.Contract(abi, contractAddress);

router.post('/calculate', async (req, res) => {
    const { num1, num2, operation } = req.body;

    try {
        let result;
        switch (operation) {
            case 'add':
                result = await calculator.methods.add(num1, num2).call();
                break;
            case 'subtract':
                result = await calculator.methods.subtract(num1, num2).call();
                break;
            case 'multiply':
                result = await calculator.methods.multiply(num1, num2).call();
                break;
            case 'divide':
                result = await calculator.methods.divide(num1, num2).call();
                break;
            default:
                return res.status(400).send({ error: 'Invalid operation' });
        }
        res.send({ result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
