import React from 'react';
import {useRouteError, isRouteErrorResponse} from 'react-router-dom';

const ErrorPage: React.FC = () => {
  // you don't need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div
      id='error-page'
      style={{
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-400'>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export default ErrorPage;