## Introduction

This is an online e-commerce API that is built on Express and MongoDB. And I have used TypeScript.

> Base_URL: ecommere.com/api_/v1/

## Customer Features

- Customers can add products to their cards and create orders.

- Customers can confirm orders and delete orders if they haven't confirmed them.

- Customers can create, edit, and delete their addresses.

## Admin Features

- Admins can create, update, and delete all products and orders.

- Admins can watch all the customers and their addresses.

## Upcomming Features

- To disable customers as an admin.

- Payment systems. 

### API End Points and Methods

- ***Endpoints that can be accessed by customers are as follows:***


|                |url                          |methods                        
|----------------|-------------------------------|------------------------
|*Base_URl*     |/products <br> /products/id      | GET
|*Base_URl*        |/cart            |GET          |
|*Base_URl*        |/orders <br>   /orders/id    |POST, GET, PUT, DELETE|
|*Base_URl*        |/address <br>   /address/id <space>    |POST, GET, PUT, DELETE|

- ***Endpoints that can be accessed by admins are as follows:***


|                |url                          |methods                        |
|----------------|-------------------------------|------------------------
*Base_URl*        |/customers <br>   /customers/id  |POST, GET, UPDATE, PUT|
|*Base_URl*     |/products <br> /products/id      | POST, GET, PUT, DELETE|
|*Base_URl*        |/orders <br>   /orders/id    |POST, GET, PUT, DELETE|
|*Base_URl*        |/address <br>   /address/id <space>    |POST, GET, UPDATE, PUT|