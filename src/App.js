import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';
import { util } from '@aws-appsync/utils';

/**
 * Sends a request to get an item with id `ctx.args.id`
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {import('@aws-appsync/utils').DynamoDBGetItemRequest} the request
 */

Amplify.configure(config);

export function request(ctx) {
  return {
      operation: 'GetItem',
      key: util.dynamodb.toMapValues({ id: ctx.args.id }),
  };
}

/**
* Returns the fetched DynamoDB item
* @param {import('@aws-appsync/utils').Context} ctx the context
* @returns {*} the DynamoDB item
*/
export function response(ctx) {
  return ctx.result;
}



function App() {
  return (
    <h1>This is the Homepage!!!</h1>
  );
}

export default App;
