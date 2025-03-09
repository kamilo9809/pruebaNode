import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        title: 'API para la prueba de nodjs',
        description: 'una api para realizar la prueba de la api',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/index.js'];

swaggerAutogen(outputFile, endpointsFiles).then(async() => {
    console.log('Swagger documentation generated successfully');
}).catch(console.error);