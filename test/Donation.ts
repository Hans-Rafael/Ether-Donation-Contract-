import { expect } from "chai";
import { ethers } from "hardhat";
//run test con comando npx hardhat test
describe("Donation", function () {
  it("Should accept donations and update totalDonations", async function () {
    const [owner, donor] = await ethers.getSigners();
    const DonationContract = await ethers.getContractFactory(
      "DonationContract"
    );
    const donationContract = await DonationContract.deploy();

    await donationContract.deployed();

    const donationAmount = ethers.utils.parseEther("1");
    await donationContract.connect(donor).donate({ value: donationAmount });

    expect(await donationContract.totalDonations()).to.equal(donationAmount);
    expect(await ethers.provider.getBalance(donationContract.address)).to.equal(
      donationAmount
    );
  });

  it("Should allow the owner to withdraw funds", async function () {
    const [owner] = await ethers.getSigners();
    const DonationContract = await ethers.getContractFactory(
      "DonationContract"
    );
    const donationContract = await DonationContract.deploy();

    await donationContract.deployed();

    const donationAmount = ethers.utils.parseEther("1");
    await donationContract.donate({ value: donationAmount });

    const initialOwnerBalance = await ethers.provider.getBalance(owner.address);
    const tx = await donationContract.withdrawFunds();
    const receipt = await tx.wait();

    const gasUsed = receipt.gasUsed.mul(receipt.effectiveGasPrice);

    const finalOwnerBalance = await ethers.provider.getBalance(owner.address);

    expect(finalOwnerBalance.add(gasUsed)).to.equal(
      initialOwnerBalance.add(donationAmount)
    );
    expect(await ethers.provider.getBalance(donationContract.address)).to.equal(
      0
    );
  });
});
