export const SetLocalStorage = inputObject => {
    for (let item in inputObject)
        localStorage.setItem(
            item,
            setItemValue(inputObject[item])
        );
};

export const GetLocalStorage = key => {
    return getItemValue(localStorage.getItem(key));
};

function setItemValue(value) {
    if (typeof value != 'string') return JSON.stringify(value);
    else return value;
}
function getItemValue(item) {
    try {
        return JSON.parse(item);
    } catch (err) {
        return item;
    }
}

export const CheckInLocalStorage = key => {
    return localStorage.getItem(key) ? true : false;
};

export const ClearLocalStorage = () => {
    localStorage.clear();
};
