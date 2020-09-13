import { hash } from 'bcryptjs';
import { Router } from 'express';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  // eslint-disable-next-line prettier/prettier
  const {body} = request;

  // eslint-disable-next-line prettier/prettier
  try {

    const qrCodeString = await hash(JSON.stringify(body), 10);
    // eslint-disable-next-line prettier/prettier
    return response.json({ qrCodeString });

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
