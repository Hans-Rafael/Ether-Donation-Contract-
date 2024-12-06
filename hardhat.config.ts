import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
//npm install --save-dev @nomiclabs/hardhat-etherscan
//Para verificar contratos
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY") || "";
const PRIVATE_KEY = vars.get("PRIVATE_KEY") || "";
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY") || "";//para verificar contratos

const config: HardhatUserConfig = {
  solidity: "0.8.18",
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

export default config;
