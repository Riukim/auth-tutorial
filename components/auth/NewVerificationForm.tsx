"use client"

import { PulseLoader } from "react-spinners"
import CardWrapper from "./CardWrapper"
import { newVerification } from "@/actions/new-verification"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import FormSuccess from "../FormSuccess"
import FormError from "../FormError"

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get("token")

  const onSubmit = useCallback(() => {
    if (success || error) {
      return
    }

    if (!token) {
      setError("Missing Token")
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError("Something went wrong!")
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirm your email"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <PulseLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}

export default NewVerificationForm
