import { create } from 'zustand'

type ModalName = 'addTeam' | 'editProfile' | 'deleteTeam'

interface ModalState {
  openModal: { name: ModalName; props?: any } | null
  open: (name: ModalName, props?: any) => void
  close: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  openModal: null,
  open: (name, props) => set({ openModal: { name, props } }),
  close: () => set({ openModal: null }),
}))
