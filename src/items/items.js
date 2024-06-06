const Router = require('koa-router');

// Prefix all routes with: /items
const router = new Router({
	prefix: '/items'
});

let items = [
	{
	  "id": 200,
	  "name": "Quantum Fusion Smartphone",
	  "price": "$999.99"
	},
	{
	  "id": 201,
	  "name": "Stellar Nebula Coffee Maker",
	  "price": "$79.95"
	},
	{
	  "id": 202,
	  "name": "Luminous Moonstone Necklace",
	  "price": "$149.00"
	},
	{
	  "id": 203,
	  "name": "Galactic Explorer VR Headset",
	  "price": "$299.99"
	}
  ];

// Routes
router.get('/', (ctx, next) => {
	ctx.body = items;
	next();
});

module.exports = router;