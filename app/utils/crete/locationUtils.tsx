// utils/localStorageUtils.ts
export const saveToLocalStorage = (key: string, data: any) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (err) {
        console.error("Error saving to localStorage", err);
    }
};

export const loadFromLocalStorage = (key: string) => {
    try {
        const serializedData = localStorage.getItem(key);
        return serializedData ? JSON.parse(serializedData) : null;
    } catch (err) {
        console.error("Error loading from localStorage", err);
        return null;
    }
};
