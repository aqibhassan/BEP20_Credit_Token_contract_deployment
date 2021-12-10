require('dotenv').config();
// const CreditToken= artifacts.require("FourArt");
const FourArtToken= artifacts.require("FourArtToken");
module.exports = function (deployer) {

  deployer.deploy(FourArtToken);
  
};
