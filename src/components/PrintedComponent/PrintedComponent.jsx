import { forwardRef } from "react";
// have to wrap functional components you want to print in forwardRef and pass ref from parent
export const PrintedComponent = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            This is the printed component
        </div>
    )
});
