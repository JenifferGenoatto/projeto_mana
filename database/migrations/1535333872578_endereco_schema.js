'use strict'

const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.string('cep', 8)
      table.string('logradouro')
      table.string('nro')
      table.string('bairro')
      table.string('localidade')
      table.string('complemento')
      table.string('uf', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema
