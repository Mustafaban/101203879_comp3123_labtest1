const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'resolved promise!' });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise(( _ ,reject) => {
    setTimeout(() => {
      reject(new Error('error: rejected promise!'));
    }, 500);
  });
};

resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  rejectedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);  // Log just the message
  });

  