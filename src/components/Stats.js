import React, {useState, useEffect} from 'react';
import '../styles/stats.css';

const statToUserFacingString = {
  dps: "DPS",
  gold: "Gold",
  gps: "Gold per Second",
  goldPerClick: "Gold per Click",
  clickDamage: "Click Damage",
};

const upgrades = [
  {
    name: "Cedrick, the Soldier",
    upgradeMultiplyer: 2,
    price: 10,
    purpose: 1,
    level: 0,
    internalPurpose: "dps",
    tooltip: 'DPS',
    description: "An old soldier, looking to get back in the fight! The soldier will do damage to the dragon automatically when hired."
  },
  {
    name: "Tim, the Helpful Hunter",
    upgradeMultiplyer: 2,
    price: 25,
    purpose: 1,
    internalPurpose: "clickDamage",
    level: 0,
    tooltip: "Click Damage",
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
    description: "A Dwarven miner who can from a far away land, seeking employment. Gwimle will automatically earn you gold and improve with every level."
  }
];

function Stats({gold, dps, stats, setStats}) {
  const handleUpgrade = (statUpgraded, upgradeMultiplyer, upgradePurpose, upgradePrice, index) => {
    if (upgradePrice <= gold) {
      const currentStatValue = stats[statUpgraded];
      setStats({
        ...stats,
        gold: gold - upgradePrice,
        [statUpgraded]: currentStatValue + upgradePurpose,
      });
      upgrades[index].level += 1;
      upgrades[index].price *= upgradeMultiplyer;
    }
  };

  return (
    <div className="stats">
      <h2>Player Stats</h2>
      {
        Object.keys(stats).map((key) =>
        <div>
          Total {statToUserFacingString[key]}: {Math.floor(stats[key])}
        </div>
        )
      }
      <h2>Upgrades</h2>
      {
        upgrades.map((upgrade, index) =>
          <div>
            {upgrade.name} Level: {upgrade.level}
            <div>
              {upgrade.tooltip} per Level: {upgrade.purpose}
            </div>
            <div className='tooltip'>
              {upgrade.description}
            </div>
            <div>
              Upgrade Price: {upgrade.price}
            </div>
            <button onClick={() => handleUpgrade(upgrade.internalPurpose, upgrade.upgradeMultiplyer, upgrade.purpose, upgrade.price, index)}>Level up</button>
            <br/>
            <br/>
          </div>
        )
      }
    </div>
  );
}

export default Stats;
