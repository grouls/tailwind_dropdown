import { useCallback, useState } from 'react';

const Dropdown = ({icon, options}) => {
    const [isVisible, setVisibility] = useState(false);
    const toggleVisibility = useCallback(() => setVisibility(isVisible => !isVisible), []);
    const { src, alt } = icon; 
    return (
        <div className="h-screen px-3 py-3 bg-indigo-200">
            <button onClick={toggleVisibility} className="block h-12 w-12 rounded-full overflow-hidden border-2 border-grey-600 focus:outline-none focus:border-white">
                <img
                    className="h-full w-full object-cover"
                    src={src}
                    alt={alt}
                />
            </button>
            { isVisible &&
                <div className='mt-1 py-4 w-48 bg-white rounded-lg shadow-xl'>
                    {options.map(({label}) => <button className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white hover: w-full">{label}</button>)}
                </div>
            }
        </div>
    );
}

export default Dropdown;