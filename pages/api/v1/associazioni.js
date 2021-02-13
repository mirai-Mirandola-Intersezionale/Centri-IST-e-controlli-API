import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

//JSON File Path
import arcigay from '../../data/JSON/arcigay.json'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json(
    { 
      'associazioni': {
        'arcigay': arcigay
      }
    }
  )
}