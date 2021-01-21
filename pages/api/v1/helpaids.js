// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import helpaids from '../../data/JSON/helpaids.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(helpaids)
}
