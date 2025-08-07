# 📦 Order Event Emitter System

This is a simple Node.js project demonstrating the use of `EventEmitter` to simulate an order processing system. When an order is placed, multiple listeners are triggered to perform various tasks like notifying the admin, sending confirmation emails, and logging the order.

## 🧠 Concepts Covered

- Node.js `EventEmitter`
- Event-driven architecture
- Modular code structure


## ⚙️ How It Works

1. `orderEvent.js` creates and exports an instance of `EventEmitter`.
2. `index.js` registers multiple listeners for the `"orderPlaced"` event.
3. When `placeOrder()` is called, it emits the `"orderPlaced"` event with order data.
4. All registered listeners respond and log their respective messages.

## 🚀 Run the Project

```bash
node index.js
```

## 📌 Example Output

- 🛒 Placing order...
- 📦 Order placed for MacBook Pro (x1)
- 📢 Notifying admin about new order: MacBook Pro
- 📧 Sending email to customer: "user@example.com"



