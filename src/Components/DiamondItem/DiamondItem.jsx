import React from 'react';
import './_item.scss';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export const DiamondItem = ({ diamond }) => {
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    body: {
      fontSize: 12,
    },
  }))(TableCell);

  return (
    <StyledTableRow>
      <StyledTableCell align="center">{diamond.Stock_NO}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Shape}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Carat}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Clarity}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Color}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Cut}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Polish}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Symmetry}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Fluorescent}</StyledTableCell>
      <StyledTableCell align="center">{diamond.CULET}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Location}</StyledTableCell>
      <StyledTableCell align="center">
        <a href="https://diamanti.s3.amazonaws.com/images/diamond/988608.jpg">
          <img
            style={{ width: '50%' }}
            src="https://diamanti.s3.amazonaws.com/images/diamond/988608.jpg"
            alt="diamond"
          />
        </a>
      </StyledTableCell>
      <StyledTableCell align="center">
        <a href={diamond.CertificateLink}>Certificate</a>
      </StyledTableCell>
      <StyledTableCell align="center">
        <a href={diamond.VideoLink}>video</a>
      </StyledTableCell>
      <StyledTableCell align="center">{diamond.PPC}</StyledTableCell>
      <StyledTableCell align="center">{diamond.Total_Price}</StyledTableCell>
    </StyledTableRow>
  );
};
