import Ingredient from './Ingredient'


import recipes from '../database/recipes'

export default function Recipe({recipeName}){


    //recipes[recipeName].ingredients.cowButter



    const ings = [];

    //var ingArray = JSON.parse(recipes[recipeName].ingredients);


    for (let i = 0; i < recipes[recipeName].ingredients.length; i++) {

        /* for (let j = 0; j < 6; j++) {
            //todo
        } */

        ings.push(<Ingredient 
        ingName={recipes[recipeName].ingredients[i].name} 
        ingAmount={recipes[recipeName].ingredients[i].amount} 
        ingUnit={recipes[recipeName].ingredients[i].unit} />);
            }





    return <div>{ings}</div>;

    
}