async function Products(request, response){
    response.status(200).send({message: "Here are the available products"})
} 

module.exports = {Products}