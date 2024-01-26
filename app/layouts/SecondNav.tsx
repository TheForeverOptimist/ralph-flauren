import React from 'react'
import styles from './SecondNav.module.css'
import NavItem from '../components/NavItem';

export default function SecondNav() {
    return (
      <>
        <div className="h-[12vh] bg-black hover:bg-white text-white hover:text-black flex items-center w-full ">
          <p className="ml-10 mr-20 text-md font-serif">Ralph Flauren</p>
            <NavItem title="Men" items={['Shirt', 'Pants', 'Shoes']} />
            <NavItem title="Women" items={['Shirt', 'Pants', 'Shoes']} />
            <NavItem title="Kid & Baby" items={['Shirt', 'Pants', 'Shoes']} />
            <NavItem title="Home" items={['Shirt', 'Pants', 'Shoes']} />
            <NavItem title="Gifts" items={['Shirt', 'Pants', 'Shoes']} />
            <NavItem title="Discover" items={['Shirt', 'Pants', 'Shoes']} />
        </div>
      </>
    );
}