import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";// Plugin de verificación de Etherscan

//npm install --save-dev @nomiclabs/hardhat-etherscan
//Para verificar contratos
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY") || "";
const PRIVATE_KEY = vars.get("PRIVATE_KEY") || ""; //clave privada de MetaMask Sepolia
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY") || "";//para verificar contratos
//npx hardhat vars set ALCHEMY_API_KEY para configurar variables
const config: HardhatUserConfig = {
  solidity: "0.8.27", // versión a usar en constractos 
  networks: {
    sepolia: {
      url: `https://eth-sepolia.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // Configuración para verificación
  },
};
//npx hardhat verify --network sepolia <contract_address> <constructor_arguments>
// para verificar contratos
export default config;
