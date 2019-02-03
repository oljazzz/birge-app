import React, {Component} from 'react'
import Chip from "@material-ui/core/es/Chip/Chip";

export default class JuzPageInfo extends Component {
    render() {
        const page = this.props.page;

        return (
            <Chip label={page.pageNumber} clickable={true}
                  color={page.isAlreadyRead ? "primary": "default"}
            />
        )
    }
}

