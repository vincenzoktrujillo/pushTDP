var Course = db.define('course',{
	id: {
		type: 'number'
	},
	name: {
		type: 'text'
	},
	vacants: {
		type: 'number'
	}
});