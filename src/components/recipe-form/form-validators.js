/* Helpers */
const checkRequired = (value) => {
  if (value.trim().length === 0) return "This field is required.";
};

const checkMinLength = (value, min) => {
  if (value.trim().length < min)
    return `This field has to be more than or equal to ${min} characters.`;
};
const checkMaxLength = (value, max) => {
  if (value.trim().length > max)
    return `This field has to be less than or equal to ${max} characters.`;
};

const checkMinNum = (value, min) => {
  if (+value < min) return `This field has to be more than or equal to ${min}.`;
};
const checkMaxNum = (value, max) => {
  if (+value > max) return `This field has to be less than or equal to ${max}.`;
};

const checkMinListItems = (list, min) => {
  if (list.length < min) return `This list must include at least ${min} items.`;
};
const checkMaxListItems = (list, max) => {
  if (list.length >= max) return `This list must include at most ${max} items.`;
};

/* Validators */
export const getTitleValidationErrors = (value) => {
  return (
    checkRequired(value) ||
    checkMinLength(value, 2) ||
    checkMaxLength(value, 50) ||
    ""
  );
};

export const getCategoryValidationErrors = (value) => {
  return checkRequired(value) || "";
};

export const getInfoTimeValidationErrors = (value) => {
  return (
    checkRequired(value) ||
    checkMinLength(value, 1) ||
    checkMaxLength(value, 15) ||
    ""
  );
};

export const getDiffInfoValidationErrors = (value) => {
  return checkRequired(value) || "";
};

export const getServesInfoValidationErrors = (value) => {
  return (
    checkRequired(String(value)) ||
    checkMinNum(value, 1) ||
    checkMaxNum(value, 50) ||
    ""
  );
};

export const getMinListItemsValidationErrors = (list) => {
  return checkMinListItems(list, 1) || "";
};

export const getMaxListItemsValidationErrors = (list) => {
  return checkMaxListItems(list, 100) || "";
};

export const getIngredientValidationErrors = (value) => {
  return (
    checkRequired(value) ||
    checkMinLength(value, 2) ||
    checkMaxLength(value, 500) ||
    ""
  );
};

export const getStepValidationErrors = (value) => {
  return (
    checkRequired(value) ||
    checkMinLength(value, 2) ||
    checkMaxLength(value, 1000) ||
    ""
  );
};
