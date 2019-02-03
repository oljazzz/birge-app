import React, {Component} from 'react'
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import JuzList from "../JuzList";
import Paper from "@material-ui/core/es/Paper/Paper";

class Khatym extends Component {
    render() {
        return <Paper>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {this.props.khatym.title}
                    </Typography>

                    <Typography variant="h6" color="textSecondary">
                        * Құран Кәрімнің толықтай Хатым етіліп бітетін уақыты:
                        <strong>{new Date(this.props.khatym.endDate).toDateString()}</strong>
                    </Typography>
                    <JuzList juzes={this.props.khatym.juzes}/>
                </CardContent>
            </Card>
        </Paper>
    }
}

export default Khatym

