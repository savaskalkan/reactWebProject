import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem, 
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: "100px"
    }
});

class ToDO extends Component {
    state = {};

    generate = () => {
        return this.props.items.map(item => (
            <ListItem key={item.id}>
                <ListItemText primary={item.description} />
                <IconButton
                    aria-label="Delete"
                    onClick={() => this.handleDelete(item.id)}
                    value={item.id}
                >
                    <DeleteIcon />
                </IconButton>
                <Button onClick={() => this.handleUpdate(item.id)}>upd</Button>
            </ListItem>
        ));
    };

    handleSubmit = () => {
        console.log("ts", this.state.item);
        this.setState({ item: "" });
        if (this.state.item !== "") {
            // add the item to the store
            this.props.createItem(this.state.item);
        }
    };

    handleDelete = id => {
        // delete the item from the store
        this.props.deleteItem(id);
    };

    handleUpdate = id => {
        // delete the item from the store
        this.props.updateItem(id);
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <div>
                    <TextField
                        label="New Task"
                        id="margin-dense"
                        value={this.state.item}
                        margin="dense"
                        name="item"
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.handleSubmit} >Add</Button>
                </div>
                <div>
                    <Grid item container justify="space-evenly" alignItems="center">
                        <div>
                            <List dense={false}>{this.generate()}</List>
                        </div>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
    updateItem: id => dispatch(ACTIONS.updateItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ToDO));