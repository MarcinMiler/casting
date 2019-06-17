import { useState } from 'react'

export const useWizard = (maxSteps: number, initialStep = 0) => {
    const [step, setStep] = useState(initialStep)

    const nextPage = () => {
        if (step === maxSteps) return

        setStep(step + 1)
    }

    const prevPage = () => {
        if (step === 0) return

        setStep(step - 1)
    }

    return {
        step,
        maxSteps,
        nextPage,
        prevPage
    }
}
