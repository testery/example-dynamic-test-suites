const Router = require('koa-router');

const router = new Router({
	prefix: '/employees'
});

let employees = [
	{ id: 100, name: 'John Doe', age: 30, position: 'Software Engineer'},
	{ id: 101, name: 'Jane Doe', age: 25, position: 'Web Developer'},
	{ id: 102, name: 'Jim Doe', age: 22, position: 'Intern'},
	{ id: 103, name: 'Jill Doe', age: 35, position: 'Project Manager'},
	{ id: 104, name: 'James Doe', age: 42, position: 'Barista'}
];

// Routes
router.get('/', (ctx, next) => {
	ctx.body = employees;
	next();
});

module.exports = router;
