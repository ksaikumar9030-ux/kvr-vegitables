# KVR Vegetables & Dry Sea Fish — Angular Lazy Loading Demo

Features:
- KVR logo/navbar
- Home
- Products
- Product details
- Cart
- Admin dashboard
- Search and category filter
- 6 vegetables: Potato, Tomato, Onion, Carrot, Cabbage, Cauliflower
- 5 dry fish: Dry Anchovies/Nethili, Dry Sardines, Dry Prawns, Dry Mackerel, Dry Ribbon Fish
- Angular lazy loading using `loadComponent` and `loadChildren`

Run:
```bash
npm install
npm start
```
Open http://localhost:4200

Lazy loading:
- `/products` loads the product route bundle only when the Products route is opened.
- Product details are lazy loaded through `loadComponent`.
- Home, Cart and Admin are also loaded on demand.

This is a frontend demo. For production, connect a backend/database, real product images, customer order storage, authentication, payments and your WhatsApp Business number.
