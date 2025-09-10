import { useMutation } from '@tanstack/react-query'
import { workspaceControllerCreateMutation } from '@/shared/types/sdk/@tanstack/react-query.gen.ts'

export const useCreateWorkspace = () => {
  return useMutation({
    ...workspaceControllerCreateMutation(),
    onError: (error) => {
      console.log(error)
    },
  })
}
