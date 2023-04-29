import {Node} from "reactflow";
import useStore from "@/zustand/store";
import {useMemo} from "react";


export function useNodeById<T>(id: String): Node<T> | undefined {
    const nodes = useStore(state => state.nodes);

    return useMemo(() => {
        for (let node of nodes) {
            if (node.id === id)
                return node;
        }
        return undefined;
    }, nodes);
}