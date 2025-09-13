import { FormModal } from '@/shared/ui/organism/Form/FormModal.tsx'
import { useCreateWorkspace } from '@/entities/workspace/api/useCreateWorkspace.ts'
import type { CreateWorkspaceDto } from '@/shared/api/generated/sdk/index.js'

export const modalRegistry = {
  addTeam: (props: { onClose: () => void }) => {
    const AddTeamModal = () => {
      const mutation = useCreateWorkspace()

      return (
        <FormModal<CreateWorkspaceDto>
          modalTitle="Создать команду"
          fields={[
            {
              name: 'name',
              label: 'Название команды',
              placeholder: 'Введите название',
            },
          ]}
          onSubmit={(data) => {
            mutation.mutate({ body: data })
            props.onClose()
          }}
          onClose={props.onClose}
          actionName="Создать"
        />
      )
    }

    return <AddTeamModal />
  },

  deleteTeam: (props: { onClose: () => void; teamId: string }) => (
    <div className="space-y-4">
      <p>Вы уверены, что хотите удалить команду {props.teamId}?</p>
      <div className="flex gap-2">
        <button
          className="rounded bg-gray-200 px-4 py-2"
          onClick={props.onClose}
        >
          Отмена
        </button>
        <button
          className="rounded bg-red-600 px-4 py-2 text-white"
          onClick={() => {
            console.log('Удалить:', props.teamId)
            props.onClose()
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  ),
}
