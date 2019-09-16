#!/bin/bash

# Data variable
DATA="none"
API_TOKEN='<YOUR_API_TOKEN>'
WORKSPACE_ENDPOINT='<YOUR_WORKSPACE_ENDPOINT>'

# Check for shell arguments.
case $1 in
	"all")
	  DATA='{"query": "query { contactsList { count items { id firstName lastName email } } }"}'
	  ;;
	"id")
	  DATA='{"query": "query { contact(id: \"'"$2"'\") { firstName lastName email } }"}'
	  ;;
	"query")
	  DATA='{"query": "query '"$2"'"}'
	  ;; 
	*)
	  echo "Hmm, that didn't work. Try specifying 'all', 'id', or 'query'!"
	  ;;
esac
# If the data var has been
# set run the post request.
if [ "$DATA" == "none" ] 
then
	echo "Exiting..."
else
	curl -X POST $WORKSPACE_ENDPOINT \
	     -H "Content-Type: application/json"  \
	     -H "Authorization: Bearer $API_TOKEN"  \
	     -d "$DATA" | json_pp
fi
