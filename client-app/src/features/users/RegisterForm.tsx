import { ErrorMessage, Formik } from "formik";
import { Button, Form, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as yup from 'yup';

export default observer(function RegisterForm(){
    const { userStore } = useStore();

    return(
        <Formik 
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.register(values).catch(errors => setErrors({error: 'Invalid email or password'}))}
            validationSchema={yup.object({
                displayName: yup.string().required(),
                username: yup.string().required(),
                email: yup.string().required(),
                password: yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid,dirty }) => (
                <Form className="ui form" onSubmit={handleSubmit} autocomplate='off'>
                    <Header as='h2' content='Register to Reactivities' color="teal" textAlign="center"  />
                    <MyTextInput placeholder="Display Name" name='displayName' />
                    <MyTextInput placeholder="Username" name='username' />
                    <MyTextInput placeholder="Email" name='email' />
                    <MyTextInput placeholder="Password" name='password' type="password" />
                    <ErrorMessage name="error" render={() => <Label style={{ marginBottom: 10 }} basic color="red" content={errors.error} />} />
                    <Button 
                        disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} 
                        positive content="Register" 
                        type="submit" 
                        fluid 
                    />
                </Form>
            )}
        </Formik>
    )
})