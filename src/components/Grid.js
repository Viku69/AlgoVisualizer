// src/components/Grid.jsx
import React from 'react';
import Node from './Node';

const Grid = ({ grid, onMouseDown, onMouseEnter, onMouseUp }) => {
    return (
        <div className="flex flex-col items-center">
            {grid.map((row, rowidx) => (
                <div key={rowidx} className="flex">
                    {row.map((node, nodeidx) => {
                        const { row, col, isWall, isStart, isEnd, isVisited } = node;
                        return (
                            <Node
                                key={nodeidx}
                                row={row}
                                col={col}
                                isWall={isWall}
                                isStart={isStart}
                                isEnd={isEnd}
                                isVisited={isVisited}
                                onMouseDown={onMouseDown}
                                onMouseEnter={onMouseEnter}
                                onMouseUp={onMouseUp}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Grid;


