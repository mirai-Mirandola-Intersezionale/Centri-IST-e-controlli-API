// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import arcigay from '../../data/JSON/arcigay.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(arcigay)
}
