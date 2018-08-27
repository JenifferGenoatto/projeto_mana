'use strict'

const Schema = use('Schema')

class DespesaSchema extends Schema {
  up () {
    this.create('despesas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('despesas')
  }
}

module.exports = DespesaSchema
