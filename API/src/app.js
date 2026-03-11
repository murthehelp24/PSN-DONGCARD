import express from 'express'

const app = express()
app.use(express.json())


app.use('/api/auth', (req, res)=> {
  console.log('auth')
})

app.use('/api/post',(req, res)=> {
  console.log('post')
} )


export default app