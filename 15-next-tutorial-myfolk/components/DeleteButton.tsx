import { deleteUser, removeUser } from '@/utils/actions';

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id); //pass 'id' into removeUser action
  return (
    // id在html中，為了不要顯示，要使用rmoveUser的方在html中，為了不要顯示，要使用rmoveUser的方式d在html中，為了不要顯示，要使用rm在html中，為了不要顯示，要使用rmoveUser的方式
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="shakeAndBake" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}

export default DeleteButton;
