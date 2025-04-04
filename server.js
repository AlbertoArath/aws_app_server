const https = require("https");
const fs = require("fs");

// Read the certificate files
const options = {
    key: fs.readFileSync("private.key"),
    cert: fs.readFileSync("certificate.crt"),
};

// Create an HTTPS server
https.createServer(options, (req, res) => {
    fs.readFile("AboutMe.html", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading page");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}).listen(443, () => console.log("Secure server running on port 443"));