import React, {Component} from 'react'
import List from '@material-ui/core/List';
import Juz from '../Juz'

export default class JuzList extends Component {
    render() {
        const juzList = this.props.juzes.map((juz) =>
            <Juz key={juz.juzNumber} juzNumber={juz.juzNumber} user={juz.user} pages={juz.pages}/>);
        return (
            <List>
                {juzList}
            </List>
        )
    }
}


