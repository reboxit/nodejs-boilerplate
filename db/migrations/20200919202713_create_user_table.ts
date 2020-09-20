import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTableIfNotExists('users', (tableBuilder) => {
    tableBuilder.uuid('id').primary('users_pk');
    tableBuilder.string('email').unique('users_index_email');
    tableBuilder.string('firstName');
    tableBuilder.string('lastName');
    tableBuilder.string('password');
    tableBuilder.string('status');
    tableBuilder.timestamp('created_at');
    tableBuilder.timestamp('updated_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists('users');
}
