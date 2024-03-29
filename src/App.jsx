import { RecoilRoot } from 'recoil'
import './App.css'
import TopBar from './component/Topbar'
import Todo from './component/Todo'

export default function App() {
  console.log('App render !');
  return (
    <RecoilRoot>
      <TopBar />
      <div style={{height: '89vh', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Todo id={1}/>
        <Todo id={5}/>
        <Todo id={3}/>
        <Todo id={6}/>
        <Todo id={2}/>
      </div>
    </RecoilRoot>
  )
}