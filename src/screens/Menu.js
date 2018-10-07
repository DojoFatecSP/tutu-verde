import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Link} from 'react-router-dom';
import ButtonAppBar from '../comps/ButtonAppBar'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
    marginTop: 50,
    padding: 10,
  },
  gridList: {

  },
});

/* *
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
    {
        id: 0,
        img: "https://skyhub.com.br/wp-content/uploads/2018/01/principais-eventos-de-e-commerce-do-ano.jpg",
        title: "Meus Eventos",
        url: '/myevents',
        cols:2,
    },
    {
        id: 1,
        img: "https://www.robertwalters.com.br/content/dam/robert-walters/global/images/article-images/blur-crowd.jpg",
        title: "Contatos",
        url: '/contacts',
        cols: 1,
    },
    {
        id: 2,
        //img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE4LB66XZB7w5XggtK1V9XSkiOhVPhNvbWAA4nMnuEnoeZGZO",
        //img:"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        img: "https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&h=350",
        title: "Compartilhar Contato",
        url: '/nfc',
        cols: 3,
    }
];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <ButtonAppBar title="TUTU VERDE" />
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </GridListTile>
        {tileData.map(tile => (
            
            <GridListTile key={tile.id} cols={tile.cols}>
                <Link to={tile.url}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}
                    />
                </Link>
            </GridListTile>
            
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
