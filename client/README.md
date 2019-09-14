# Usage

Go into the `contacts.sh` file and replace the following variables with valid values.

1. API_TOKEN=<YOUR_API_TOKEN>
2. WORKSPACE_ENDPONT=<YOUR_WORKSPACE_ENDPOINT>

## CURL
There are three commands. 

### all
`bash contacts.sh all`

### id
`bash contacts.sh id "123_id_of_some_record"`

### query
`bash contacts.sh query "{ contactsList { count } }"`

## BROWSER
There are three HTTP options.

### all
`https://api.8base.com/<WORKSPACE_ID>/webhook/contacts?type=all`

### id
`https://api.8base.com/<WORKSPACE_ID>/webhook/contacts?type=id&value=<CONTACT_ID>`

### query
*Note: `query` only queries by the email field, as it is difficult passing an query object through the browser's URL input*
`https://api.8base.com/<WORKSPACE_ID>/webhook/contacts?type=query&value=<SOME_QUERY>`
