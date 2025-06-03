const fs = require('fs');
const http = require('http');
// TODO: Require the http module
require('http');
// TODO: Create a server
const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  switch(url.pathname){
    case '/':
      if (request.method === 'GET'){
        const name = url.searchParams.get('name');
        console.log(name);
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(response);
      }
      else if (request.method === 'POST'){
        handlePostResponse(request, response);
      }
      break;
    default:
      response.writeHead(404, {'Content-Type': 'text/html'});
      fs.createReadStream('./404.html').pipe(response);
      break;
  }
});
  // TODO: Create a url object with request url and host name

  // TODO: Create a switch statement based on pathname of url

      // TODO: Check if request method is GET

        // TODO: Get value of 'name' query

        // TODO: Write response header

        // TODO: Pipe index.html to response


      // TODO: Check if request is POST and if so, run handlePostResponse()

      // TODO: Write response header

      // TODO: Pipe 404.html to response


// TODO: Have server listen at port 4001
server.listen(4001, ()=>{console.log('Server is running on port', server.address().port)});

// Function for handling POST responses
function handlePostResponse(request, response){
  request.setEncoding('utf8');
  
  // Receive chunks on 'data' event and concatenate to body variable
  let body = '';
  request.on('data', chunk => {
    body += chunk;
  });
  
  // When done receiving data, select a random choice for server
  // Compare server choice with player's choice and send an appropriate message back
  request.on('end', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];

    const choice = body;

    let message;

    const tied = `Aww, we tied! I also chose ${randomChoice}.`;
    const victory = `Dang it, you won! I chose ${randomChoice}.`;
    const defeat = `Ha! You lost. I chose ${randomChoice}.`;

    if (choice === randomChoice) {
      message = tied;
    } else if (
        (choice === 'rock' && randomChoice === 'paper') ||
        (choice === 'paper' && randomChoice === 'scissors') ||
        (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = defeat;
    } else {
      message = victory;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
}