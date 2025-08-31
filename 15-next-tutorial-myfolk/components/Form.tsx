'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { createUser } from '@/utils/actions';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={pending ? btnSubmit : btnStyle}
      disabled={pending}
    >
      {pending ? 'submitting...' : 'submit'}
    </button>
  );
};

function Form() {
  //使用useFormState後，縱使catch error也只會顯示message
  const [message, formAction] = useActionState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="peter"
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="smith"
        required
        className={inputStyle}
      />
      <SubmitButton />
    </form>
  );
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';
const btnSubmit = `${btnStyle} bg-gray-500 hover:bg-gray-500`;

export default Form;
