import {useState} from 'react'
export function returnInitialState(storageKey: string) {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(storageKey);
      // Parse stored json or if none return an empty object
      return item ? JSON.parse(item) : {x: 0, o: 0};
    } catch (error) {
      // If error also return an empty object
      console.log(error);
      return 0;
    }
  }

export function useLocalStorage(storageKey: string) {
    const [storedValue, setStoredValue] = useState(
      returnInitialState(storageKey)
    );
    
    const setValue = (value: unknown) => {
      try {
      // Allow value to be a function so we have same API as useState
        const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        // Save to local storage
        window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
        // Save state
        setStoredValue(valueToStore);
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    
    return [storedValue, setValue]
  }

  export function arrayEquals(a: number[], b: number[]) {
    let total = 0;
    a.forEach((aItem) => {
        b.forEach((bItem) => {
             (aItem === bItem? total += 1:null)
        })
    })
    if (total >= 3) {
        return true;
    }
    return false;
  }

