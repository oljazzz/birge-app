import React, {PureComponent} from 'react'
import Khatym from '../Khatym'

import './style.css'
import List from '@material-ui/core/List';
import khatymlist from './fixtures';

export default class KhatymList extends PureComponent {
    elements = khatymlist.map((khatym) =>
        <Khatym khatym={khatym} key={khatym.id}/>);

    render() {
        return (
            <List component="nav">
                {this.elements}
            </List>
        )
    }
}
