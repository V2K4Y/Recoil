import { useRecoilValue } from "recoil";
import { notificationsAtom, totalNotificationSelector } from "../atoms";

export default function TopBar() {
  console.log(' TopBar render !')
    const totalNotifications = useRecoilValue(notificationsAtom);
    const total = useRecoilValue(totalNotificationSelector);
    
    return(
      <div style={{display: 'flex', backgroundColor: 'lightgray', padding: '10px'}}>
        <h1 style={{width: '30vw', padding: '10px'}}>LinkedIn Application</h1>
        <div style={{width: '70vw', display: 'flex', justifyContent: 'space-evenly', padding: '10px'}}>
          <Buttons name= "Home" />
          <Buttons name = "My Network" value={totalNotifications.network} />
          <Buttons name= "Jobs" value={totalNotifications.jobs}/>
          <Buttons name= "Messages" value={totalNotifications.messages}/>
          <Buttons name = "Notifications" value={totalNotifications.notifications}/>
          <Buttons name = "Me" value={total} />
        </div>
      </div>
    )
  }
  
  function Buttons ({name, value}) {
    
    return (
      <button style={{position: 'relative', cursor: 'pointer'}}>{name} 
        {value > 0 ? <small style={{position: 'absolute', right: `${value >= 100 ? '-20px' : '-12px'}`, top: '-12px', backgroundColor: 'red', borderRadius: '100%', color: 'white', padding: '12px', border: '3px solid lightgray', fontSize: '10px'}}>
          <span style={{position: 'absolute', top: '7px', right: `${value >= 100 ? '3px' : value >=10 ? '7px' : '10px'}`}}>{name == 'Me' ? value : value >= 100 ? "99+" : value}</span>
        </small> : null}
      </button>
    )
  }