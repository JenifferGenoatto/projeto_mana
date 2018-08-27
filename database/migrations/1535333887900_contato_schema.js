'use strict'

const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contatoes', (table) => {
      table.increments()
      table.string('tipo', 2)
      table.string('descricao')
      table.string('valor')
      table.timestamps()
    })
  }

  down () {
    this.drop('contatoes')
  }
}

module.exports = ContatoSchema
