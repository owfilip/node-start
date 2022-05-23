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

handler(unhandled);

console.log('\n-------- END --------');