import nc from 'next-connect';
import cors from 'cors';
import scores from '../../../src/data/data';

const handler = nc()
  .use(cors())
  .get((req, res) => {
    res.json({ data: scores })
  })
  .post((req, res) => {
    const id = Date.now();
    const score = { ...req.body, id }
    scores.push(score);
    res.json({ data: score })
  });

export default handler;
