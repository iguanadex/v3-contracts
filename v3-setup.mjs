#!/usr/bin/env zx
// import 'zx/globals'

const networks = {
  eth: 'eth',
  goerli: 'goerli',
  bscMainnet: 'bscMainnet',
  bscTestnet: 'bscTestnet',
  etherlinkTestnet: 'etherlinkTestnet',
  arbitrumSepolia: 'arbitrumSepolia',
  etherlink: 'etherlink',
  hardhat: 'hardhat',
}

let network = process.env.NETWORK
console.log(network, 'network')
if (!network || !networks[network]) {
  throw new Error(`env NETWORK: ${network}`)
}

await $`yarn workspace @pancakeswap/v3-core run hardhat run scripts/setupFactory.ts --network ${network}`

await $`yarn workspace @pancakeswap/masterchef-v3 run hardhat run scripts/setupMasterChef.ts --network ${network}`

console.log(chalk.blue('Done!'))
