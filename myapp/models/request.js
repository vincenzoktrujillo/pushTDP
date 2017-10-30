var Request = db.define('request',{
	id: {
		type: 'number'
	},
	course_id: {
		type: 'number'
	},
	vacants: {
		type: 'number'
	},
	filled: {
		type: 'number'
	}
});