'use strict'

const Schema = use('Schema')

class VendedorSchema extends Schema {
  up () {
    this.create('vendedors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('vendedors')
  }
}

module.exports = VendedorSchema
