[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# cli

## cli example
command
```console
./bin/openapi-extractor.js endpoints -f ./test/petstore.json
```
result
```console
GET /pets?limit={limit} - List all pets
POST /pets - Create a pet
GET /pets/{petId} - Info for a specific pet
```