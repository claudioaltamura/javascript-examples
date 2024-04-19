#!/usr/bin/env node

const { program } = require('commander');
const endpoints = require('../commands/endpoints');

program
  .version('1.0.0')
  .description('extracts elements from openapi specs');

program
  .command('endpoints')
  .requiredOption('-f, --file <file>', 'Specify a file')
  .option('-t, --type <type>', 'text (default) or csv')
  .description('extracts api endpoints')
  .action((options) => {
    endpoints.execute(options.file, options.type);
  });

  program.parse(process.argv);