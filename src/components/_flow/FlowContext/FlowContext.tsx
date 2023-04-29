import React from "react";
import {Box} from "@mui/material";
import {Background, MiniMap, ReactFlow} from "reactflow";

import 'reactflow/dist/style.css';
import ClassNode, {ClassNodeData} from "@/components/_flow/nodes/ClassNode/ClassNode";
import ControlsPanel from "@/components/_flow/panels/ControlsPanel/ControlsPanel";
import useStore from "@/zustand/store";
import NodeSettingsPanel from "@/components/_flow/panels/NodeSettingsPanel/NodeSettingsPanel";

////////////////////////////////////////////////////////////////////////

export type NodeDataTypes = {
    class: ClassNodeData
}

const nodeTypes = {
    class: ClassNode
}

////////////////////////////////////////////////////////////////////////

const FlowContext: React.FC = () => {
    const store = useStore();

    return (
        <Box width="100vw" height="100vh" position="fixed">
            <ReactFlow
                nodes={store.nodes}
                edges={store.edges}
                onNodesChange={store.onNodesChange}
                onEdgesChange={store.onEdgesChange}
                onConnect={store.onConnect}
                nodeTypes={nodeTypes}
            >
                <MiniMap />
                <ControlsPanel />
                <NodeSettingsPanel />
                <Background variant="cross" gap={50}/>
            </ReactFlow>
        </Box>
    );
}

export default FlowContext;