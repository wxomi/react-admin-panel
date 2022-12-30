import React from 'react'
import {useTheme,Typography,Box} from '@mui/material'
import { tokens } from '../theme';

const Header = ({title,subtitle}) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

  return (
    <Box mb="30px">
        
    </Box>
  )
}

export default Header