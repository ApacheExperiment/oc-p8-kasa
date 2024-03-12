import React from 'react'
import { useState, useRef } from 'react'
import arrow from '../assets/arrow_top.png'

function Collapse ({datas, title}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const handleDatas = () => {
        if (typeof datas === 'string') {
            return <li>{datas}</li>
        }
        return datas.map((data, index) => <li key={index}>{data}</li>)
    }

    const parentRef = useRef()

    return (
        <div className="collapse">
            <img 
            onClick={toggle}
            className={`collapse__button ${isOpen ? 'active' : ''}`}
            src={arrow} 
            alt="collapse arrow"/>
            <h3>{title}</h3>
            <div 
                ref={parentRef} 
                className={`collapse__content-container ${isOpen ? 'active' : ''} `}
                style={
                    isOpen
                    ? {height: parentRef.current.scrollHeight + 'px'}
                    : {height: '0px' }
            }
            >
            <ul className="collapse__content">{handleDatas()}</ul>
            </div>
        </div>
    )
}
export default Collapse