const fs = require('fs');
const {JSONPath} = require('jsonpath-plus');

class Endpoint {
    constructor(path, method, summary, query) {
        this.path = path;
        this.method = method;
        this.summary = summary;
        this.query = query;
    }
}

module.exports = {
    extractEndpoints: (filePath) => {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const paths = JSONPath({path: 'paths', json: JSON.parse(jsonData)});
        const endpoints = [];
        Object.entries(paths[0]).forEach(([key, value]) => {
            const path = key;
            //console.log(`endpoint ${path}`);
            Object.entries(value).forEach(([key, value]) => {
                const method = key.toUpperCase();
                //console.log(`method ${method}`);
                const summary = value.summary 
                //console.log(value.summary);
                let query = '';
                if (value.parameters) {
                    value.parameters.forEach((parameter) => {
                        if (parameter.in === 'query') {
                            query += `${parameter.name}={${parameter.name}}&`;
                            //console.log(`${parameter.name}={${parameter.name}}`);
                        }
                    });
                    query = query.slice(0, -1);
                }
                //console.log(`query ${query}`);
                const endpoint = new Endpoint(path, method, summary, query);
                endpoints.push(endpoint);    
            })
        });
        return endpoints;
    }
  };