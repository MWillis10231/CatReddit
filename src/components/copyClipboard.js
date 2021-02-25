// Doesn't work needs fixing

export default function copyURL(url) {
  navigator.clipboard.writeText(url).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
  }
  