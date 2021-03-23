import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

//JSON File Path
import arcigay from '../../data/JSON/arcigay.json'
import ist from '../../data/JSON/centriIST.json'
import hiv from '../../data/JSON/centriHIV.json'
import helpaids from '../../data/JSON/helpaids.json'
import infoTrans from '../../data/JSON/infoTrans.json'
import obiezioneRespinta from '../../data/JSON/obiezioneRespinta.json'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json(
    { 
      'strutture':{
        'associazioni': {
          'arcigay': arcigay
        },
        'consultori':{
          obiezioneRespinta
        },
        'centri_test':{
          ist,
          hiv,
          helpaids,
          infoTrans
        }
      }
      
    }
  )
}