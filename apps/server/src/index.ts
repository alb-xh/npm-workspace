import express from 'express';

import { randomHello } from '@workspace/core';

const app = express();

app.get('/', (req, res) => {
	res.send(`${randomHello()} world`);
});

app.listen(3000, () => {
	console.log('Server is listening');
});
