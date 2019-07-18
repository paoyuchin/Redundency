import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ClickOutside extends Component {

    static propTypes = {
        onClickOutside: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props);
        this.isTouch = false;
        this.isClickInSide = false;
        this.isUnMounted = false;
        this.__domNode = null;
        this.__wrappedInstance = null;
    }

    componentDidMount () {
        document.addEventListener('click', this.handle, true);
    }

    componentWillUnmount () {
        this.isUnMounted = true;
        document.removeEventListener('click', this.handle, true);
    }

    handle = e => {
        const domNode = this.__domNode;

        if (domNode.contains(e.target)) return;

        const {
            onClickOutside,
        } = this.props;

        if (typeof onClickOutside === 'function') onClickOutside(e);
    }

    render () {

        const { children, onClickOutside, ...props } = this.props;

        return (
            <div className="insideCont"
                {...props}
                ref={e => {
                    this.__domNode = ReactDOM.findDOMNode(e);
                    this.__wrappedInstance = e;
                }}
            >
                {children}
            </div>
        );

    }
}