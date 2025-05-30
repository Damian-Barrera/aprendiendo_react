const url = '/phones.js';


export const tel = async () => {

    try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data; 

      } catch (error) {
        console.error('Error:', error);
        return []; 
      }
    };


