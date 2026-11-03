// tracking.js
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.downloads a[download]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag !== 'function') return;
      var fileName = link.getAttribute('download');
      gtag('event', 'file_download', {
        file_name: fileName,
        file_extension: fileName.split('.').pop().toLowerCase(),
        link_url: link.href
      });
    });
  });
});
