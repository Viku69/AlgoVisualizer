// src/App.jsx
import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import { dijkstra } from '../algorithms/dijkstra';

const DijkstraVisualizer = () => {
    const [grid, setGrid] = useState([]);
    const [mouseIsPressed, setMouseIsPressed] = useState(false);
    const [startNode, setStartNode] = useState({ row: 10, col: 5 });
    const [endNode, setEndNode] = useState({ row: 10, col: 45 });

    useEffect(() => {
        const initialGrid = createInitialGrid();
        setGrid(initialGrid);
    }, []);

    const handleMouseDown = (row, col) => {
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
        setMouseIsPressed(true);
    };

    const handleMouseEnter = (row, col) => {
        if (!mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseUp = () => {
        setMouseIsPressed(false);
    };

    const handleVisualizeDijkstra = () => {
        const newGrid = grid.slice();
        const start = newGrid[startNode.row][startNode.col];
        const end = newGrid[endNode.row][endNode.col];
        const visitedNodesInOrder = dijkstra(newGrid, start, end);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(end);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    };

    const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className =
                    'node node-visited';
            }, 10 * i);
        }
    };

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className =
                    'node node-shortest-path';
            }, 50 * i);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Dijkstra's Algorithm Visualizer</h1>
            <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleVisualizeDijkstra}
            >
                Visualize Dijkstra
            </button>
            <Grid
                grid={grid}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseUp={handleMouseUp}
            />
        </div>
    );
};

const createInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
            currentRow.push(createNode(row, col));
        }
        grid.push(currentRow);
    }
    return grid;
};

const createNode = (row, col) => {
    return {
        row,
        col,
        isStart: row === 10 && col === 5,
        isEnd: row === 10 && col === 45,
        isWall: false,
        isVisited: false,
        distance: Infinity,
        previousNode: null,
    };
};

const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
        ...node,
        isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
};

const getNodesInShortestPathOrder = (endNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = endNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
};

export default DijkstraVisualizer;
