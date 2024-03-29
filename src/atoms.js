import axios from 'axios'
import { atom, atomFamily, selector, selectorFamily } from 'recoil'
import { TODO } from './todo';

export const notificationsAtom = atom({
    key: "notifcationsAtom",
    default: selector({
        key: "notificatoinsAtomSelector",
        get: async () => {
            const res = await axios.get('http://localhost:3001/notifications')
            return res.data;
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const notificationCount = get(notificationsAtom);
        return notificationCount.jobs + notificationCount.network + notificationCount.messages + notificationCount.notifications;
    }
})

export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: id => {
        return TODO.find(x => x.id == id);
    }
})

export const todoAtomFamilys = atomFamily({
    key: 'todoAtomFamilys',
    default: selectorFamily({
        key: 'todoAtomFamilysSelector',
        get: (id) => async () => {
            await new Promise(r => setTimeout(r, 3000));
            // throw new Error('Error!')
            const res = await axios.get(`http://localhost:3001/todos?id=${id}`);
            console.log(res.data);
            return res.data;
        }
    })
})