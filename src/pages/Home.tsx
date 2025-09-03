import { useUser } from '@/entities/user/api/useUser.ts'
import { TypingText } from '@/features/typing-text/TypingText.tsx'

function Home() {
  const { user, isLoading, error } = useUser()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!user) {
    return <div>Unauthorized</div>
  }

  return <TypingText text={`Hello, ${user.firstName}`}></TypingText>
}

export default Home
