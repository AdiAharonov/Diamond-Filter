import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import './_filter.scss';
import { Styles } from '../../Consts';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export const Filter = ({ onSetFilter }) => {
  const [anchorE1, setAnchorE1] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = React.useState(null);
  const [anchorE5, setAnchorE5] = React.useState(null);
  const [anchorE6, setAnchorE6] = React.useState(null);
  const [anchorE7, setAnchorE7] = React.useState(null);
  const [anchorE8, setAnchorE8] = React.useState(null);

  const handleChange = ({ target }, field) => {
    if (field !== 'Carat') {
      const value = target.outerText;
      onSetFilter(value, field);
    } else {
      const name = target.name;
      const value = target.value;
      if (!value && name === 'minCarat') onSetFilter(0, field, name);
      if (!value && name === 'maxCarat') onSetFilter(Infinity, field, name);
      else onSetFilter(value, field, name);
    }
  };
  return (
    <div className={Styles.FILTER}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE1(e.currentTarget)}
      >
        Shape
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE1}
        keepMounted
        open={Boolean(anchorE1)}
        onClose={(e) => setAnchorE1(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Shape')}>
          <ListItemText primary="ROUND" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Shape')}>
          <ListItemText primary="OVAL" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Shape')}>
          <ListItemText primary="PEAR" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Shape')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE2(e.currentTarget)}
      >
        Carat
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE2}
        keepMounted
        open={Boolean(anchorE2)}
        onClose={(e) => setAnchorE2(null)}
      >
        <StyledMenuItem>
          <input
            type="number"
            placeholder="Min Value"
            name="minCarat"
            onChange={(e) => handleChange(e, 'Carat')}
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <input
            type="number"
            name="maxCarat"
            placeholder="Max Value"
            onChange={(e) => handleChange(e, 'Carat')}
          />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE3(e.currentTarget)}
      >
        Color
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE3}
        keepMounted
        open={Boolean(anchorE3)}
        onClose={(e) => setAnchorE3(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="E" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="F" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="G" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="H" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="D" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="FANCY" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="I" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="S-T" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="Q-R" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Color')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE4(e.currentTarget)}
      >
        Clarity
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE4}
        keepMounted
        open={Boolean(anchorE4)}
        onClose={(e) => setAnchorE4(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="VVS1" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="VVS2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="SI1" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="VS1" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="I2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="VS2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="SI2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="IF" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Clarity')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE5(e.currentTarget)}
      >
        Cut
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE5}
        keepMounted
        open={Boolean(anchorE5)}
        onClose={(e) => setAnchorE5(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Cut')}>
          <ListItemText primary="EX" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Cut')}>
          <ListItemText primary="VG" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Cut')}>
          <ListItemText primary="GD" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Cut')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE6(e.currentTarget)}
      >
        Polish
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE6}
        keepMounted
        open={Boolean(anchorE6)}
        onClose={(e) => setAnchorE6(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Polish')}>
          <ListItemText primary="EX" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Polish')}>
          <ListItemText primary="VG" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Polish')}>
          <ListItemText primary="GD" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Polish')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE7(e.currentTarget)}
      >
        Symmetry
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE7}
        keepMounted
        open={Boolean(anchorE7)}
        onClose={(e) => setAnchorE7(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Symmetry')}>
          <ListItemText primary="EX" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Symmetry')}>
          <ListItemText primary="VG" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Symmetry')}>
          <ListItemText primary="GD" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Symmetry')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#eee"
        onClick={(e) => setAnchorE8(e.currentTarget)}
      >
        Flour
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorE8}
        keepMounted
        open={Boolean(anchorE8)}
        onClose={(e) => setAnchorE8(null)}
      >
        <StyledMenuItem onClick={(e) => handleChange(e, 'Flour')}>
          <ListItemText primary="M" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Flour')}>
          <ListItemText primary="N" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Flour')}>
          <ListItemText primary="ST" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Flour')}>
          <ListItemText primary="F" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleChange(e, 'Flour')}>
          <ListItemText primary="ALL" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
