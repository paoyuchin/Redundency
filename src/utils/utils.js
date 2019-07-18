function toQueryString (data) {
    let option = data;
    let string = '';
    let optionLength = Object.keys(option).length;
    let i = 0;
    for (let key in option) {
        if ((Object.prototype.hasOwnProperty.call(option, key))) {
            i++;
            if (i >= optionLength) {
                string += key + '=' + encodeURIComponent(option[key]);
            } else {
                string += key + '=' + encodeURIComponent(option[key]) + '&';
            }
        }
    }
    return string;
}

const utils = {
    toQueryString: toQueryString
};

export { toQueryString };
export { utils as default };