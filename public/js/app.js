window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

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
            }
          ];

        const calculator = new web3.eth.Contract(abi, contractAddress);

        document.getElementById('add').onclick = async () => {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            const result = await calculator.methods.add(num1, num2).call();
            document.getElementById('result').innerText = `Result: ${result}`;
        };

        document.getElementById('subtract').onclick = async () => {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            const result = await calculator.methods.subtract(num1, num2).call();
            document.getElementById('result').innerText = `Result: ${result}`;
        };

        document.getElementById('multiply').onclick = async () => {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            const result = await calculator.methods.multiply(num1, num2).call();
            document.getElementById('result').innerText = `Result: ${result}`;
        };

        document.getElementById('divide').onclick = async () => {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            const result = await calculator.methods.divide(num1, num2).call();
            document.getElementById('result').innerText = `Result: ${result}`;
        };
    } else {
        alert('Please install MetaMask to use this DApp!');
    }
});
