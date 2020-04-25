import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Too short!')
        .max(10, 'Too long!'),
    lastname: Yup.string()
        .min(2, 'Too short!')
        .max(10, 'Too long!')
        .required('Required!'),
    email: Yup.string()
        .email('Invalid email!')
        .required('Required!')
});

function App() {
    return (
        <>
            <Formik
                initialValues={{
                    firstname: 'John',
                    lastname: 'Doe',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {({ errors, touched, handleSubmit, isSubmitting }) => (
                    <Form>
                        <Field name="firstname" />
                        {errors.firstname && touched.firstname ? (
                            <div>{errors.firstname}</div>
                        ) : null}
                        <Field name="lastname" />
                        {errors.lastname && touched.lastname ? (
                            <div>{errors.lastname}</div>
                        ) : null}
                        <Field name="email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default App;
