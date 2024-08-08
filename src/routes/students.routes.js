import { Router } from 'express'
import { getAll } from '../controllers/students.controller.js'

const router = Router()

router.get('/getAll', getAll)
  
export default router