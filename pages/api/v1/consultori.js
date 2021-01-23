// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import consultori from '../../data/JSON/consultori.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(consultori)
}