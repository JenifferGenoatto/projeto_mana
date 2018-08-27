'use strict'

const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('razao').notNullable()
      table.string('cnpj').notNullable()
      table.string('fantasia')
      table
        .integer('endereco_id')
        .unsigned()
        .references('id')
        .inTable('enderecos')
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
