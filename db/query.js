var pg = require('./connection');

function getAll() {
		return pg('cartoon').select('*');
		// res.render('Herro')
	// Get all cartoons and return them to the route
}

function getOne(id) {
		return pg('cartoon').first().where('id', id);
	// Get one cartoon by the id and return it
}

function create(cartoon) {
	return pg('cartoon').insert(cartoon)
	// Add a cartoon to the database
}

function update(id, cartoon) {
	return pg('cartoon').update(cartoon).where('id', id)
	// Update a cartoon with the specified id
}

function remove(id) {
	return pg('cartoon').where('id', id).del()

	// Delete the specified cartoon
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
