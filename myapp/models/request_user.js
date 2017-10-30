var request_user = db.define('request_user',{
	id: {
		type: 'number'
	},
	request_id: {
		type: 'number'
	},
	user_id: {
		type: 'text'
	}
});