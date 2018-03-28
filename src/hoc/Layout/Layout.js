import React, {Component} from 'react';
import Aux from '../Auxiliaire/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDraweToggleHandler = () => {
        this.setState( ( prevState ) =>{
            return {showSideDrawer : !prevState.showSideDrawer};
        })
    }


    render(){
        return(
            <Aux>
        <Toolbar drawerTogglerClicked={this.sideDraweToggleHandler} />
        <SideDrawer 
        open={this.state.showSideDrawer} 
        close={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>
        )
    }
};

export default Layout;