import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import PrintedComponent from "../PrintedComponent";

export default function TestPage() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div>
            <PrintedComponent ref={componentRef}/>
            <button onClick={handlePrint}>Print</button>
        </div>
    )
}