import { db } from "@/lib/db"

export const getVerficationTokenByEmail = async (email: string) => {
  try {
    const verifcationToken = await db.verificationToken.findFirst({
      where: { email },
    })

    return verifcationToken

  } catch {
    return null
  }
}

export const getVerficationTokenByToken = async (token: string) => {
  try {
    const verifcationToken = await db.verificationToken.findUnique({
      where: { token },
    })

    return verifcationToken

  } catch {
    return null
  }
}
