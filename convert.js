// Store extracted data for copy all function
let currentData = {
    serverUrl: '',
    username: '',
    password: '',
    epgUrl: '',
    expirationDate: ''
};

// Show toast notification (using alert for simplicity, can be enhanced)
function showToast(message, isError = false) {
    alert(message);
}

// Copy individual field
function copyField(fieldId, fieldName) {
    const element = document.getElementById(fieldId);
    if (!element) {
        showToast(`Element not found`, true);
        return;
    }
    
    const text = element.innerText;
    if (!text || text === '-' || text === 'Not available in URL' || text === 'Not available') {
        showToast(`❌ No ${fieldName} available to copy`, true);
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✅ ${fieldName} copied to clipboard!`);
        // Update button temporarily
        const btn = document.querySelector(`.copy-btn[data-copy-field="${fieldId}"]`);
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => { btn.innerHTML = originalHTML; }, 1500);
        }
    }).catch(() => {
        showToast(`❌ Failed to copy ${fieldName}`, true);
    });
}

// Copy all information
function copyAll() {
    if (!currentData.serverUrl && !currentData.username && !currentData.password) {
        showToast('❌ No data available. Please extract information from an M3U URL first.', true);
        return;
    }
    
    const allText = `═══════════════════════════════════
        XTREAM CODES INFORMATION
═══════════════════════════════════

📡 Server URL: ${currentData.serverUrl}
👤 Username: ${currentData.username}
🔐 Password: ${currentData.password}
📅 EPG URL: ${currentData.epgUrl}
⏰ Expiration Date: ${currentData.expirationDate}

═══════════════════════════════════
8K Strong VIP - Premium IPTV Service
═══════════════════════════════════`;
    
    navigator.clipboard.writeText(allText).then(() => {
        showToast('✅ All Xtream Codes copied to clipboard!');
        const copyAllBtn = document.getElementById('copyAllBtn');
        if (copyAllBtn) {
            const originalText = copyAllBtn.innerHTML;
            copyAllBtn.innerHTML = '<i class="fas fa-check"></i> All Copied!';
            setTimeout(() => { copyAllBtn.innerHTML = originalText; }, 1500);
        }
    }).catch(() => {
        showToast('❌ Failed to copy all information', true);
    });
}

// Extract expiration date from M3U URL
function extractExpirationDate(m3uUrl) {
    try {
        const url = new URL(m3uUrl);
        const params = new URLSearchParams(url.search);
        let expDate = params.get('expiration') || params.get('expire') || params.get('expires') || params.get('validuntil') || params.get('end_date');
        
        if (expDate) {
            if (!isNaN(expDate) && expDate.length === 10) {
                const date = new Date(parseInt(expDate) * 1000);
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            }
            return expDate;
        }
    } catch(e) {}
    
    // Try to extract from path
    const pathMatch = m3uUrl.match(/\/(?:c\/)?([^\/]+)\/([^\/]+)(?:\/([^\/]+))?/);
    if (pathMatch && pathMatch[3] && pathMatch[3].includes('exp')) {
        return pathMatch[3];
    }
    
    return 'Not available in URL';
}

// Extract EPG URL
function extractEpgUrl(m3uUrl, username, password) {
    try {
        const url = new URL(m3uUrl);
        const params = new URLSearchParams(url.search);
        let epg = params.get('epg') || params.get('epg_url') || params.get('xmltv');
        if (epg) return epg;
        const baseUrl = `${url.protocol}//${url.host}`;
        return `${baseUrl}/xmltv.php?username=${username}&password=${password}`;
    } catch(e) {
        return 'Not available';
    }
}

// Main conversion function
function convertM3UtoXtream() {
    const m3uUrl = document.getElementById('m3uUrl').value.trim();
    
    if (!m3uUrl) {
        showToast('❌ Please enter an M3U playlist URL', true);
        return;
    }
    
    try {
        const url = new URL(m3uUrl);
        const params = new URLSearchParams(url.search);
        
        let username = params.get('username');
        let password = params.get('password');
        
        if (!username || !password) {
            const pathMatch = m3uUrl.match(/\/(?:c\/)?([^\/]+)\/([^\/]+)(?:\/|$)/);
            if (pathMatch) {
                username = decodeURIComponent(pathMatch[1]);
                password = decodeURIComponent(pathMatch[2]);
            }
        }
        
        const serverUrl = `${url.protocol}//${url.host}`;
        
        if (username && password) {
            currentData = {
                serverUrl: serverUrl,
                username: username,
                password: password,
                epgUrl: extractEpgUrl(m3uUrl, username, password),
                expirationDate: extractExpirationDate(m3uUrl)
            };
            
            document.getElementById('serverUrl').innerHTML = currentData.serverUrl;
            document.getElementById('username').innerHTML = currentData.username;
            document.getElementById('password').innerHTML = currentData.password;
            document.getElementById('epgUrl').innerHTML = currentData.epgUrl;
            document.getElementById('expirationDate').innerHTML = currentData.expirationDate;
            
            document.getElementById('resultContainer').style.display = 'block';
            showToast('✅ Information extracted successfully!');
            document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            showToast('❌ Could not extract username and password from the URL', true);
        }
    } catch (error) {
        showToast('❌ Invalid URL format. Please enter a valid M3U playlist URL', true);
    }
}
