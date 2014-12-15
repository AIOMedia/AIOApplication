var config = {
    db: {
        host: 'localhost',
        port: 27017,
        name: 'aiomedia'
    },
    modules: {
        Configuration: {
            route: '/config'
        },
        User: {
            route: '/user'
        }
    }
};

module.exports = config;