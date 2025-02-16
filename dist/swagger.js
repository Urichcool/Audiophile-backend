"use strict";
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Audiophile API",
            version: "1.0.0",
        },
        components: {
            schemas: {
                Product: {
                    type: "object",
                    properties: {
                        _id: { type: "string", description: "Unique identifier for the product" },
                        slug: { type: "string", description: "URL-friendly name for the product" },
                        name: { type: "string", description: "Product name" },
                        image: {
                            type: "object",
                            properties: {
                                mobile: { type: "string", description: "Mobile image URL" },
                                tablet: { type: "string", description: "Tablet image URL" },
                                desktop: { type: "string", description: "Desktop image URL" },
                            },
                        },
                        category: { type: "string", description: "Product category" },
                        categoryImage: {
                            type: "object",
                            properties: {
                                mobile: { type: "string", description: "Category image for mobile" },
                                tablet: { type: "string", description: "Category image for tablet" },
                                desktop: { type: "string", description: "Category image for desktop" },
                            },
                        },
                        new: { type: "boolean", description: "Indicates if the product is new" },
                        price: { type: "number", description: "Product price" },
                        description: { type: "string", description: "Product description" },
                        features: { type: "string", description: "Product features" },
                        includes: {
                            type: "array",
                            description: "List of included items",
                            items: {
                                type: "object",
                                properties: {
                                    quantity: { type: "number", description: "Quantity of included item" },
                                    item: { type: "string", description: "Name of included item" },
                                },
                            },
                        },
                        gallery: {
                            type: "object",
                            properties: {
                                first: {
                                    type: "object",
                                    properties: {
                                        mobile: { type: "string", description: "First gallery image for mobile" },
                                        tablet: { type: "string", description: "First gallery image for tablet" },
                                        desktop: { type: "string", description: "First gallery image for desktop" },
                                    },
                                },
                                second: {
                                    type: "object",
                                    properties: {
                                        mobile: { type: "string", description: "Second gallery image for mobile" },
                                        tablet: { type: "string", description: "Second gallery image for tablet" },
                                        desktop: { type: "string", description: "Second gallery image for desktop" },
                                    },
                                },
                                third: {
                                    type: "object",
                                    properties: {
                                        mobile: { type: "string", description: "Third gallery image for mobile" },
                                        tablet: { type: "string", description: "Third gallery image for tablet" },
                                        desktop: { type: "string", description: "Third gallery image for desktop" },
                                    },
                                },
                            },
                        },
                        previewImage: {
                            type: "object",
                            properties: {
                                mobile: { type: "string", description: "Preview image for mobile" },
                                tablet: { type: "string", description: "Preview image for tablet" },
                                desktop: { type: "string", description: "Preview image for desktop" },
                            },
                        },
                        stock: { type: "number", description: "Number of items in stock" },
                    },
                    required: ["_id", "slug", "name", "price", "category", "stock"],
                },
            },
        },
    },
    apis: ["./routes/*.ts"],
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
