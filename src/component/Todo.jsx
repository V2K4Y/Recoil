import { useRecoilValueLoadable } from "recoil"
import { todoAtomFamilys } from "../atoms"

export default function Todo ({id}) {
    const todo1 = useRecoilValueLoadable(todoAtomFamilys(id));
    console.log(`Todo Renders ! - ${id}`);

    if(todo1.state == 'loading') {
        return (
            <div>
                <p style={{backgroundColor: 'gray', padding: '5px', color: 'white', borderRadius: '10px'}}>Loading...</p>
            </div>
        )
    } else if (todo1.state == 'hasValue') {
        return(
            <div>
                <p>{todo1.contents.title}</p>
                <p>{todo1.contents.description}</p>
                <p>{todo1.contents.completed}</p>
            </div>
        )
    } else {
        return(
            <div style={{backgroundColor: 'lightgoldenrodyellow', padding: '15px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', color: 'red'}}>
                <p>Error !</p>
            </div>
        )
    }
    
}