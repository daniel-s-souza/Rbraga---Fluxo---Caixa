import React from 'react';

function BanckComponent() {

  const getBanckName = () => {
    const getBankData = JSON.parse(localStorage.getItem('transactions'));
    const subGroup = getBankData.subGroup;
    console.log(subGroup)
    return subGroup;
  }

  const subGroup = getBanckName();
  
  return (
    <div>{subGroup}</div>
  )
}

export default BanckComponent;

