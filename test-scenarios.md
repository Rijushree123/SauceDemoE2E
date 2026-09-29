# SauceDemo Playwright Test Scenarios

## 1. Login with valid credentials

### Goal
Verify a valid user can log in successfully.

### Steps
1. Open the SauceDemo login page.
2. Enter username as `standard_user`.
3. Enter password as `secret_sauce`.
4. Click the login button.
5. Verify the user is redirected to the inventory page.
6. Confirm the `Products` header is visible.

---

## 2. Login with locked user

### Goal
Verify a locked user is blocked from logging in.

### Steps
1. Open the login page.
2. Enter username as `locked_out_user`.
3. Enter password as `secret_sauce`.
4. Click the login button.
5. Verify the error message is displayed.
6. Confirm the user remains on the login page.

---

## 3. Add a product to cart

### Goal
Verify a product can be added to the shopping cart.

### Steps
1. Log in with a valid user.
2. Locate the product card for `Sauce Labs Backpack`.
3. Click the Add to Cart button.
4. Verify the cart badge count increases to 1.
5. Open the cart.
6. Confirm the selected product is visible in the cart.

---

## 4. Remove product from cart

### Goal
Verify a product can be removed from the cart.

### Steps
1. Add a product to the cart.
2. Open the cart page.
3. Click the Remove button for the product.
4. Verify the product is no longer displayed.
5. Confirm the cart is empty or the count is reduced.

---

## 5. Checkout with valid customer details

### Goal
Verify a user can proceed through checkout successfully.

### Steps
1. Log in with a valid user.
2. Add a product to the cart.
3. Open the cart.
4. Click Checkout.
5. Enter first name, last name, and postal code.
6. Click Continue.
7. Verify the checkout overview page loads.
8. Click Finish.
9. Verify the order completion page is displayed.

---

## 6. Checkout with missing information

### Goal
Verify validation occurs when required checkout fields are empty.

### Steps
1. Log in with a valid user.
2. Add one product to the cart.
3. Go to the checkout page.
4. Leave one or more required fields empty.
5. Click Continue.
6. Verify the error message is shown.
7. Confirm the user remains on the checkout form.

---

## 7. Complete purchase flow (E2E)

### Goal
Validate the end-to-end purchase flow from login to confirmation.

### Steps
1. Open SauceDemo login page.
2. Log in with `standard_user` / `secret_sauce`.
3. Add a product to cart.
4. Open the cart.
5. Click Checkout.
6. Fill customer details.
7. Continue to overview.
8. Finish the order.
9. Verify the order confirmation message is visible.
10. Confirm the URL indicates order completion.

---

## 8. Logout flow

### Goal
Verify the user can log out properly.

### Steps
1. Log in with a valid user.
2. Open the menu button in the top-left.
3. Click Logout.
4. Verify the user is redirected to the login page.
5. Confirm the login form is visible again.

---

## Recommended first test to automate

Start with:
- Login with valid credentials
- Add a product to cart
- Complete purchase flow

These give the strongest foundation for a Page Object Model project.
