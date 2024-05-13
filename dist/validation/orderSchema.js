"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const yup = __importStar(require("yup"));
exports.orderSchema = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup
        .string()
        .test({
        name: "email-has-correct-format",
        skipAbsent: true,
        test(value, ctx) {
            if (!(value === null || value === void 0 ? void 0 : value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
                return ctx.createError({
                    message: "Incorrect email format",
                });
            }
            return true;
        },
    })
        .required("This field is required"),
    phone: yup
        .string()
        .required("This field is required")
        .test({
        name: "phone-has-correct-format",
        skipAbsent: true,
        test(value, ctx) {
            if (!Number(value)) {
                return ctx.createError({
                    message: "Phone number must contain only digits",
                });
            }
            if (!value.match(/^\+\d+/)) {
                return ctx.createError({
                    message: "Country code is required",
                });
            }
            return true;
        },
    })
        .min(5, "Phone number is too short")
        .max(15, "Phone number is too long"),
    address: yup.string().required("This field is required"),
    zip: yup
        .string()
        .test({
        name: "zip-should-have-correct-format",
        skipAbsent: true,
        test(value, ctx) {
            if (!(value === null || value === void 0 ? void 0 : value.match(/^[0-9 -]+$/))) {
                return ctx.createError({
                    message: "Incorrect ZIP-Code format",
                });
            }
            return true;
        },
    })
        .min(2, "ZIP-Code-is-too-short")
        .max(9, "ZIP-Code-is-too-long")
        .required("This field is required"),
    city: yup.string().required("This field is required"),
    country: yup.string().required("This field is required"),
    radioValue: yup.string(),
    eMoneyNumber: yup
        .string()
        .test({
        name: "E-money number must contai only digits",
        skipAbsent: true,
        test(value, ctx) {
            if (!Number(value)) {
                return ctx.createError({
                    message: "E-money number must contain only digits",
                });
            }
            if ((value === null || value === void 0 ? void 0 : value.length) !== 9) {
                return ctx.createError({
                    message: "E-money number must contain 9 digits",
                });
            }
            return true;
        },
    })
        .when("radioValue", {
        is: "eMoney",
        then: (schema) => schema.required("This field is required"),
        otherwise: (schema) => schema.optional(),
    }),
    eMoneyPin: yup
        .string()
        .when("radioValue", {
        is: "eMoney",
        then: (schema) => schema.required("This field is required"),
        otherwise: (schema) => schema.optional(),
    })
        .test({
        name: "E-money number must contai only digits",
        skipAbsent: true,
        test(value, ctx) {
            if (!Number(value)) {
                return ctx.createError({
                    message: "E-money pin must contain only digits",
                });
            }
            if ((value === null || value === void 0 ? void 0 : value.length) !== 4) {
                return ctx.createError({
                    message: "E-money pin must contain 4 digits",
                });
            }
            return true;
        },
    }),
});
