import Server from '../interfaces/Server';
const https = require('https');
const fs = require('fs');

export default class HetznerAPI {
    data: Object;

    
    checkForServer = async (tags: Array<Object>) => {

    }

    saveDatabase = async() => {
        const data = String(await this.downloadJson());
        const save = await new Promise(resolve => {
            try {
                let jsonData = JSON.parse(data);
                fs.writeFile('src/database/live_data.json', data, function (err) {
                    if (err){
                        resolve(false);
                    }
                    resolve(true);
                });
            } catch (error) {
                resolve(false);
            }
        })

        if(save){
            this.data = JSON.parse(data);
        }
        return save;
    }

    downloadJson = () => new Promise(resolve => {
        const options = {
            hostname: 'www.hetzner.com',
            path: '/a_hz_serverboerse/live_data.json',
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
            }
        };
        let data = "";
        https.get(options, (response) => {
            
            response.on('data', function (chunk) {
                data += chunk;
            });

            response.on('end', function () {
                resolve(data);
            });
        
        });
    });
}