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
 *    webhook:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * To invoke this function locally, run:
 *  8base invoke-local simpleWebhook -p src/webhooks/simpleWebhook/mocks/request.json
 */

/**
 * Simple GraphQL query
 * that returns all notes 
 * matching a search param.
 */
const simpleQuery = `
	query {
	  notesList {
	  	count
	    items {
	      body
	    }
	  }
	}
`;

type WebhookResult = {
  statusCode: number,
  body: string,
};

export default async (event: any, ctx: any) : Promise<WebhookResult> => {
  let response;

  try {
    /* Query API for notes */
    response = await ctx.api.gqlRequest(simpleQuery)
  
  /* Handle errors for failed API call */
  } catch (e) {
  	console.error(e)
	  return {
	    statusCode: 500,
	    body: JSON.stringify({
	      result: 'Something happened...',
	    }),
	  };  	
  }

  console.log(response)
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};