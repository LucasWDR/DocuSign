import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DocSignsController {
  public async index({}: HttpContextContract) {}


  public async store({}: HttpContextContract) {
    // Exmplode requisição por codigo
     const request = require('request')
     var options = {
      'method': 'POST',
      'url': 'https://api.zapsign.com.br/api/v1/docs/?api_token=1e19d1f9-69e0-4a66-b93d-e515fdf081c693b8b613-25e9-4536-b5df-76d25120449a',
      'headers': {
        'Content-Type': 'application/json'
      },
      //criar modelagem com para banco com esses dados?
      body: JSON.stringify({
        "name":"Contrato de Admissão João",
        "signers":[
        {"name":"João da Silva"},
        {"name":"Fulano Siclano"}],
        "base64_pdf":"JVBERi0xLjcNCiWhs8XXDQoxIDA..."
      })
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
    });
  }
  

  public async show({}: HttpContextContract) {}


  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
