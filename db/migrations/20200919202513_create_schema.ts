import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.createSchema('public');
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropSchema('public');
}
