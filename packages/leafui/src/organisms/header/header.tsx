import React, { useState } from 'react';
import { Button } from '../../atoms/button';

export const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <img
          src="./images/leaf.png"
          width={500}
          height={500}
          alt="Leaf Logo"
          className='h-8 mr-2'
        />
        <h1 className="text-xl font-bold">LEAF</h1>
      </div>
  
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
        >
          <Image
            src="./images/leaf.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className='h-8 w-8 rounded-full'
          />
        </Button>
  
        {
          isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <Button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => console.log('Log out')}
              >
                Log out
              </Button>
            </div>
          )
        }
      </div>
    </header>
  );
}
