async function main() {
    const { ethers } = require("hardhat");

    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    await calculator.deployed();

    console.log("Calculator deployed to:", calculator.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
