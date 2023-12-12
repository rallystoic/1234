function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
  const n = shops.length;

  // Calculate the energy needed at each station
  const stationEnergy = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    stationEnergy[i] = stations[i] - shops[i];
  }

  // Calculate the minimum energy needed at the starting point
  let minInitialEnergy = 0;
  let currentEnergy = start;

  for (let i = 0; i < n; i++) {
    currentEnergy += stationEnergy[i];

    // Update the minimum initial energy needed
    minInitialEnergy = Math.min(minInitialEnergy, currentEnergy);
  }

  // Calculate the energy needed to reach the target
  const energyToTarget = target - currentEnergy;

  // Return the total energy used, which is the absolute value of the minimum initial energy
  // plus the energy needed to reach the target
  return Math.abs(minInitialEnergy) + Math.max(0, -energyToTarget);
}

const result = minEnergy(0, [4, 9], [3, 6, 8], 11);
//console.log(result); 
