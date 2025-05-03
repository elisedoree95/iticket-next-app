import { useRef } from "react";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";

const FileInput = ({ label, fileName,  inputName, handleFileChange }) => {
    const inputRef = useRef()

    return (
        <Box>
            <ButtonBase
                component='label'
                sx={{width: '100%'}}
                onClick={() => inputRef.current?.click()}
                onKeyDown={
                    e => (e.keyCode === 13 || e.keyCode === 32) 
                    && inputRef.current?.click() 
                }
            >
                <TextField
                    label={label}
                    value={fileName || ''}
                    fullWidth
                />
                <input
                    type='file'
                    accept='image/*'
                    hidden
                    name={inputName}
                    onChange={handleFileChange}
                    ref={inputRef}
                />
            </ButtonBase>
        </Box>
    )
}

export default FileInput