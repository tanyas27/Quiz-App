import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 15,
        id: this.props.id
    }

    componentDidUpdate(PrevProps){
        if(this.props.id !== PrevProps.id ){
            this.setState({
                seconds: 15
            })
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                this.props.timerEnd(null);
            } 
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div className="time-bar">
                Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} / {minutes}:15 seconds
            </div>
        )
    }
}
