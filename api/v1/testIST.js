// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import centriIST from '../../data/JSON/centriIST.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(centriIST)
}
