import { workspaceControllerCreateMutation } from '@/shared/api/generated/sdk/@tanstack/react-query.gen'
import { useMutation } from '@tanstack/react-query'

export const useCreateWorkspace = () => {
  return useMutation({
    ...workspaceControllerCreateMutation(),
    onError: (error) => {
      return error.message
    },
  })
}
