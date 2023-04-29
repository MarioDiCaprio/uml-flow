import React, {ChangeEvent} from "react";
import {Node} from "reactflow";
import useStore from "@/zustand/store";
import {IconButton, Paper, TableBody, TableCell, TableContainer, TableRow, TextField, Typography} from "@mui/material";
import {StyledTable} from "./ClassNodeSettings.styles";
import {MdDelete as DeleteIcon} from "react-icons/md";
import {ClassNodeData} from "@/components/_flow/nodes/ClassNode/ClassNode";
import {useNodeById} from "@/components/_flow/nodeQueries";


const ClassNodeSettings: React.FC<{ id: string }> = ({ id }) => {
    const node = useNodeById<ClassNodeData>(id) as Node<ClassNodeData>;
    const setNodeData = useStore(state => state.setNodeData);

    function changeName(event: ChangeEvent<HTMLInputElement>) {
        let data = node.data;
        data.name = event.target.value;
        setNodeData(id, data);
    }

    function deleteAttribute(index: number) {
        let tmp = [];
        for (let i=0; i<node.data.attributes.length; i++) {
            if (i !== index) {
                tmp.push(node.data.attributes[i]);
            }
        }
        setNodeData(id, {
            ...node.data,
            attributes: tmp
        } as ClassNodeData);
    }

    return (
        <div>
            <Typography color="text.secondary" gutterBottom>
                Name
            </Typography>
            <TextField
                variant="outlined"
                fullWidth
                value={node.data.name}
                onChange={changeName}
            />
            <Typography color="text.secondary" marginTop="20px" marginBottom="10px">
                Attributes
            </Typography>
            <TableContainer component={Paper as any}>
                <StyledTable>
                    <TableBody>
                        {node.data.attributes.map((x, index) => (
                            <TableRow key={x}>
                                <TableCell>
                                    { x }
                                </TableCell>
                                <TableCell>
                                    <IconButton color="error" onClick={() => deleteAttribute(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </div>
    );
}

export default ClassNodeSettings;