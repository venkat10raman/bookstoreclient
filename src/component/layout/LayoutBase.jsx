import React from 'react'
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import Header from './Header';

const propTypes = {
    children: PropTypes.node.isRequired
}

const LayoutBase = ({children}) => {

    return (
      <Box>
          <Box>
              <Header/>
          </Box>
          <Box mt={8} ml={5}>
              {children}
          </Box>
      </Box>
    )
  }

LayoutBase.propTypes = propTypes;
export default LayoutBase