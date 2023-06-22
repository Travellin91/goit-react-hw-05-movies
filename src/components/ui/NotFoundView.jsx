import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <p>Go to <Link to="/">Home page</Link></p>
    </div>
  );
};

export default NotFoundView;

