import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton';
import ButtonAppBar from '../comps/ButtonAppBar';
import Details from './Details/DetailsConteiner';
import Documents from './Details/DocumentsConteiner';
import Participants from './Details/ParticipantsConteiner';
import {Link} from 'react-router-dom'

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    infosConteiner: {
        marginTop: 70,
        marginBottom: 70,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
  };

class EventDetails extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    renderConteiner = (value) => {
        if (value === 0) return <Details />
        if (value === 1) return <Documents />
        return <Participants />
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div>
                <ButtonAppBar title={this.props.match.params.event} onLogout={this.props.onLogout}> 
                    <Link to="/">
                        <IconButton className={classes.menuButton} color="default" aria-label="Home">
                            <HomeIcon/>
                        </IconButton>
                    </Link>
                </ButtonAppBar>
                <div className={classes.infosConteiner}>
                    { this.renderConteiner(value) }
                </div>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="Detalhes" icon={<InfoIcon />} />
                    <BottomNavigationAction label="Documentos" icon={<AttachmentIcon />} />
                    <BottomNavigationAction label="Participantes" icon={<AccountCircleIcon />} />
                </BottomNavigation>
            </div>
          );
    }
}

EventDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(EventDetails)