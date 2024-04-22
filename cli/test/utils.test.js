const { extractEndpoints } = require('../lib/utils');

describe('endpoints file', () => {
    test('file not found', () => {
        expect(() => {
            extractEndpoints("notexisting.json");
        }).toThrowError("File not found");
    });
});

describe('endpoints results', () => {
    test('check paths - one path', () => {
        const endpoints = extractEndpoints("./test/petstore.json");
        const regex = /pets/;
        const paths = endpoints.map(endpoint => endpoint.path);
        expect(paths.length).toBe(3);
    });
    test('check methods - one post method', () => {
        const endpoints = extractEndpoints("./test/petstore.json");
        const specificMethod = endpoints.find(endpoint => endpoint.method === "POST");
        expect(specificMethod).toBeDefined();
    });
    test('check queries - one query', () => {
        const endpoints = extractEndpoints("./test/petstore.json");
        const specificQuery = endpoints.find(endpoint => endpoint.query === "limit={limit}");
        expect(specificQuery).toBeDefined();
    });
  });