'use strict'

const Schema = use('Schema')

class CentroCustoSchema extends Schema {
  up () {
    this.create('centro_custos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('centro_custos')
  }
}

module.exports = CentroCustoSchema
