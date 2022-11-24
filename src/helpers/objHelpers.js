/* Helper function to insert a key in an object, or delete it if is already exists. */
export const toggleKeyInObj = (key, obj) => {
  const newState = { ...obj };

  if (newState[key]) {
    delete newState[key];
  } else {
    newState[key] = true;
  }

  return newState;
};
