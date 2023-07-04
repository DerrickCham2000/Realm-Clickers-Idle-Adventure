import React, {useState, useEffect} from 'react';
import upgrades from '../logic/upgradePaths';
import '../styles/upgrades.css';

const statToUserFacingString = {
  dps: "DPS",
  gold: "Gold",
  gps: "Gold per Second",
  goldPerClick: "Gold per Click",
  clickDamage: "Click Damage",
};


function Upgrades({gold, stats, setStats}) {
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
        <div className='total-stats'>
          Total {statToUserFacingString[key]}: {Math.floor(stats[key])}
        </div>
        )
      }
      <h2>Upgrades</h2>
      {
        upgrades.map((upgrade, index) =>
          <div>
            <div className='upgrade-profile'>
              <img className='character-profile' src={upgrade.profile}/>
              <div>
                {upgrade.name} Level: {upgrade.level}
                <br/>
                {upgrade.tooltip} per Level: {upgrade.purpose}
              </div>
            </div>
            <div className='description'>
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

export default Upgrades;
