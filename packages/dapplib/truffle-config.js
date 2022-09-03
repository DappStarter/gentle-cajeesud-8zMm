require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan random mad erosion grace option flip genre'; 
let testAccounts = [
"0xc20188ee9388d323e706f27f4081734d9e89fb0283dcfcebd0760890001e6296",
"0x5df1022203acb4b737387686f60546094b181266215a3d5278562543097fcb01",
"0x916a82fe92dd7408bde22da6f984a744eef2bf8d3e1b9b1812da77ae29a75a48",
"0x1e442426e37141f222c05087935967d33caabe349b8ee3536a3af22ce408c30e",
"0x42e4aa9942ffef2a3e9c680a5a9901d4f185ec1f5a058fa2b28e3a67a5bf88ba",
"0x31f4e51d2083ce2ce595a55c4fb244969a0026b4535932a1d89b3bb0e0d1d652",
"0x8aa96907ee406d52ca5539cc0a45badc414d85c097b024b5e50ac78d943098cc",
"0x157ee6ce521f9bef533d15c43451ab9fd3acdf36c1aa87d69373cf7d060f04a1",
"0x4d7883ab2ac2217c084b3896168f314ae9389c51ce7531abf3ffde55958b266c",
"0x1a6a0dff15517be8888bc5485f974da00881464ae8e584f0901c2ebfff446af8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

