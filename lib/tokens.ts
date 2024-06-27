import { getVerficationTokenByEmail } from "@/data/verificationToken"
import { getPasswordResetTokenByEmail } from "@/data/passwordResetToken"
import { v4 as uuidv4 } from "uuid"
import { db } from "./db"

export const generateVerifcationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerficationTokenByEmail(email)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const verifcationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return verifcationToken
}

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return passwordResetToken
}
