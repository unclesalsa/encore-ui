module.exports = {
    build: {
        src: ['<%= config.dist %>/*']
    },
    templates: {
        src: ['templates']
    },
    coverage: {
        src: ['coverage']
    },
    rxPageObjects: {
        src: 'index.js'
    }
};