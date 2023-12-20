import express from 'express';
import albums from './albums/index.js';
import pictures from './pictures/index.js';

const routes = express();

// les routes utilisés dans albums/index.js seront préfixés d' /albums
// http://localhost:3000/api/albums
routes.use('/albums', albums);

routes.use('/pictures', pictures);

export default routes;