module.exports = {
  rpc: {
  host:"localhost",
  port:8545
  },
  networks: {
  development: {
  host: "localhost",
  port: 8545, // port where your blockchain is running 
  network_id: "*",
  from: "0x78268278ccb430f839faf07fc39b8f0b9e1bfdb7",
  gas: 1800000
  }
  }
  };