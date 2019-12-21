import express, { Request, Response } from 'express'

const app = express()
const PORT: number = 8000

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`))
