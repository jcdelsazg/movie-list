export const validateNumber = (number) => {
    return !isNaN(number);
};

export const setShowMessageValue = (number) => {
    return number > 100 ? true : false;
};

export const setNumberValue = (number) => {
    return number > 100 ? 100 : number;
};