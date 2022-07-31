import { atom } from "recoil";

const announcementsAtom = atom({
    key: "announcements",
    default: null,
})

export { announcementsAtom }