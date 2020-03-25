import knex from 'knex';
import configuration from '../../knexfile';

const connetion = knex(configuration.development);

module.exports = connetion;