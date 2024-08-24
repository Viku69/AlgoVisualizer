// src/components/Node.jsx
import React from 'react';

const Node = ({ row, col, isWall, isStart, isEnd, isVisited, onMouseDown, onMouseEnter, onMouseUp }) => {
    const baseClasses = 'w-8 h-8 border border-gray-400';
    const extraClassName = isWall
        ? 'bg-gray-700'
        : isStart
            ? 'bg-green-500'
            : isEnd
                ? 'bg-red-500'
                : isVisited
                    ? 'bg-yellow-300'
                    : 'bg-white';

    return (
        <div
            id={`node-${row}-${col}`}
            className={`${baseClasses} ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}
        ></div>
    );
};

export default Node;
