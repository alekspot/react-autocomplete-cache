export const hasMatch = (str, list) => {
    return list.some(item => item.toLowerCase().includes(str.toLowerCase()));
};

export const getMatch = (str, list) => {
    return list.filter(item => item.toLowerCase().includes(str.toLowerCase()));
};


// const newStr = 'США'.toLowerCase();

// console.log(newStr.includes('ш'));