import { useMutation } from '@tanstack/react-query'
import {workspaceControllerCreateMutation} from "@/shared/api";

export const useCreateWorkspace = () => {
  return useMutation({
    ...workspaceControllerCreateMutation(),
    onError: (error) => {
      console.log(error)
    },
  })
}
