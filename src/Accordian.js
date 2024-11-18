import { useState } from "react";

export default function Accordian({ faqObj, num }) {
    const [isOpen, setIsOpen] = useState(false);

    return <div className={`accordian ${isOpen ? 'border-top' : ''}`}>
        <div onClick={() => setIsOpen(!isOpen)} className={`accordian-header ${isOpen ? 'green-color' : ''}`}>
            <h2>{num}</h2>
            <h2>{faqObj.title}</h2>
            <h2>{isOpen ? '-' : '+'}</h2>
        </div>
        <div className={`accordian-body ${isOpen ? 'active' : 'block'}`}>
            <p>{faqObj.text}</p>
        </div>
    </div>;
}
