import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage} from "zustand/middleware";

//Zustand doc: https://zustand.docs.pmnd.rs/getting-started/introduction
const useStore = create(
  persist(
    (set) => ({
      count: 100,
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'mystorage', //Define ten luu trong storage
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);

export default useStore;
