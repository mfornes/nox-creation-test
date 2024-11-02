import {create} from 'zustand'

type DrawerState = {
    drawer: boolean
}
type DrawerAction = {
    showDrawer: () => void
}
const useDrawerStore = create<DrawerState & DrawerAction>()((set) => ({
    drawer: false,
    showDrawer: () => set((state) => ({drawer: !state.drawer})),
}))
export default useDrawerStore;