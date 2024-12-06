import { ethers } from "hardhat";

async function main() {
  // Obtener el factory del contrato
  const DonationFactory = await ethers.getContractFactory("Donations");
  
  // Desplegar el contrato
  const donation = await DonationFactory.deploy();
  
  // Esperar a que el contrato esté completamente desplegado
  await donation.waitForDeployment();
  console.log("Donations contract deployed to:", donation.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
