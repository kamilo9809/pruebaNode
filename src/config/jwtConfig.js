import jwt from 'jsonwebtoken';
import fs from 'node:fs';

const usuario = {
    id: 1,
    nombre: 'Javascript.com.es',
    rol: 'admin'
};

const clavePrivada = fs.readFileSync('private.key', 'utf8');
const token = jwt.sign(usuario, clavePrivada, { algorithm: 'RS256', expiresIn: '1h' });

console.log(token);