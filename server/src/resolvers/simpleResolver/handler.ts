/**
 * This file was generated using 8base CLI.
 * 
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 * 
 * https://docs.8base.com/8base-console/custom-functions/resolvers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    resolver:
 *      ...
 * 
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * To invoke this function locally, run:
 *  8base invoke-local simpleResolver -p src/resolvers/simpleResolver/mocks/request.json
 */

/**
 * Simple GraphQL query
 * that returns all notes 
 * matching a search param.
 */
const simpleQuery = `
	query($search: String!) {
	  notesList(filter: {
	    body: {
	      contains: $search
	    }
	  }) {
	  	count
	  }
	}
`;

type ResolverResult = {
  data: {
    result: string
  },
  errors: Array<object>
};

export default async (event: any, ctx: any) : Promise<ResolverResult> => {
  let resp;
  let errors = [];
  let { search } = event.data;

  /* Query API for notes */
  try {
  	resp = await ctx.api.gqlRequest(simpleQuery, { search });
  }
  catch (e) {
  	console.error(e)
  	errors.push(e)
  }

  console.log("Resp: ", resp)

  return {
    data: { 
    	result: `You have ${resp.notesList.count} notes containing ${search}!`
    },
    errors
  };
};