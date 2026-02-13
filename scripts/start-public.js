#!/usr/bin/env node

/**
 * Start Next.js dev server on all network interfaces
 * Allows access via IP address from other devices
 */

const { exec } = require('child_process');
const os = require('os');

// Get local IP addresses
function getLocalIPs() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push({
          interface: name,
          address: iface.address
        });
      }
    }
  }
  return addresses;
}

const ips = getLocalIPs();

console.log('🚀 Starting AlgoMock Public Server...\n');
console.log('📡 Available on your network:');
console.log('═══════════════════════════════════════════════════');

ips.forEach(ip => {
  console.log(`  → http://${ip.address}:3000`);
});

console.log('═══════════════════════════════════════════════════\n');
console.log('📱 Share this URL with your investors:');
console.log(`   http://${ips[0]?.address || 'YOUR_IP'}:3000\n`);
console.log('⚠️  Note: Your firewall may block external access.');
console.log('   Run this script as Administrator if needed.\n');
console.log('🛑 Press Ctrl+C to stop the server\n');

// Start Next.js on all interfaces
const child = exec('npx next dev -H 0.0.0.0', {
  stdio: 'inherit'
});

child.stdout?.pipe(process.stdout);
child.stderr?.pipe(process.stderr);
