import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log('data', data);

  try {
    const res = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {

    console.log('caught error:', error);
    const msg = error?.response?.data?.error?.message || 'please double check your credentials';
    toast.error(msg);
    return null;
  }
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className="mt-4">
          <SubmitBtn text='register' />
        </div>
        <p className='text-center'>
          Already a member? <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register