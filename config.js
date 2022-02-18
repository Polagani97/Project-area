const config = require('yargs')
    .usage('Usage: $0 [options]')
    .describe('v', 'possible values: "error", "warn", "info", "debug"')
    .describe('n', 'instance name. used as mqtt client id and as prefix for connected topic')
    .describe('t', 'hostname or ip address of webos tv')
    .describe('u', 'mqtt broker url')
    .describe('h', 'show help')
    .alias({
        h: 'help',
        n: 'name',
        t: 'tv',
        u: 'url',
        v: 'verbosity'
    })
    .default({
        u: 'mqtt://192.168.254.149',
        n: 'lgtv',
        t: 'lgwebostv',
        v: 'info'
    })
    .version()
    .help('help')
    .argv;

module.exports = config;