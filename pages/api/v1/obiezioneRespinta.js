// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import obiezioneRespinta from '../../data/JSON/obiezioneRespinta.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(obiezioneRespinta)
}