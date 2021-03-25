import React from 'react';
import H1 from '../Ui/Titles/H1';
import Button from '../Ui/Button/Button';
import classes from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={classes.not_found}>
            <H1 classname="lg">OOPS !!!</H1>
            <p className={classes.content}>Error 404 : Page Not Found</p>

            <Button type="default" containerClassname="404">
                Go to home
            </Button>
        </div>
    );
};

export default NotFound;
