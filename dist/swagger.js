"use strict";
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Audiophile API",
            version: "1.0.0",
            description: "This is my custom API for Audiophile e-commerce shop",
            contact: {
                name: 'Audiophile Frontend',
                url: 'https://audiophile-frontend-nu.vercel.app/',
            },
        },
        servers: [
            {
                url: "https://audiophile-backend.onrender.com",
                description: "Production server",
            },
        ],
        components: {
            schemas: {
                Product: {
                    type: "object",
                    properties: {
                        _id: {
                            type: "string",
                            description: "Unique product ID",
                            example: "60d21b4667d0d8992e610c85",
                        },
                        slug: {
                            type: "string",
                            description: "Product slug (URL-friendly identifier)",
                            example: "xx99-mark-two-headphones",
                        },
                        name: {
                            type: "string",
                            description: "Product name",
                            example: "XX99 Mark II Headphones",
                        },
                        image: {
                            type: "object",
                            properties: {
                                mobile: { type: "string", example: "/images/mobile/image.jpg" },
                                tablet: { type: "string", example: "/images/tablet/image.jpg" },
                                desktop: {
                                    type: "string",
                                    example: "/images/desktop/image.jpg",
                                },
                            },
                        },
                        category: {
                            type: "string",
                            description: "Product category",
                            example: "headphones",
                        },
                        categoryImage: {
                            type: "object",
                            properties: {
                                mobile: {
                                    type: "string",
                                    example: "/images/mobile/category.jpg",
                                },
                                tablet: {
                                    type: "string",
                                    example: "/images/tablet/category.jpg",
                                },
                                desktop: {
                                    type: "string",
                                    example: "/images/desktop/category.jpg",
                                },
                            },
                        },
                        new: {
                            type: "boolean",
                            description: "Indicates if the product is new",
                            example: true,
                        },
                        price: {
                            type: "number",
                            description: "Product price",
                            example: 899,
                        },
                        description: {
                            type: "string",
                            description: "Product description",
                            example: "The best audiophile headphones for an immersive experience.",
                        },
                        features: {
                            type: "string",
                            description: "Product features",
                            example: "High-quality sound, noise cancellation, long battery life.",
                        },
                        includes: {
                            type: "array",
                            description: "List of included accessories",
                            items: {
                                type: "object",
                                properties: {
                                    quantity: {
                                        type: "number",
                                        description: "Quantity of the item",
                                        example: 1,
                                    },
                                    item: {
                                        type: "string",
                                        description: "Item name",
                                        example: "Headphone stand",
                                    },
                                },
                            },
                        },
                        gallery: {
                            type: "object",
                            properties: {
                                first: {
                                    type: "object",
                                    properties: {
                                        mobile: {
                                            type: "string",
                                            example: "/images/mobile/gallery1.jpg",
                                        },
                                        tablet: {
                                            type: "string",
                                            example: "/images/tablet/gallery1.jpg",
                                        },
                                        desktop: {
                                            type: "string",
                                            example: "/images/desktop/gallery1.jpg",
                                        },
                                    },
                                },
                                second: {
                                    type: "object",
                                    properties: {
                                        mobile: {
                                            type: "string",
                                            example: "/images/mobile/gallery2.jpg",
                                        },
                                        tablet: {
                                            type: "string",
                                            example: "/images/tablet/gallery2.jpg",
                                        },
                                        desktop: {
                                            type: "string",
                                            example: "/images/desktop/gallery2.jpg",
                                        },
                                    },
                                },
                                third: {
                                    type: "object",
                                    properties: {
                                        mobile: {
                                            type: "string",
                                            example: "/images/mobile/gallery3.jpg",
                                        },
                                        tablet: {
                                            type: "string",
                                            example: "/images/tablet/gallery3.jpg",
                                        },
                                        desktop: {
                                            type: "string",
                                            example: "/images/desktop/gallery3.jpg",
                                        },
                                    },
                                },
                            },
                        },
                        previewImage: {
                            type: "object",
                            properties: {
                                mobile: {
                                    type: "string",
                                    example: "/images/mobile/preview.jpg",
                                },
                                tablet: {
                                    type: "string",
                                    example: "/images/tablet/preview.jpg",
                                },
                                desktop: {
                                    type: "string",
                                    example: "/images/desktop/preview.jpg",
                                },
                            },
                        },
                        stock: {
                            type: "number",
                            description: "Stock quantity",
                            example: 25,
                        },
                    },
                },
                Order: {
                    type: "object",
                    properties: {
                        shippingData: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    description: "Customer's full name",
                                    example: "John Doe",
                                },
                                email: {
                                    type: "string",
                                    format: "email",
                                    description: "Customer's email address",
                                    example: "johndoe@example.com",
                                },
                                phone: {
                                    type: "string",
                                    description: "Customer's phone number",
                                    example: "+1 234 567 890",
                                },
                                address: {
                                    type: "string",
                                    description: "Shipping address",
                                    example: "123 Main Street",
                                },
                                zip: {
                                    type: "string",
                                    description: "ZIP code",
                                    example: "12345",
                                },
                                city: {
                                    type: "string",
                                    description: "City name",
                                    example: "New York",
                                },
                                country: {
                                    type: "string",
                                    description: "Country name",
                                    example: "USA",
                                },
                                radioValue: {
                                    type: "string",
                                    description: "Payment method",
                                    example: "eMoney",
                                },
                                eMoneyNumber: {
                                    type: "string",
                                    nullable: true,
                                    description: "eMoney account number (optional)",
                                    example: "1234567890",
                                },
                                eMoneyPin: {
                                    type: "string",
                                    nullable: true,
                                    description: "eMoney PIN (optional)",
                                    example: "1234",
                                },
                            },
                        },
                        products: {
                            type: "array",
                            description: "List of ordered products",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        description: "Product ID",
                                        example: "product123",
                                    },
                                    name: {
                                        type: "string",
                                        description: "Product name",
                                        example: "Wireless Headphones",
                                    },
                                    quantity: {
                                        type: "integer",
                                        description: "Quantity of the product",
                                        example: 2,
                                    },
                                    price: {
                                        type: "number",
                                        description: "Price of a single unit",
                                        example: 199.99,
                                    },
                                    picture: {
                                        type: "string",
                                        description: "Product image URL",
                                        example: "https://example.com/product.jpg",
                                    },
                                    totalPrice: {
                                        type: "number",
                                        description: "Total price for this product",
                                        example: 399.98,
                                    },
                                    category: {
                                        type: "string",
                                        description: "Product category",
                                        example: "Audio",
                                    },
                                },
                            },
                        },
                        total: {
                            type: "number",
                            description: "Total order amount",
                            example: 599.97,
                        },
                    },
                },
            },
        },
    },
    apis: ["./routes/*.ts"],
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
