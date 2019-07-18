import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../css.scss';
export { default as Tab } from './Tab.js';

const Item = (props) => {
    const Classes = cx({
        active: props.active,
        dot: props.dot
    });
    return (
        <li onClick={() => { props.onClick(props.index) }} className={Classes}>
            <span>
                {props.text}
            </span>
        </li>
    );
};

class Module extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTabIndex: this.props.activeTabIndex
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (index) {
        this.setState({
            activeTabIndex: index
        });
        this.props.onClick && this.props.onClick(index);
    }
    render () {

        const {
            children,
            dtm_rcln_mode,
            wrap_dtm_rcln,
            wrap_ntb_rcln
        } = this.props;

        const childrenWithProps = React.Children.map(children, (child, i) => React.cloneElement(child, {
            active: i === this.state.activeTabIndex
        })
        );

        const Classes = cx('ntb_rcln', this.props.customClass, {
            'dtm_rcln_ntb': dtm_rcln_mode,
            'wrap_dtm_rcln': wrap_dtm_rcln,
            'wrap_ntb_rcln': wrap_ntb_rcln
        });

        return (
            <div className={Classes} >
                <ul className="tabs">
                    {
                        children.map((e, i) => {

                            if (typeof e.props.label === 'object') {

                                let classes = cx({
                                    'active': i === this.state.activeTabIndex,
                                    'dot': e.props.dot
                                });

                                return (
                                    <li
                                        key={i}
                                        onClick={() => { this.handleClick(i) }}
                                        className={classes}
                                    >
                                        {e.props.label}
                                    </li>
                                );

                            } else {

                                let txet = e.props.label;

                                return <Item text={txet}
                                    key={i}
                                    index={i}
                                    onClick={this.handleClick}
                                    active={i === this.state.activeTabIndex}
                                    dot={e.props.dot}
                                />;
                            }

                        })
                    }
                </ul>
                <div className="ctns">
                    {childrenWithProps}
                </div>
            </div>
        );
    }
}
// Props default value write here
Module.defaultProps = {
    activeTabIndex: 0
};

// Typechecking with proptypes, is a place to define prop api
Module.propTypes = {
    activeTabIndex: PropTypes.number,
    customClass: PropTypes.string,
    dtm_rcln_mode: PropTypes.bool,
    wrap_dtm_rcln: PropTypes.bool,
    wrap_ntb_rcln: PropTypes.bool,
};

export default Module;