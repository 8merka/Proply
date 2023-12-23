// swagger.js

const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "title": "Your API",
    "version": "1.0.0"
  },
  "paths": {
    "/api/PostUser": {
      "post": {
        "summary": "Create a new user",
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "description": "User to add",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "login": { "type": "string" },
                "password": { "type": "string" },
                "city": { "type": "string" },
                "phone": { "type": "string" },
                "email": { "type": "string" },
                "role": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "All fields must be filled"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/login": {
      "post": {
        "summary": "User Login",
        "parameters": [
          {
            "in": "body",
            "name": "UserLogin",
            "description": "User credentials",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "login": { "type": "string" },
                "password": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful login",
            "schema": {
              "type": "object",
            }
          },
          "401": {
            "description": "Invalid login or password",
            "schema": {
              "type": "object",
              "properties": {
                "error": { "type": "string" }
              }
            }
          },
          "500": {
            "description": "Server error",
            "schema": {
              "type": "object",
              "properties": {
                "error": { "type": "string" }
              }
            }
          }
        }
      }
    },
    "/api/GetUser/{id}": {
      "get": {
        "summary": "Get a user by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            // "schema": {
            //   "$ref": "#/definitions/User"
            // }
          },
          "404": {
            "description": "User not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllUser": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "Successful response"
          },
          "404": {
            "description": "Users not found"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/api/PutUser/{id}": {
      "put": {
        "summary": "Update a user by ID",
        "parameters": [
          {
            "name": "id",
            "in": "body",
            "description": "User to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "name": { "type": "string" },
                "login": { "type": "string" },
                "password": { "type": "string" },
                "city": { "type": "string" },
                "phone": { "type": "string" },
                "email": { "type": "string" },
                "role": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",

          },
          "404": {
            "description": "User not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteUser/{id}": {
      "delete": {
        "summary": "Delete a user by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User successfully deleted",
            // "schema": {
            //   "$ref": "#/definitions/User"
            // }
          },
          "404": {
            "description": "User not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }

    },
    "definitions": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "example": 1
          },
          "name": {
            "type": "string",
            "example": "John Doe"
          },
          "login": {
            "type": "string",
            "example": "john_doe"
          },
          "password": {
            "type": "string",
            "example": "password123"
          },
          "city": {
            "type": "string",
            "example": "New York"
          },
          "phone": {
            "type": "string",
            "example": "+1234567890"
          },
          "email": {
            "type": "string",
            "example": "john.doe@example.com"
          },
          "role": {
            "type": "integer",
            "example": 1
          }
        }
      }
    },
    "/api/PostRole": {
      "post": {
        "summary": "Create role",
        "parameters": [
          {
            "in": "body",
            "name": "role",
            "description": "Role name",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "role_name": {
                  "type": "string"
                }
              }
            }
          }
        ],
        "responses": {
          '200': {
            "description": "Успешное создание роли"
          }
        }
      }
    },
    "/api/GetRole/{id}": {
      "get": {
        "summary": "Get role by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User to get",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }


        ],
        "responses": {
          '200': {
            "description": "Успешное получение роли"
          }
        }
      }
    },
    "/api/GetAllRole": {
      "get": {
        "summary": "Get all roles",
        "responses": {
          '200': {
            "description": "Успешное получение всех ролей"
          }
        }
      }
    },
    "/api/PutRole/{id}": {
      "put": {
        "summary": "Update role by ID",
        "parameters": [
          {
            "name": "id",
            "in": "body",
            "description": "User to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "role_name": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          '200': {
            "description": "Успешное обновление роли"
          }
        }
      }
    },
    "/api/DeleteRole/{id}": {
      "delete": {
        "summary": "Delete role by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }

        ],
        "responses": {
          '200': {
            "description": "Успешное удаление роли"
          }
        }
      }
    },
    "/api/PostUserPhoto": {
      "post": {
        "summary": "Add user photo",
        "parameters": [
          {
            "name": "userPhoto",
            "in": "body",
            "description": "User to add photo",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "user_id": { "type": "integer", "description": "User ID" },
                "photo": { "type": "string", "description": "Base64-encoded photo data" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "All fields must be filled"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllUserPhoto": {
      "get": {
        "summary": "Get all user photos",
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array",
              "items": {
                // "$ref": "#/definitions/UserPhoto"
              }
            }
          },
          "404": {
            "description": "User photos not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetUserPhoto/{id}": {
      "get": {
        "summary": "Get user photo by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Photo to get",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            // "schema": {
            //   // "$ref": "#/definitions/UserPhoto"
            // }
          },
          "404": {
            "description": "User photo not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetUserPhotoByUserID/{id}": {
      "get": {
        "summary": "Get user photos by user ID",
        "parameters": [
          // {
          //   "name": "user_id",
          //   "in": "path",
          //   "type": "integer",
          //   "required": true,
          //   "description": "User ID"
          // }
          {
            "name": "user_id",
            "in": "path",//path?
            "description": "User to add photo by ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "user_id": { "type": "integer", "description": "User ID" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array",
              "items": {
                // "$ref": "#/definitions/UserPhoto"
              }
            }
          },
          "404": {
            "description": "User photos not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PutUserPhoto/{id}": {
      "put": {
        "summary": "Update user photo by ID",
        "parameters": [
          {
            "name": "put photo",
            "in": "body",
            "description": "Photo to put",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "user_id": { "type": "integer" },
                "photo": { "type": "string" }
              }
            }
          }
          // {
          //   "name": "id",
          //   "in": "path",
          //   "type": "integer",
          //   "required": true,
          //   "description": "Photo ID"
          // },
          // {
          //   "name": "user_id",
          //   "in": "formData",
          //   "type": "integer",
          //   "required": true,
          //   "description": "User ID"
          // },
          // {
          //   "name": "photo",
          //   "in": "formData",
          //   "type": "string",
          //   "required": true,
          //   "description": "Base64-encoded photo data"
          // }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            // "schema": {
            //   "$ref": "#/definitions/UserPhoto"
            // }
          },
          "404": {
            "description": "User photo not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteUserPhoto/{id}": {
      "delete": {
        "summary": "Delete user photo by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Photo to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Photo deleted successfully"
          },
          "404": {
            "description": "User photo not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PostType": {
      "post": {
        "summary": "Create a new object type",
        "parameters": [
          {
            "name": "type",
            "in": "body",
            "description": "Object type to add",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "type": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "All fields must be filled"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllType": {
      "get": {
        "summary": "Get all object types",
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Object types not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetType/{id}": {
      "get": {
        "summary": "Get an object type by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Object type ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Object type not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PutType/{id}": {
      "put": {
        "summary": "Update an object type by ID",
        "parameters": [
          {
            "name": "update type",
            "in": "body",
            "description": "Object type to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "type": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Object type not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteType/{id}": {
      "delete": {
        "summary": "Delete an object type by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Object type to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Object type successfully deleted"
          },
          "404": {
            "description": "Object type not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PostState": {
      "post": {
        "summary": "Create a new object state",
        "parameters": [
          {
            "name": "state",
            "in": "body",
            "description": "Object state to add",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "state_name": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "All fields must be filled"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllState": {
      "get": {
        "summary": "Get all object states",
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Object states not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetState/{id}": {
      "get": {
        "summary": "Get an object state by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Object state ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Object state not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PutState/{id}": {
      "put": {
        "summary": "Update an object state by ID",
        "parameters": [
          {
            "name": "update state",
            "in": "body",
            "description": "Object state to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "state_name": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Object state not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteState/{id}": {
      "delete": {
        "summary": "Delete an object state by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Object state to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Object state successfully deleted"
          },
          "404": {
            "description": "Object state not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PostConsultant": {
      "post": {
        "summary": "Create a new consultant",
        "parameters": [
          {
            "name": "consultant",
            "in": "body",
            "description": "Consultant to add",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "phone": { "type": "string" },
                "email": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Some fields are missing or have null values"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllConsultant": {
      "get": {
        "summary": "Get all consultants",
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Consultants not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetConsultant/{id}": {
      "get": {
        "summary": "Get a consultant by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Consultant ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Consultant not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PutConsultant/{id}": {
      "put": {
        "summary": "Update a consultant by ID",
        "parameters": [
          {
            "name": "update consultant",
            "in": "body",
            "description": "Consultant to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "name": { "type": "string" },
                "phone": { "type": "string" },
                "email": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Consultant not found"
          },
          "400": {
            "description": "Some fields are missing or have null values"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteConsultant/{id}": {
      "delete": {
        "summary": "Delete a consultant by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Consultant to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Consultant successfully deleted"
          },
          "404": {
            "description": "Consultant not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PostRealeEstateObject": {
      "post": {
        "summary": "Create a new real estate object",
        "parameters": [
          {
            "name": "realeEstateObject",
            "in": "body",
            "description": "Real estate object to add",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "seller_id": { "type": "integer" },
                "type_id": { "type": "integer" },
                "addres": { "type": "string" },
                "price": { "type": "number" },
                "bathrooms_number": { "type": "integer" },
                "car_space": { "type": "integer" },
                "bedrooms_number": { "type": "integer" },
                "description": { "type": "string" },
                "state": { "type": "integer" },
                "consultant_id": { "type": "integer" },
                "photo_id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Some fields are missing or have null values"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllRealeEstateObject": {
      "get": {
        "summary": "Get all real estate objects",
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Real estate objects not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetRealeEstateObject/{id}": {
      "get": {
        "summary": "Get a real estate object by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Real estate object ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Real estate object not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetRealeEstateObjectBySellerID/{seller_id}": {
      "get": {
        "summary": "Get real estate objects by seller ID",
        "parameters": [
          {
            "name": "seller_id",
            "in": "path",
            "description": "Seller ID",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "example": [
                  {
                    "id": 1,
                    "property_type": "House",
                    "address": "123 Main St",
                    "price": 300000
                    // Add other properties as needed
                  }
                ]
              }
            }
          },
          "404": {
            "description": "Real estate objects not found",
            "content": {
              "application/json": {
                "example": {
                  "error": "Real estate objects not found"
                }
              }
            }
          },
          "500": {
            "description": "Server error occurred",
            "content": {
              "application/json": {
                "example": {
                  "error": "Server error occurred"
                }
              }
            }
          }
        }
      }
    },
    
    "/api/PutRealeEstateObject/{id}": {
      "put": {
        "summary": "Update a real estate object by ID",
        "parameters": [
          {
            "name": "update realestateobject",
            "in": "body",
            "description": "Real estate object to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "seller_id": { "type": "integer" },
                "type_id": { "type": "integer" },
                "addres": { "type": "string" },
                "price": { "type": "number" },
                "bathrooms_number": { "type": "integer" },
                "car_space": { "type": "integer" },
                "bedrooms_number": { "type": "integer" },
                "description": { "type": "string" },
                "state": { "type": "integer" },
                "consultant_id": { "type": "integer" },
                "photo_id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Real estate object not found"
          },
          "400": {
            "description": "Some fields are missing or have null values"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteRealeEstateObject/{id}": {
      "delete": {
        "summary": "Delete a real estate object by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Real estate object to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Real estate object successfully deleted"
          },
          "404": {
            "description": "Real estate object not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PostObjectPhoto": {
      "post": {
        "summary": "Add a new object photo",
        "parameters": [
          {
            "name": "objectPhoto",
            "in": "body",
            "description": "Object photo to add",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "photo": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Photo object not added"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetAllObjectPhoto": {
      "get": {
        "summary": "Get all object photos",
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "400": {
            "description": "Object photos not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/GetObjectPhoto/{id}": {
      "get": {
        "summary": "Get an object photo by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Object photo ID",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Object photo not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/PutObjectPhoto/{id}": {
      "put": {
        "summary": "Update an object photo by ID",
        "parameters": [
          {
            "name": "update objectphoto",
            "in": "body",
            "description": "Object photo to update",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "photo": { "type": "string" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          },
          "404": {
            "description": "Object photo not found"
          },
          "400": {
            "description": "Photo object not updated"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    },
    "/api/DeleteObjectPhoto/{id}": {
      "delete": {
        "summary": "Delete an object photo by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Object photo ID to delete",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Object photo successfully deleted"
          },
          "404": {
            "description": "Object photo not found"
          },
          "500": {
            "description": "Server error occurred"
          }
        }
      }
    }
  }
};

module.exports = swaggerDocument;