import ingredients from '../database/ingredients'

export default function SubIngList({ ingName }){

    return (<div>{ingredients[ingName].name}</div>)

}