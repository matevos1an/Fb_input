import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SchemaInput } from './schema/schema';

function App() {
  return (


    <div>

<h1 className="facebook-title">Facebook</h1>

      <Formik
        initialValues={{
          login: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        onSubmit={(val) => console.log(val)}
        validationSchema={SchemaInput}
        validateOnBlur
      >
        <Form>
          <Field name="login" placeholder="Login" />
          <ErrorMessage name="login">
            {(msg) => <p className="a">{msg}</p>}
          </ErrorMessage>

          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email">
            {(msg) => <p className="a">{msg}</p>}
          </ErrorMessage>

      

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <button type='sub'>Create new account</button>
    </div>
  );
}

export default App;

