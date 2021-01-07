import React from 'react';
import { DiamondItem } from '../DiamondItem/DiamondItem';
import { Styles } from '../../Consts';
import './_list.scss';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
}))(TableCell);

export const DiamondsList = ({ diamonds }) => {
  return (
    <div className={Styles.LIST}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Stock No.</StyledTableCell>
              <StyledTableCell align="center">Shape</StyledTableCell>
              <StyledTableCell align="center">Carat</StyledTableCell>
              <StyledTableCell align="center">Clarity</StyledTableCell>
              <StyledTableCell align="center">Color</StyledTableCell>
              <StyledTableCell align="center">Cut</StyledTableCell>
              <StyledTableCell align="center">Polish</StyledTableCell>
              <StyledTableCell align="center">Symmetry</StyledTableCell>
              <StyledTableCell align="center">Fluorescent</StyledTableCell>
              <StyledTableCell align="center">CULET</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">ImageLink</StyledTableCell>
              <StyledTableCell align="center">CertificateLink</StyledTableCell>
              <StyledTableCell align="center">VideoLink</StyledTableCell>
              <StyledTableCell align="center">PPC</StyledTableCell>
              <StyledTableCell align="center">Total Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {diamonds.map((diamond, idx) => (
              <DiamondItem key={idx} diamond={diamond} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
