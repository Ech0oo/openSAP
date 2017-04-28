let http = require('http');
let url = require('url');
let crypto = require('crypto');
let cipher = 


http.createServer(function(b_req, b_res) {
    let b_url = url.parse(b_req.url, true);

    // let auth =

    let p_options = {
        hostname: 'sapes4.sapdevcenter.com',
        path: '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/$metadata',
        method: 'GET',
        headers: {
            'Authorization': `Basic fdassdfa ${auth}`
        }
    };
    console.log(p_options);

    b_res.statusCode = 200;
    b_res.setHeader('Content-type', 'text/plain');
    b_res.end();
    // let p_req = http.request(p_options, )
    // if (!b_url.query) return notFound(b_res);
    //
    // let p_url = url.parse(b_url.query.url);
    // let p_client = http.createClient(p_url.port || 80, p_url.hostname);
    // let p_req = p_client.request('GET', p_url.pathname || "/", {
    //     host: p_url.hostname
    // });
    //
    // p_req.end();
    //
    // p_req.addListener('response', function(p_res){
    //     // Pass through headers
    //     b_res.writeHead(p_re.statusCode, p_res.headers);
    //
    //     // Pass through data
    //     p_res.addListener('data', function(chunk) {
    //         b_res.write(chunk);
    //     })
    // });
    //
    // //End request
    // p_res.addListener('end', function() {
    //     b_res.end();
    // });

}).listen(3005, "127.0.0.1");

console.log('Server starts at 3005 port ..');

// function notFound(res) {
//     res.writeHead(404, "text/plain");
//     res.end("404: File not found");
// }
