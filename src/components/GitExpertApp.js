import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories([...categories,'Goku'])
    //     setCategories( cate => [...cate,'Goku'])

    // }

    return (
        <>
            <h2>GitExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )

}


export default GitExpertApp
