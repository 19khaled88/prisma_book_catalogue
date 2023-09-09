# prisma_book_catalogue


# All routes 


## User
1. api/v1/auth/signup (POST)
2. api/v1/users (GET)
3. api/v1/users/f91dd513-dcb0-44c2-9e6f-65e13399e954 (Single GET) 
4. api/v1/users/f91dd513-dcb0-44c2-9e6f-65e13399e954 (PATCH)
5. api/v1/users/f91dd513-dcb0-44c2-9e6f-65e13399e954 (DELETE)
6. api/v1/profile (GET)

## Category
1. api/v1/categories/create-category (POST)
2. api/v1/categories (GET)
3. api/v1/categories/76784864-5c23-44f6-be6e-2add36acc589 (Single GET)
4. api/v1/categories/76784864-5c23-44f6-be6e-2add36acc589 (PATCH)
5. api/v1/categories/76784864-5c23-44f6-be6e-2add36acc589 (DELETE) 

## Book
1. api/v1/books/create-book (POST)
2. api/v1/books (GET)
3. api/v1/books/:categoryId/category (GET) ( not added to routes )
4. api/v1/books/:id (GET)
5. api/v1/books/:id (PATCH)
6. api/v1/books/:id (DELETE)
## Order
1. api/v1/orders/create-order (POST)
2. api/v1/orders (GET)
3. api/v1/orders/:orderId (GET) ( not added to routes )