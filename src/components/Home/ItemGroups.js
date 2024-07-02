import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import honey from '../../bin/honey.png'
import candles from '../../bin/candles.png'
import cosmetics from '../../bin/cosmetics.png'
import mead from '../../bin/mead.png'
import './ItemGroups.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ecb35c',
        contrastText: '#fff'
      },
      raisedButton: {
        textColor: '#fff'
      },
    },
  });
  

function ItemGroups(props) {
    const { data } = props;

    return (
        <div className='ItemGroups'>
                      {
                (data.id === 4) ?<img src={mead} /> :
                (data.id=== 3) ?<img src={cosmetics} /> :
                (data.id === 2) ?<img src={candles} /> :
                <img src={honey} /> 
            }
            <div className="itemGroupInfo">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/webshop/${data.id}`} 
                    >Explore!
                </Button>
            </ThemeProvider>
        </div>
    );
};

export default ItemGroups;