import React, { Component } from 'react';
import axios from "axios";
import { getEmployeeApi } from "../assets/services";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Home extends Component {
    state = {
        employee: [],
    };

    componentDidMount = () => {
        axios
            .get(getEmployeeApi)
            .then((res) => {
                //console.log(res.data);
                this.setState({
                    employee: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const employeeData = this.state.employee.length ? (
            this.state.employee.map((emp) => {
                return (
                    <React.Fragment key={emp.id}>
                        <div className='col-lg-4'>
                            <label className="form-label"></label>
                            <div className="form-group">
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={emp.imageUrl}
                                        title={emp.email}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {emp.firstName + " " + emp.lastName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })
        ) : (
            <></>
        );

        return (
            <div style={{ textAlign: 'center', marginLeft: '50px', marginRight: 'auto' }}>
                <h1>EMPLOYEE INFORMATION</h1>
                <div className='row'>{employeeData}</div>
            </div>
        );
    }
}

export default Home;