const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

  // console.log(req.url, req.method)

  // **** lodash ****

  console.log(_.random(0,60));

  res.setHeader('Content-Type', 'text/html');

  let path = './views/'
  console.log(req.url)

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += 'notFound.html';
      res.statusCode = 404;
  }
  
  fs.readFile(path, (err, data) =>{
    if (err)
    {
      console.log(err);
      res.end();
    }
    else{
      res.write(data);
      res.end();
    }
  })
})

server.listen(3000,'localhost', () => {
  console.timeLog("server is ready to launch into space")
})