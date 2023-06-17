export const updateObject = (state, object): any => ({
  ...state,
  ...object,
});

export const permit = (Component, keyWord = null, returnValue = null): any => {
  const authorities = localStorage.getItem("authorities");
  const userPermissions = authorities ? JSON.parse(authorities) : {};

  if (keyWord === null || userPermissions[keyWord]) return Component;
  else return returnValue;
};
