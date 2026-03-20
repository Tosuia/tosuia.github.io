// tracking.js

// 1. Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Select all links within your 'downloads' list
    const downloadLinks = document.querySelectorAll('.downloads a[download]');

    // 3. Loop through each link to attach a click listener
    downloadLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            // Extract the filename from your existing 'download' attribute
            const fileName = this.getAttribute('download');

            // 4. Send the event to GA4 if the tracking script is loaded
            if (typeof gtag === 'function') {
                gtag('event', 'file_download', {
                    'file_name': fileName,
                    'file_extension': 'pdf',
                    'link_url': this.href
                });
            }
            
            // Optional: Log to console so you can verify it works locally
            console.log('Tracked download for:', fileName);
        });
    });
});