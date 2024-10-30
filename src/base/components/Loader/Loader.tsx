import loader_step1 from '../../../assets/loader_step1.svg'
import loader_step2 from '../../../assets/loader_step2.svg'
import loader_step3 from '../../../assets/loader_step3.svg'
import loader_step4 from '../../../assets/loader_step4.svg'
import { Icon } from '../'
import { useEffect, useState } from 'react'

export const Loader = () => {
    const allSteps = [loader_step1, loader_step2, loader_step3, loader_step4];

    const [currentStep, setCurrentStep] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentStep(allSteps[currentIndex]);
    }, [currentIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % allSteps.length);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {currentStep && (
                <Icon
                    icon={currentStep} 
                />
            )}
        </>
    );
}