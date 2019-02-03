import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import JuzPages from "../JuzPages";
import Divider from "@material-ui/core/es/Divider/Divider";


export default class Juz extends Component {
    render() {
        const juzNumber = this.props.juzNumber;
        const whoReading = this.props.user.name;
        const pages = this.props.pages;
        return (
            <ListItem>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h6" color="textPrimary" component="h2">
                            {juzNumber} - пара
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            Кім оқып жатыр? - {whoReading}
                        </Typography>
                        <Divider/>
                        <br/>
                        <JuzPages pages={pages}/>
                    </CardContent>
                </Card>
            </ListItem>
        )
    }
}


