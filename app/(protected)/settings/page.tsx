"use client"

import { logout } from "@/actions/logout"
import { useCurrentUser } from "@/hooks/useCurrentUser"

const SettingsPage = () => {
  const user = useCurrentUser()

  const onClick = () => {
    logout()
  }

  return (
    <div className="bg-white p-10 rounded-xl">
        <button onClick={onClick} type="submit">Sign Out</button>
    </div>
  )
}

export default SettingsPage
