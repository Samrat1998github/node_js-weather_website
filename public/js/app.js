
//console.log('client side java script')

// fetch('http://localhost:5050/weather?address=kolkata').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.forcast)
//         }
//     })
// })

const weatherform = document.querySelector('form')
const search=document.querySelector('input')
const msg_1=document.querySelector('#msg_1')
const msg_2=document.querySelector('#msg_2')


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()    

    const location=search.value

    msg_1.textContent='loading..........'
    msg_2.textContent=''

    fetch('http://localhost:5050/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                msg_1.textContent=data.error
            //    console.log(data.error)
            }
            else{
                msg_1.textContent=data.location
                msg_2.textContent=data.forcast
                // console.log(data.location)
                // console.log(data.forcast)
            }
        })
    })
})
