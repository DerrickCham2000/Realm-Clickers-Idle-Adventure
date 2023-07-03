import React, {useState, useEffect} from 'react';
import '../styles/stats.css';


const upgrades = [
  {
    name: "Soldier",
    upgradeMultiplyer: 2,
    price: 10,
    damage: 1,
    level: 0,
    tooltip: "An old soldier, looking to get back in the fight! The soldier will do damage to the dragon automatically when hired"
  }
];

function Stats({gold, dps, setDPS, setGold}) {
  const handleUpgrade = (upgradeLevel, upgradeMultiplyer, upgradeDamage, index) => {
    // Increase autoclicker damage based on level
    const upgradePrice = upgrades[index].price;
    if (upgradePrice <= gold) {
      setGold(gold - upgradePrice);
      upgrades[index].level += 1;
      upgrades[index].price *= upgradeMultiplyer;
      setDPS(dps + upgradeDamage);
    }
  };

  useEffect(() => {
    
  }, [handleUpgrade]);

  return (
    <div className="stats">
      <h2>Player Stats</h2>
      <div>Attack: 1</div>
      <div>Gold: {gold}</div>
      <h2>Upgrades</h2>
      {
        upgrades.map((upgrade, index) =>
          <div>
            {upgrade.name} Level: {upgrade.level}
            <div>
              Damage per Level: {upgrade.damage}
            </div>
            <div>
              Total Damage per Second: {upgrade.damage * upgrade.level}
            </div>
            <div className='tooltip'>
              {upgrade.tooltip}
            </div>
            <br/>
            <div>
              Upgrade Price: {upgrade.price}
            </div>
            <button onClick={() => handleUpgrade(upgrade.level, upgrade.upgradeMultiplyer, upgrade.damage, index)}>Level up</button>
          </div>
        )
      }
    </div>
  );
}

export default Stats;
