// document.addEventListener('DOMContentLoaded', function() {
//     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//       const currentUrl = tabs[0].url;
//       console.log("currenturl - :", currentUrl)
//       document.getElementById('url').innerText = currentUrl;
//     });
  
//     document.getElementById('shortenBtn').addEventListener('click', function() {
//       document.getElementById('shortenBtn').disabled = true;
//       document.getElementById('loader').style.display = 'block';
      
//       chrome.runtime.sendMessage({ action: 'shortenUrl', url: currentUrl }, response => {
//         document.getElementById('shortenBtn').disabled = false;
//         document.getElementById('loader').style.display = 'none';
//         document.getElementById('result').innerText = response.shortUrl;
//         console.log("output - : ", response)
//       });
//     });
//   });
  


document.addEventListener('DOMContentLoaded', function() {
    let currentUrl; // Declare currentUrl outside the callback to make it accessible globally
  
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      currentUrl = tabs[0].url;
      console.log("currenturl - :", currentUrl);
      const linkText = "Current Tab Link: ";
      const fullText = linkText + `<a class="tab-url">${currentUrl}</a>`
      document.getElementById('url').innerHTML = fullText;
    });
  
    document.getElementById('shortenBtn').addEventListener('click', function() {
      document.getElementById('shortenBtn').disabled = true;
      document.getElementById('loader').style.display = 'block';
  
      chrome.runtime.sendMessage({ action: 'shortenUrl', url: currentUrl }, response => {
        document.getElementById('shortenBtn').disabled = false;
        document.getElementById('loader').style.display = 'none';
        document.getElementById('result').innerHTML = `<a href=${response.shortUrl} target="_blank" class="short-url-response">${response.shortUrl}</a>`;
        console.log("output - : ", response);
      });
    });
  });
  