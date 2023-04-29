import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Edge,
    Node,
    OnConnect,
    OnEdgesChange,
    OnNodesChange
} from "reactflow";
import {create} from "zustand";


interface FlowState {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
}

let initialNodes: FlowState['nodes'] = [];
let initialEdges: FlowState['edges'] = [];

const useStore = create<FlowState>((set, get) => ({
    // state
    nodes: initialNodes,
    edges: initialEdges,
    onNodesChange: changes => {
        set({
            nodes: applyNodeChanges(changes, get().nodes)
        })
    },
    onEdgesChange: changes => {
        set({
            edges: applyEdgeChanges(changes, get().edges)
        })
    },
    onConnect: connection => {
        set({
            edges: addEdge(connection, get().edges)
        })
    },
    // actions
    addNode: (node: Node) => {
        set({
            nodes: [...get().nodes, node]
        })
    },
    setNodeData: (id: string, data: any) => {
        set({
            nodes: get().nodes.map(node => {
                if (node.id === id) {
                    node.data = { ...data };
                }
                return node;
            })
        })
    }
}));

export default useStore;