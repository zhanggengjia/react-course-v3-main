import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  };

  const resetItem = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div className="container">
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length == 0 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={() => resetItem()}
        >
          reset items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={() => clearList()}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
