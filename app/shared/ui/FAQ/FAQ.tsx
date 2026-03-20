"use client"

import { useState } from "react";
import { FAQData } from "./FAQ.type";
import Image from "next/image";

const FAQ = ({ items }: FAQData) => {
    const [active, setActive] = useState<number | null>(null);

    const hadleActive = (id: number) => {
        if(active === id) setActive(null);
        else setActive(id);
    }

    return (
        <div className="faq">
            <div className="faq__sidebar">
                <h2>Часто задаваемые<br />вопросы (FAQ)</h2>
                <Image src={`/`} alt={`image`} />
            </div>
            <div className="faq__main">
                {items.map(faq => (
                    <div className={`faq__item ${active === faq.id ? 'active' : ''}`} key={faq.id}>
                        <div className="faq__heading" onClick={() => {hadleActive(faq.id)}}>
                            <h3 className="faq__title">{faq.question}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <rect x="12.5" y="0.5" width="1" height="25" fill="#266B84" stroke="#266B84" />
                                <rect x="25.5" y="12.5" width="1" height="25" transform="rotate(90 25.5 12.5)" fill="#266B84" stroke="#266B84" />
                            </svg>
                        </div>
                        <div className="faq__body">
                            <p className="faq__answer">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}