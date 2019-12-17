export const updateObject = (oldObject, updatedProperties = {}) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const getDate = (date, long = true) => {
    const objDate = new Date(date);

    let month = objDate.toLocaleString('default', { month: 'long' });

    if (!long) {
        return `${month.toString().slice(0,3).toUpperCase()} ${objDate.getDate()}`
    } else {
			const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			return `${objDate.getDate()},${days[ objDate.getDay() ].toUpperCase()} `;
		}
};

export const getLongDate = (date) => {
    return getDate(date, true);
};


export const getShortDate = (date) => {
  	return getDate(date, false);
};
