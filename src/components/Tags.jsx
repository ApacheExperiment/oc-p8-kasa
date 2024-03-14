import React from 'react'

function Tags({ tags }) {
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li className="tag" key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    )
}

export default Tags