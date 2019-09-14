#!/bin/bash

# run:
# 	sh script.sh "SEARCH TERM"

curl -X POST "https://api.8base.com/ck0jrdzrw01zc01me52y73y9b" \
     -H "Content-Type: application/json"  \
     -d '{ "query": "query { notesList { count items { body } } }" }'

