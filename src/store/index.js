import { create } from 'zustand';


// why do we using this to keep track of which color macbook is selected 
const useMacbookStore = create((set) => ({
    color:"#2e2c2e",
    setColor: (color) => set({ color}),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: "2e2c2e", scale:0.08}),
}))

export default useMacbookStore;