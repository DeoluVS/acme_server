async function Welcome(request, response){
    response.status(200).send({message: "Welcome to Acme Ecommerce"})
} 

module.exports = {Welcome}