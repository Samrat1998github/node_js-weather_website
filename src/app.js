const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forcast=require('./utils/forcast')


const app=express()
const port=process.env.PORT || 5050



const partials_path=path.join(__dirname,'../templates/partials')
const views_path=path.join(__dirname,'../templates/views')




app.set('view engine','hbs')
app.set('views',views_path)
hbs.registerPartials(partials_path)


app.use(express.static(path.join(__dirname,'../public')))


app.get('',(req,res)=>{
    console.log('we are in home page........')
    res.render('index',{
        title: 'weather',
        name: 'samrat'
    })
})



app.get('/help',(req,res)=>{
    console.log('we are in help route........')
    res.render("help",{
        title:'help',
        name:'samrat'
    })
})



app.get('/about',(req,res)=>{
    console.log('we are in about route..........')
    res.render('about',{
        title : 'about',
        name : 'samrat'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'please provide the address'
        })
    }

    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forcast(data.latitude,data.longitude,(error,dataa)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                
                forcast: dataa,
                location:data.location,
                address:req.query.address
            })
        })
    })
    
})


app.get('/products',(req,res)=>{
    
    if(!req.query.search){
        return res.send({
            arror:'you must provide  search'
        })
    }
    
    console.log(req.query.search)
    console.log(req.query.rating)
    res.send({
        name:'samrat',
        products: []
    })
})




app.listen(port,(req,res)=>{
    console.log('server is running..............')
})