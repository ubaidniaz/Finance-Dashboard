import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';


const Navbar: React.FC = () => {
    const { palette } = useTheme();
  return (
     <Box
      display="flex" 
      justifyContent="space-between" 
      alignItems= "center" 
     ></Box>
  );
};

export default Navbar;
