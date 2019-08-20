exports.up = function(knex) {
  return knex.schema.createTable('emails', emails => {

    emails.increments();

    emails
      .string('email', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('emails');
};
