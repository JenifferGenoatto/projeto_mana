'use strict'

const Schema = use('Schema')

class SafraSchema extends Schema {
  up () {
    this.create('safras', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('safras')
  }
}

module.exports = SafraSchema
