import {useState} from 'react';
import { Link } from 'react-router-dom';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';


const Navbar: React.FC = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
  return (
     <FlexBetween
      mb="0.25rem" 
      p="0.5rem 0rem" 
      color={palette.grey[300]}
      >{/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
      <EscalatorWarningIcon />

      </FlexBetween>
      </FlexBetween>
  );
};

export default Navbar;
