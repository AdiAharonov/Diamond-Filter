import React from 'react';
import { DiamondItem } from '../DiamondItem/DiamondItem';
import { Styles } from '../../Consts';
import './_list.scss';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: window.innerWidth - 100,
  },
});

export const DiamondsList = ({ diamonds }) => {
  const classes = useStyles();
  return (
    <div className={Styles.LIST}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Stock NO</TableCell>
              <TableCell align="center">Shape</TableCell>
              <TableCell align="center">Carat</TableCell>
              <TableCell align="center">Clarity</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Cut</TableCell>
              <TableCell align="center">Polish</TableCell>
              <TableCell align="center">Symmetry</TableCell>
              <TableCell align="center">Fluorescent</TableCell>
              <TableCell align="center">CULET</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">CertificateLink</TableCell>
              <TableCell align="center">VideoLink</TableCell>
              <TableCell align="center">PPC</TableCell>
              <TableCell align="center">Total Price</TableCell>
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
