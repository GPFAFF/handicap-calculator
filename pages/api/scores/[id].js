import nc from 'next-connect';
import cors from 'cors';
import scores from '../../../src/data/data';

const getScore = id => scores.find(score => score.id === parseInt(id))

const handler = nc()
  .use(cors())
  .get((req, res) => {
    const score = getScore(req.query.id)

    if (!score) {
      res.statusCode(404)
      res.end()
      return
    }

    res.json({ data: score })
  })
  .patch((req, res) => {
    const score = getScore(req.query.id)
    if (!score) {
      res.statusCode(404)
      res.end()
      return
    }

    const i = scores.findIndex(n => n.id === parseInt(req.query.id))
    const updated = { ...score, ...req.body }

    scores[i] = updated
    res.json({ data: updated })
  })
  .delete((req, res) => {
    const score = getScore(req.query.id)

    if (!score) {
      res.status(404)
      res.end()
      return
    }

    const i = scores.findIndex(n => n.id === parseInt(req.query.id))

    scores.splice(i, 1)

    res.json({ data: req.query.id })
  })


export default handler
