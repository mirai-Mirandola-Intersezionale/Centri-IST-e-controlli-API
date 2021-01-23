// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import centriHiv from '../../data/JSON/centriHiv.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(centriHiv)
}
