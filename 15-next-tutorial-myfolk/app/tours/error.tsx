'use client';

import React from 'react';

const error = ({ error }: { error: Error }) => {
  console.log(error);
  return <div>There was an error... {error.message}</div>;
};

export default error;
