import soldierPic from "../sprites/soldier.png";
import hunterPic from "../sprites/hunter.png";
import thiefPic from "../sprites/thief.png";
import minerPic from "../sprites/miner.png";


const upgrades = [
    {
      name: "Cedrick, the Soldier",
      upgradeMultiplyer: 2,
      price: 10,
      purpose: 1,
      level: 0,
      internalPurpose: "dps",
      tooltip: 'DPS',
      profile: soldierPic,
      description: "A seasoned soldier, looking to get back in the fight! The soldier will do damage to the dragon automatically when hired."
    },
    {
      name: "Tim, the Helpful Hunter",
      upgradeMultiplyer: 2,
      price: 25,
      purpose: 1,
      internalPurpose: "clickDamage",
      level: 0,
      tooltip: "Click Damage",
      profile: hunterPic,
      description: "An hunter who's family was slain by the Dragon. Seeking vengence, Tim will improve your click damage with every level."
    },
    {
      name: "Lorien, the Thief",
      upgradeMultiplyer: 2,
      price: 100,
      purpose: 1,
      internalPurpose: "goldPerClick",
      level: 0,
      tooltip: "Gold per Click",
      profile: thiefPic,
      description: "A sneaky little guy, more than happy to steal the Dragon's treasure. Lorien will improve Gold per Click with every level."
    },
    {
      name: "Gwimle, the Dwarven Miner",
      upgradeMultiplyer: 2,
      price: 300,
      purpose: 5,
      internalPurpose: "gps",
      level: 0,
      tooltip: "GPS",
      profile: minerPic,
      description: "A Dwarven miner who can from a far away land, seeking employment. Gwimle will automatically earn you gold and improve with every level."
    },
  ];

  export default upgrades;