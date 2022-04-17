import { createContext } from 'react';

const DataContext = createContext({
    state: {
        name: 'Lee',
        age: 10,
    },

    action: {
        setName() {

        },
        setAge() {

        }
    }
});

export default DataContext;