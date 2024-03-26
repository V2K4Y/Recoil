import { atom, selector } from 'recoil'

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 1,
});

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102,
});

export const messageAtom = atom({
    key: 'messageAtom',
    default: 0,
});

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12,
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const jobs = get(jobsAtom);
        const network = get(networkAtom);
        const message = get(messageAtom);
        const notifcation = get(notificationAtom);
        return jobs + network + message + notifcation;
    }
})