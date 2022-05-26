interface Request {
  method: string, 
  url: string;
}

const handleGetRecipes = (request: Request) => { console.log('List recipes ==> ', request); return; }
const handleGetProducts = (request: Request) => { console.log('List available products ==> ', request); return; }
const handlePostRecipe = (request: Request) => { console.log('Create recipe ==> ', request); return; }
const unhandledRequest = (request: Request) => { console.log('Unhandled request ==> ', request); return };

const requestsMap: { [requestKey: string]: Function} = {
  'GET:/recipes': handleGetRecipes,
  'GET:/products': handleGetProducts,
  'POST:/recipes': handlePostRecipe
}

function handler(request: Request): void {
  const requestKey = `${request.method}:${request.url}`;
  return requestsMap[requestKey] ? requestsMap[requestKey](request) : unhandledRequest(request);
}

const getRecipes: Request = { method: 'GET', url: '/recipes' }
const getProducts: Request = { method: 'GET', url: '/products' }
const postRecipe: Request = { method: 'POST', url: '/recipes' }
const unhandled: Request = { method: 'PUT', url: '/product' }

console.log('\n------- START -------\n');
console.log('---- Functional approach ---');
handler(unhandled);


console.log('\n---- If-Else-If approach ---')
const request = getRecipes;

if (request.method === 'GET' && request.url === '/recipes') {
  console.log('List recipes ==> ', request);
} else if (request.method === 'GET' && request.url === '/products') {
  console.log('List available products ==> ', request);
} else if (request.method == 'POST' && request.url === '/products') {
  console.log('Create recipe ==> ', request);
} else {
  console.log('Unhandled request ==> ', request);
}


console.log('\n---- Switch-case approach ---');
const requestKey = `${request.method}:${request.url}`;

switch (requestKey) {
  case 'GET:/recipes': {
    console.log('List recipes ==> ', request);
    break;
  }
  case 'GET:/products': {
    console.log('List available products ==> ', request);
    break;
  }
  case 'POST:/recipes': {
    console.log('Create recipe ==> ', request);
    break;
  }
  default: {
    console.log('Unhandled request ==> ', request);
  }
}


console.log('\n-------- END --------');
