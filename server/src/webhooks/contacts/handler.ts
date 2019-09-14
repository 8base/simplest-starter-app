/**
 * This file was generated using 8base CLI.
 * 
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 * 
 * https://docs.8base.com/8base-console/custom-functions/webhooks
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    allContacts:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * To invoke this function locally, run:
 *  8base invoke-local allContacts -p src/webhooks/allContacts/mocks/request.json
 */

const queryAll = async (api) => {
	return await api.gqlRequest(`
		query { 
			contactsList { 
				count 
				items { 
					id 
					firstName 
					lastName 
					email 
				} 
			} 
		}
	`)
} 

const queryId = async (api, id) => {
	return await api.gqlRequest(`
		query($id: ID!) { 
			contact(id: $id) { 
				firstName 
				lastName 
				email 
			} 
		}
	`, { id })
}

const queryEmail = async (api, email) => {
	return await api.gqlRequest(`
		query($email: String!) {
			contactsList(filter: {
				email: {
					contains: $email
				}
			})  {
				items {
					firstName 
					lastName 
					email 
				} 
			}
		}
	`, { email })
}

type WebhookResult = {
  statusCode: number,
  body: string,
};

export default async (event: any, ctx: any) : Promise<WebhookResult> => {
  /* Accessing pathParameters from the event object */
  let { type, value } = event.data;
  let result: any;

  if (type === 'all') {
  	result = await queryAll(ctx.api);
  } 
  else if (type === 'id') {
  	result = await queryId(ctx.api, value);
  } 
  else if (type === 'query') {
  	result = await queryEmail(ctx.api, value);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};




