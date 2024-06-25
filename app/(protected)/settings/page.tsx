import { auth, signOut } from "@/auth"

const SettingsPage = async () => {
  const session = await auth()

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server"

          await signOut({
            redirectTo: "/auth/login",
          })
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  )
}

export default SettingsPage
