'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobsSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description').nullable()
      // set default value to null to avoid error  when creating a new job without a user id 
      table.integer('user_id').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobsSchema
