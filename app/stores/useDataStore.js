import { create } from "zustand";

export const useLoading = create((set) => ({
    isLoading: false,
    setIsLoading: (bool) => set({ isLoading: bool })
}))