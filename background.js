// This code makes api request to url shortning service provided by freetoolsarebest.com
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'shortenUrl') {
      const url = encodeURIComponent(request.url);
      if (url !== null || url !== undefined){
        console.log(url)
        fetch(`https://white-dibbler-belt.cyclic.app/short-url?url=${url}`)
            .then(response => response.json())
            .then(data => sendResponse(data))
            .catch(error => console.error(error));
        return true; // to make sendResponse asynchronous
      }
      else{
        console.log("error - no url")
      }
    }
  });