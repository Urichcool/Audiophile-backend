import * as yup from "yup";

export const orderSchema: yup.ObjectSchema<
  {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    address: string | undefined;
    zip: string | undefined;
    city: string | undefined;
    country: string | undefined;
    radioValue: string | undefined;
    eMoneyNumber: string | undefined;
    eMoneyPin: string | undefined;
  },
  yup.AnyObject,
  {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    address: string | undefined;
    zip: string | undefined;
    city: string | undefined;
    country: string | undefined;
    radioValue: string | undefined;
    eMoneyNumber: string | undefined;
    eMoneyPin: string | undefined;
  },
  ""
> = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .test({
      name: "email-has-correct-format",
      skipAbsent: true,
      test(value, ctx) {
        if (
          !value?.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
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
        if (!value?.match(/^[0-9 -]+$/)) {
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
        if (value?.length !== 9) {
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
        if (value?.length !== 4) {
          return ctx.createError({
            message: "E-money pin must contain 4 digits",
          });
        }
        return true;
      },
    }),
});
