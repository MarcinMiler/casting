import { useState } from 'react'

export const useWizard = (maxSteps: number, initialStep = 1) => {
    const [step, setStep] = useState(initialStep)

    const nextPage = () => {
        if (step === maxSteps) return

        setStep(step + 1)
    }

    const prevPage = () => {
        if (step === 1) return

        setStep(step - 1)
    }

    return {
        step,
        maxSteps,
        nextPage,
        prevPage
    }
}
