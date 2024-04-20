**E-commerce - API Design**

This document outlines the high-level design of the API for managing products, brands, and categories within the E-commerce Platform. It leverages techniques like DRY, middleware for request handling, and integrates authentication and data validation concepts.

**Models**

- **Product:**
  - Properties: `title`, `description`, `price`, `categoryId` (ID reference), `brand` (ID reference), `subcategory` (optional, ID reference), `images` (array of URLs)
- **Category:**
  - Properties: `name`, `description` (optional)
- **Brand:**
  - Properties: `name`, `description` (optional)
- **User** (Future Implementation):
  - Properties: `name`, `email`, `password` (hashed)

**Authentication** (Future Implementation)

This initial version lacks user authentication. Future updates will introduce API endpoints for user registration, login, and authorization with token-based authentication (e.g., JWT).

**Data Validation**

The API will utilize Express Validator middleware to enforce data integrity and prevent invalid inputs. Validators will be applied to request bodies of relevant endpoints (e.g., product creation/update).

**DRY (Don't Repeat Yourself)**

Reusable functions and middleware will be employed to streamline code and minimize redundancy. Examples include:

- **Common error handling middleware:** Handles errors uniformly, returning a JSON response with relevant error codes and messages.
- **Data validation functions:** Defines validation rules for product, category, and brand properties, ensuring consistent validation across endpoints.
- **Reused CRUD functions:** Handle main crud ops useing a reused methods.

**Middleware**

Several middleware components will be implemented for request processing:

- **Authentication middleware (future):** Validates user tokens for authorized access.
- **Data parsing middleware:** Parses incoming request bodies (e.g., JSON) into usable data structures.
- **Validation middleware:** Validates request parameters and body data according to predefined rules.
- **Error handling middleware:** Handles exceptions and errors globally, providing informative error responses.

**API Endpoints**

**Products**

- **GET /products:** Retrieves a list of products (with filtering/pagination options).
- **GET /products/:id** Retrieves a single product by ID.
- **POST /products** (Requires authentication): Creates a new product.
- **PUT /products/:id** (Requires authentication): Updates an existing product.
- **DELETE /products/:id** (Requires authentication): Deletes a product.

**Categories**

- **GET /categories:** Retrieves a list of categories.
- **GET /categories/:id:** Retrieves a single category by ID.
- **POST /categories** (Requires authentication): Creates a new category.
- **PUT /categories/:id** (Requires authentication): Updates an existing category.
- **DELETE /categories/:id** (Requires authentication): Deletes a category.

**Brands** (Similar Structure to Categories)

These endpoints will implement similar functionality as Categories, with validations and authentication considerations for future implementation.

**Additional Notes**

- Refer to the Postman API collection (assuming deployed) for detailed examples on request bodies and response formats.
- Postman API : https://documenter.getpostman.com/view/19040062/2sA3BoaX8c .


