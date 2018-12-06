import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) =>{
    //console.log(ninjas)
    const ninjasList = ninjas.map(ninja => {
        if (ninja.age > 20){
            return (
                
                <div key= {ninja.id}className='ninja'>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={ () => {deleteNinja(ninja.id)} }>Delete Ninja</button>
                </div>
            )
        }
        else{
            return null;
        }
        
    })
    // const ninjasList = ninjas.map(ninja => {
    //     return ninja.age > 20 ? (
    //         <div key= {ninja.id}className='ninja'>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //     ) : null
    // })
    return(
        <div className="ninja-list">
            { ninjasList }
        </div>
    )
}


export default Ninjas;