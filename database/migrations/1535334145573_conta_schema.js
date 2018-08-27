'use strict'

const Schema = use('Schema')

class ContaSchema extends Schema {
  up () {
    this.create('contas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('contas')
  }
}

module.exports = ContaSchema
