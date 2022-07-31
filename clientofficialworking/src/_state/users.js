import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const usersAtom = atom({
    key: "users",
    default: null,
});
const userAtom = atom({
    key: "user",
    default: null,
    effects_UNSTABLE: [persistAtom]
});

const loggedInAtom = atom({
    key: "loggedIn",
    default: false,
    effects_UNSTABLE: [persistAtom]
});

const selectedCompanyAtom = atom({
    key: "selectedCompany",
    default: null,
})

const selectedTeamAtom = atom({
    key: "selectedTeam",
    default: null,
})

export { usersAtom, userAtom, loggedInAtom, selectedCompanyAtom, selectedTeamAtom };
