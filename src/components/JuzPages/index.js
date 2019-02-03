import React, {Component} from 'react'
import GridList from "@material-ui/core/es/GridList/GridList";
import JuzPageInfo from "../JuzPageInfo";

export default class JuzPages extends Component {

    render() {
        const pages = this.props.pages.map((page, index) =>
            <JuzPageInfo key={index} page={page}/>
        );
        return (
            <GridList>{pages}</GridList>
        )
    }
}







