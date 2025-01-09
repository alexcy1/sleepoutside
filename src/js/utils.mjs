// // wrapper for querySelector...returns matching element
// export function qs(selector, parent = document) {
//   return parent.querySelector(selector);
// }
// // or a more concise version if you are into that sort of thing:
// // export const qs = (selector, parent = document) => parent.querySelector(selector);

// // retrieve data from localstorage
// export function getLocalStorage(key) {
//   return JSON.parse(localStorage.getItem(key));
// }
// // save data to local storage
// export function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }
// // set a listener for both touchend and click
// export function setClick(selector, callback) {
//   qs(selector).addEventListener("touchend", (event) => {
//     event.preventDefault();
//     callback();
//   });
//   qs(selector).addEventListener("click", callback);
// }










// =================================================================

// // wrapper for querySelector...returns matching element
// export function qs(selector, parent = document) {
//   return parent.querySelector(selector);
// }

// // retrieve data from localstorage
// export function getLocalStorage(key) {
//   try {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : [];
//   } catch (e) {
//     console.error("Error getting data from localStorage:", e);
//     return [];
//   }
// }

// // save data to local storage
// export function setLocalStorage(key, data) {
//   try {
//     let existingData = getLocalStorage(key);

//     // If existingData is not an array, initialize it
//     if (!Array.isArray(existingData)) {
//       existingData = [];
//     }

//     // Add new data to existing array
//     existingData.push(data);

//     // Save back to localStorage
//     localStorage.setItem(key, JSON.stringify(existingData));
//   } catch (e) {
//     console.error("Error saving data to localStorage:", e);
//   }
// }

// // set a listener for both touchend and click
// export function setClick(selector, callback) {
//   const element = qs(selector);
//   if (element) {
//     element.addEventListener("touchend", (event) => {
//       event.preventDefault();
//       callback();
//     });
//     element.addEventListener("click", callback);
//   }
// }


















// DOM selector utility with error handling
export function qs(selector, parent = document) {
  try {
    const element = parent.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    return element;
  } catch (e) {
    console.error(`Error finding element: ${selector}`, e);
    return null;
  }
}

// Safe JSON parse utility
function safeJSONParse(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Error parsing JSON:", e);
    return null;
  }
}

// Get data from localStorage with enhanced error handling
export function getLocalStorage(key) {
  try {
    if (!key) {
      throw new Error("No key provided for localStorage");
    }

    const item = localStorage.getItem(key);
    if (!item) {
      return [];
    }

    const parsedItem = safeJSONParse(item);
    if (!parsedItem) {
      return [];
    }

    // Ensure we always return an array
    return Array.isArray(parsedItem) ? parsedItem : [parsedItem];
  } catch (e) {
    console.error(`Error getting data from localStorage for key: ${key}`, e);
    return [];
  }
}

// Save data to localStorage with validation
export function setLocalStorage(key, data) {
  try {
    if (!key) {
      throw new Error("No key provided for localStorage");
    }

    // Get existing data
    let existingData = getLocalStorage(key);

    // Ensure existingData is an array
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Validate new data
    if (data === null || data === undefined) {
      throw new Error("Invalid data provided to setLocalStorage");
    }

    // Add new data to existing array
    existingData.push(data);

    // Save back to localStorage
    localStorage.setItem(key, JSON.stringify(existingData));

    return true;
  } catch (e) {
    console.error(`Error saving data to localStorage for key: ${key}`, e);
    return false;
  }
}

// Path utility for fixing image paths
export function getAdjustedPath(path) {
  try {
    if (!path) return '';

    // Remove any leading dots and slashes
    const cleanPath = path.replace(/^\.+\//, '');

    // Calculate path depth based on current location
    const pathDepth = window.location.pathname.split('/').length - 2;
    const pathPrefix = '../'.repeat(pathDepth);

    return `${pathPrefix}${cleanPath}`;
  } catch (e) {
    console.error("Error adjusting path:", e);
    return path;
  }
}

// Enhanced event listener utility
export function setClick(selector, callback) {
  try {
    const element = qs(selector);
    if (!element) {
      throw new Error(`Element not found for click handler: ${selector}`);
    }

    // Touch event handler
    const touchHandler = (event) => {
      event.preventDefault();
      callback(event);
    };

    // Click event handler
    const clickHandler = (event) => {
      callback(event);
    };

    // Add touch event listener
    element.addEventListener("touchend", touchHandler, { passive: false });

    // Add click event listener
    element.addEventListener("click", clickHandler);

    // Return a cleanup function
    return () => {
      element.removeEventListener("touchend", touchHandler);
      element.removeEventListener("click", clickHandler);
    };
  } catch (e) {
    console.error(`Error setting click handler for: ${selector}`, e);
    return () => {}; // Return empty cleanup function
  }
}

// Utility to validate product data
export function validateProduct(product) {
  try {
    if (!product) return false;

    // Required fields for a valid product
    const requiredFields = ['Id', 'Name', 'Image', 'FinalPrice'];

    return requiredFields.every(field => {
      const value = product[field];
      return value !== null && value !== undefined;
    });
  } catch (e) {
    console.error("Error validating product:", e);
    return false;
  }
}
