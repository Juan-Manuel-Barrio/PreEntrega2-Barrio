import { Form, Formik } from "formik";
import { addNewOrder } from "src/utils/firebaseFetching.js";
import { useCartContext } from "src/context/CartState.js";
import { serverTimestamp } from "firebase/firestore";
import TextField from "src/Components/CheckoutForm/TextField.js";
import * as Yup from "yup";
import { useState } from "react";
import ButtonLoader from "src/Components/Loader/ButtonLoader.js";

const CheckoutForm = ({ setId }) => {
const { items } = useCartContext();
const [loading, setLoading] = useState(false);

const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    const order = {
    purcharse_data: {
        firsName: values.firstName,
        lastName: values.lastName,
        email: values.email.toLowerCase(),
    },
    products: items,
    date: serverTimestamp(),
    };
    const orderId = await addNewOrder(order);
    setId(orderId);
    resetForm({ values: "" });
    setLoading(false);
};
const emailRegEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const validate = Yup.object({
    Nombre: Yup.string()
    .max(15, "Debe tener 15 caracteres o menos")
    .required("Este campo es obligatorio"),
    Apellido: Yup.string()
    .max(15, "Debe tener 15 caracteres o menos")
    .required("Este campo es obligatorio"),
    Email: Yup.string()
    .email("El email es invalido", emailRegEx)
    .required("Se requiere un email"),
    confirmarEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "El correo electrónico debe coincidir")
    .required("Se requiere confirmación del correo electrónico"),
});
return (
    <>
    <Formik
        initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
        }}
    >
        {(formik) => (
        <Form className="form">
            <div className="form__group">
            <TextField
                label="First name"
                name="firstName"
                type="text"
                className="form__item"
            />
            <TextField
                label="Last name"
                name="lastName"
                type="text"
                className="form__item"
            />
            </div>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Confirm Email" name="confirmEmail" type="text" />
            <button type="submit" className="form__submit">
            {loading ? <ButtonLoader /> : "Complete purchase"}
            </button>
        </Form>
        )}
    </Formik>
    </>
);
};

export default CheckoutForm;