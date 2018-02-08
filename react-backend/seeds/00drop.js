
exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(() => knex('articles').del())
    .then(() => knex('users').del())
};
