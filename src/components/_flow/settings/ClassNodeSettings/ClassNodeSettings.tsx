import React, {ChangeEvent, useState} from "react";
import {Node} from "reactflow";
import useStore from "@/zustand/store";
import {IconButton, Paper, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {StyledTable, StyledTextField} from "./ClassNodeSettings.styles";
import {MdDelete as DeleteIcon, MdAddBox as AddIcon} from "react-icons/md";
import {ClassNodeData} from "@/components/_flow/nodes/ClassNode/ClassNode";
import {useNodeById} from "@/components/_flow/nodeQueries";
import OneLineInputModal from "@/components/OneLineInputModal/OneLineInputModal";


const ClassNodeSettings: React.FC<{ id: string }> = ({ id }) => {
    const node = useNodeById<ClassNodeData>(id) as Node<ClassNodeData>;
    const setNodeData = useStore(state => state.setNodeData);

    const [isAddingAttribute, setIsAddingAttribute] = useState<boolean>(false);
    const [isAddingOperation, setIsAddingOperation] = useState<boolean>(false);

    function changeName(event: ChangeEvent<HTMLInputElement>) {
        let data = node.data;
        data.name = event.target.value;
        setNodeData(id, data);
    }

    function addAttribute(name: string) {
        let tmp = node.data.attributes;
        tmp.push(name);
        let data = { ...node.data, attributes: tmp };
        setNodeData(id, data);
    }

    function deleteAttribute(index: number) {
        let tmp = [];
        for (let i=0; i<node.data.attributes.length; i++) {
            if (i !== index) {
                tmp.push(node.data.attributes[i]);
            }
        }
        let data: ClassNodeData = { ...node.data, attributes: tmp };
        setNodeData(id, data);
    }

    function addOperation(name: string) {
        let tmp = node.data.operations;
        tmp.push(name);
        let data = { ...node.data, operations: tmp };
        setNodeData(id, data);
    }

    function deleteOperation(index: number) {
        let tmp = [];
        for (let i=0; i<node.data.operations.length; i++) {
            if (i !== index) {
                tmp.push(node.data.operations[i]);
            }
        }
        let data: ClassNodeData = { ...node.data, operations: tmp };
        setNodeData(id, data);
    }

    return (
        <div>

            <Typography color="text.secondary" gutterBottom>
                Name
            </Typography>

            <StyledTextField
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

                    <caption>
                        <IconButton color="primary" onClick={() => setIsAddingAttribute(true)}>
                            <AddIcon />
                        </IconButton>
                    </caption>

                </StyledTable>
            </TableContainer>

            <OneLineInputModal
                title="Add Attribute"
                open={isAddingAttribute}
                onClose={() => setIsAddingAttribute(false)}
                onInput={addAttribute}
            />

            <Typography color="text.secondary" marginTop="20px" marginBottom="10px">
                Operations
            </Typography>

            <TableContainer component={Paper as any}>
                <StyledTable>

                    <TableBody>
                        {node.data.operations.map((x, index) => (
                            <TableRow key={x}>
                                <TableCell>
                                    { x }
                                </TableCell>
                                <TableCell>
                                    <IconButton color="error" onClick={() => deleteOperation(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <caption>
                        <IconButton color="primary" onClick={() => setIsAddingOperation(true)}>
                            <AddIcon />
                        </IconButton>
                    </caption>

                </StyledTable>
            </TableContainer>

            <OneLineInputModal
                title="Add Attribute"
                open={isAddingOperation}
                onClose={() => setIsAddingOperation(false)}
                onInput={addOperation}
            />

        </div>
    );
}

export default ClassNodeSettings;