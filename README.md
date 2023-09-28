# GetHarley Code Challenge Submission

Bootstrapped using Vite + React with some libraries added to quickly put together an MVP (Material UI, axios, RTL)

## Setup

`npm install` then `npm run dev`

## Solution

### Products List

Can be seen at /products and accessed using the products link from the navbar

Displays a list of products as cards with their title, description and controls to add/remove them from the basket. The basket is managed by a custom context which makes it available to the navbar and the checkout page as well. It doesn't look great on mobile view but is functional. 

The category ordering has not been implemented due to time constraints.

Further work:

- Restyle product cards to display the product image and look nicer
- Categorise and order the products list based on the categories returned by the API. The current view would act as a fallback if that API request fails.
- Pagination for large amounts of results
- Separate pages for each category

### Checkout

Can be seen at /checkout and accessed using the checkout button on the navbar.

Displays a summary of the users basket and a control that will dispatch a post request to the API. If there are errors, the user will see an alert and can resubmit. if successful, order id will be displayed

Further work:

- Restyle basket summary to look nicer
- Allow the user to update quantities from this view 
- Navigate to a proper confirmation screen when the post is successful, and clear the current basket

### General further work

A few things that would be refactored with more time:

- Move urls to .env files
- Combine useGet and usePost into a useAxios if it doesnt make it too complex
- Add /orders which would show any current orders and allow the user to modify them, requiring a patch hook and an update to the order context
- Clean up the App/main files - probably dont need both
- Clean up the order context and make it a bit easier to read/maintain
- Go through and fix any TODO comments 

### Tests

Some very basic tests added for /products but only as an example to show the app builds and renders. With more time, the following would be tested


### RTL Integration tests

Top level, testing integration of components/hooks/context

- Verify that the products all display when the (mocked) endpoint returns a success response
- Verify that the help text displays when the (mocked) endpoint returns a success response with no products
- Verify failure state when (mocked) endpoint returns error
- Verify that the navbar allows the user to progress from products to order
- Verify order page displays selected order quantities
- Verify checkout button dispatches correct payload
- Verify error state if checkout fails

### Unit tests

Component level, testing the component in isolation

- Verify that the ProductCard displays product info correctly
- Verify that the ProductCard displays count from mocked context
- Verify that the ProductCard shows add button when mocked context does not have that product in the order
- Verify that the ProductCard allows quantity to be added/removed
- Verify that the OrderItem displays product info correctly
- Verify that the OrderItem displays count from mocked context
- Verify that the order context allows items to be added and removed correctly
- Verify that the useGet hook constructs correct get request
- Verify that the usePost hook constructs correct post request
