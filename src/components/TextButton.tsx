import React from 'react';
import { styled, SxProps, Typography } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const TextButtonContainer = styled('div')(() => ({
    
}));
const TextButtonLink = styled(Link)(() => ({
    textDecoration: "none",
    // color:"black",
    // margin:"10px",
}));

interface Pops {
    title: string,
    path: string,
    sx? : SxProps,
};

function TextButton({title,path, sx={}}: Pops) {
    return (
       <TextButtonContainer>
            <Typography component={TextButtonLink} to={path} sx={{...sx}}>{title}</Typography>
       </TextButtonContainer>
    );
}

export default TextButton;