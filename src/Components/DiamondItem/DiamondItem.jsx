import React from 'react';
import './_item.scss';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const DiamondItem = ({ diamond }) => {
  return (
    <TableRow>
      <TableCell align="center">{diamond.Stock_NO}</TableCell>
      <TableCell align="center">{diamond.Shape}</TableCell>
      <TableCell align="center">{diamond.Carat}</TableCell>
      <TableCell align="center">{diamond.Clarity}</TableCell>
      <TableCell align="center">{diamond.Color}</TableCell>
      <TableCell align="center">{diamond.Cut}</TableCell>
      <TableCell align="center">{diamond.Polish}</TableCell>
      <TableCell align="center">{diamond.Symmetry}</TableCell>
      <TableCell align="center">{diamond.Fluorescent}</TableCell>
      <TableCell align="center">{diamond.CULET}</TableCell>
      <TableCell align="center">{diamond.Location}</TableCell>
      <TableCell align="center">link</TableCell>
      <TableCell align="center">video</TableCell>
      <TableCell align="center">{diamond.PPC}</TableCell>
      <TableCell align="center">{diamond.Total_Price}</TableCell>
    </TableRow>
  );
};
