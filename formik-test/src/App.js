import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Too short!')
        .max(10, 'Too long!')
        .required('Required!'),
    lastname: Yup.string()
        .min(2, 'Too short!')
        .max(10, 'Too long!')
        .required('Required!'),
    email: Yup.string().email('Invalid email!').required('Required!'),
});

function App() {
    const formik = useFormik({
        initialValues:{
            firstname: 'John',
            lastname: 'Doe',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div className="App">
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    className={formik.errors.firstname? 'error':null}
                />
                {formik.errors.firstname && formik.touched.firstname ? (
                    <div className="error">{formik.errors.firstname}</div>
                ) : null}
                <input
                    type="text"
                    name="lastname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                />
                {formik.errors.lastname && formik.touched.lastname ? (
                    <div>{formik.errors.lastname}</div>
                ) : null}
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <button type="submit" disabled={formik.isSubmitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
