import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

export default function App() {

  return (
    <RecoilRoot>
      <TopBar />
    </RecoilRoot>
  )
}

function TopBar() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return(
    <div style={{display: 'flex', backgroundColor: 'lightgray', padding: '10px'}}>
      <h1 style={{width: '30vw', padding: '10px'}}>LinkedIn Application</h1>
      <div style={{width: '70vw', display: 'flex', justifyContent: 'space-evenly', padding: '10px'}}>
        {/* <button>Home</button> */}
        <Buttons name= "Home" />
        <Buttons name = "My Network" value={networkCount} />
        <Buttons name= "Jobs" value={jobsCount}/>
        <Buttons name= "Messages" value={messagingCount}/>
        <Buttons name = "Notifications" value={notificationCount}/>
        <Buttons name = "Me" value={totalNotifications} />
      </div>
    </div>
  )
}

function Buttons ({name, value}) {
  const setNotification = useSetRecoilState(notificationAtom);
  const add = () => {
    setNotification(c => c + 1);
  }
  return (
    <button style={{position: 'relative', cursor: 'pointer'}} onClick={name == 'Me' ? add : null}>{name} 
      {value > 0 ? <small style={{position: 'absolute', right: `${value >= 100 ? '-20px' : '-12px'}`, top: '-12px', backgroundColor: 'red', borderRadius: '100%', color: 'white', padding: '12px', border: '3px solid lightgray', fontSize: '10px'}}>
        <span style={{position: 'absolute', top: '7px', right: `${value >= 100 ? '3px' : value >=10 ? '7px' : '10px'}`}}>{name == 'Me' ? value : value >= 100 ? "99+" : value}</span>
      </small> : null}
    </button>
  )
}