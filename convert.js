// ============================================
// Convert M3U to Xtream Codes - JavaScript
// ============================================

let currentData = {};

async function convertM3U() {
    const inputLink = document.getElementById('m3uLink').value.trim();
    const convertBtn = document.getElementById('convertBtn');
    const resultBox = document.getElementById('resultBox');
    const errorDiv = document.getElementById('errorMessage');
    
    if (!inputLink) {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Please enter an M3U link';
        return;
    }
    
    errorDiv.style.display = 'none';
    convertBtn.disabled = true;
    convertBtn.innerHTML = 'Converting...';
    resultBox.style.display = 'none';
    
    try {
        let m3uContent = null;
        let expirationDate = null;
        
        try {
            const response = await fetch(inputLink);
            if (response.ok) {
                m3uContent = await response.text();
                expirationDate = parseExpirationFromM3U(m3uContent);
            }
        } catch (fetchError) {
            console.log('Could not fetch M3U content:', fetchError);
        }
        
        const parsed = parseM3UtoXtream(inputLink, m3uContent);
        
        if (parsed) {
            const serverUrl = parsed.serverUrl;
            const port = parsed.port || '80';
            const username = parsed.username;
            const password = parsed.password;
            
            const hostUrl = `${serverUrl}:${port}`;
            const m3uOutput = `${serverUrl}/get.php?username=${username}&password=${password}&type=m3u_plus&output=ts`;
            const epgOutput = `${serverUrl}/xmltv.php?username=${username}&password=${password}`;
            
            let playlistName = "Converted Playlist";
            try {
                const urlObj = new URL(inputLink);
                const domain = urlObj.hostname;
                playlistName = domain.replace('www.', '').split('.')[0].toUpperCase() + " Playlist";
            } catch(e) {}
            
            currentData = {
                playlistName, username, password, hostUrl, m3uOutput, epgOutput, expirationDate
            };
            
            document.getElementById('playlistName').innerText = playlistName;
            document.getElementById('username').innerText = username;
            document.getElementById('password').innerText = password;
            document.getElementById('hostUrl').innerText = hostUrl;
            document.getElementById('m3uOutput').innerText = m3uOutput;
            document.getElementById('epgLink').innerText = epgOutput;
            
            const expiryDiv = document.getElementById('expiryInfo');
            if (expirationDate && !isNaN(expirationDate.getTime())) {
                const now = new Date();
                const diff = expirationDate - now;
                const isExpired = diff <= 0;
                const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
                const formatted = expirationDate.toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric',
                    hour: '2-digit', minute: '2-digit'
                });
                
                expiryDiv.innerHTML = `<i class="fas ${isExpired ? 'fa-exclamation-triangle' : (daysLeft<7 ? 'fa-hourglass-half' : 'fa-calendar-check')}"></i> <strong>Expired in:</strong> ${formatted}<br><small>${daysLeft>0 ? `${daysLeft} days remaining` : 'EXPIRED'}</small>`;
                currentData.expirationText = `Expired in: ${formatted}\n${daysLeft>0 ? `${daysLeft} days remaining` : 'EXPIRED'}`;
            } else {
                expiryDiv.innerHTML = `<i class="fas fa-info-circle"></i> <strong>Expired in:</strong> No expiration date detected<br><small>Account active until manually deactivated</small>`;
                currentData.expirationText = "No expiration date detected.";
            }
            
            resultBox.style.display = 'block';
        } else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Invalid M3U link.';
        }
    } catch (error) {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Error processing the link.';
    } finally {
        convertBtn.disabled = false;
        convertBtn.innerHTML = 'Convert to Xtream Codes';
    }
}

function parseM3UtoXtream(url, m3uContent) {
    try {
        const urlObj = new URL(url);
        if (urlObj.pathname.includes('get.php') && urlObj.searchParams.has('username') && urlObj.searchParams.has('password')) {
            return {
                serverUrl: `${urlObj.protocol}//${urlObj.hostname}`,
                username: urlObj.searchParams.get('username'),
                password: urlObj.searchParams.get('password'),
                port: urlObj.port || (urlObj.protocol === 'https:' ? '443' : '80')
            };
        }
        return null;
    } catch(e) {
        const regex = /(https?:\/\/[^\/]+)(?:\/get\.php\?.*username=([^&]+).*password=([^&]+))/i;
        const match = url.match(regex);
        if (match) {
            return {
                serverUrl: match[1],
                username: match[2],
                password: match[3],
                port: match[1].includes('https') ? '443' : '80'
            };
        }
        return null;
    }
}

function copyAll() {
    const text = `Xtream Codes\n==============\n\nPlaylist Name: ${currentData.playlistName}\nUsername: ${currentData.username}\nPassword: ${currentData.password}\nHost/API/URL: ${currentData.hostUrl}\n\nM3U LINK:\n${currentData.m3uOutput}\n\nEPG LINK:\n${currentData.epgOutput}\n\n${currentData.expirationText || 'No expiration detected'}\n\n--- Generated by 8K Strong IPTV ---`;
    copyToClipboard(text, 'copyAllBtn');
}
