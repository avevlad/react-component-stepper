import * as React from 'react';

interface StepperProps {

}

export const Stepper: React.FC<StepperProps> = (props) => {
    console.log("props = ", props);

    return (
        <div>
            Stepper
        </div>
    );
};
