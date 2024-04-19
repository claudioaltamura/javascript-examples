const utils = require('../lib/utils');

module.exports = {
    execute: (file,type) => {
      const endpoints = utils.extractEndpoints(file,type);
      if(type === 'csv') {
        console.log('method;path;query;summary');
      }
      Object.values(endpoints).forEach(endpoint => {
        if(type === 'csv') {
            console.log(`${endpoint.method};${endpoint.path};${endpoint.query};${endpoint.summary}`);
            return;
        }

        let line = `${endpoint.method} ${endpoint.path}`;
        if(endpoint.query) {
            line += `?${endpoint.query}`;
        }
        line += ` - ${endpoint.summary}`;
        console.log(line);
    });
    }
  };