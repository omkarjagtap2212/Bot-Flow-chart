


import { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Test - 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Test - 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState('');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleToggle = () => {
    setActive((prevActive) => !prevActive);
  };

  const handleSave = () => {
    const emptyTargetHandles = nodes.filter(node => {
      const nodeEdges = edges.filter(edge => edge.source === node.id);
      return nodeEdges.length === 0;
    });

    if (emptyTargetHandles.length > 1) {
      alert('Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles');
      return;
    }

    if (active) {
      if (inputText.trim() === '') {
        alert('Please enter a message for the new node.');
        return;
      }
    }

    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'default',
      data: { label: inputText },
      position: { x: 50, y: 50 + nodes.length * 100 },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
    setInputText('');
  };

  return (
    <div className="chatbot">
      <div className='box' style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      <div className='inputText'>
        <button onClick={handleToggle}>{active ? 'CANCEL' : 'MESSAGE'}</button>

        <input
          type='text'
          disabled={!active}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
}