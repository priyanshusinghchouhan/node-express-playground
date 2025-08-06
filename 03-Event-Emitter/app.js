// index.js
const emitter = require("./orderEvent");

// Listeners
emitter.on("orderPlaced", (order) => {
  console.log(`📦 Order placed for ${order.item} (x${order.quantity})`);
});

emitter.on("orderPlaced", (order) => {
  console.log(`📢 Notifying admin about new order: ${order.item}`);
});

emitter.on("orderPlaced", (order) => {
  console.log(`📧 Sending email to customer: "${order.customerEmail}"`);
});

// Simulating order placement
const placeOrder = (item, quantity, customerEmail) => {
  const order = { item, quantity, customerEmail };
  console.log("🛒 Placing order...");
  emitter.emit("orderPlaced", order);
};

// Trigger it
placeOrder("MacBook Pro", 1, "user@example.com");
