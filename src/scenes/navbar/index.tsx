import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';


const Navbar: React.FC = () => {
    const { palette } = useTheme();
  return (
     <FlexBetween
      mb="0.25rem" 
      p="0.5rem 0rem" 
      color={palette.grey[300]}
      >hey
      </FlexBetween>
  );
};

export default Navbar;
