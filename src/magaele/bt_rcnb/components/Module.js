import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../css.scss';

class Module extends Component {
    constructor (props) {
        super(props);
        this.state = {
            statename: 'state'
        };
        this.whenClick = this.whenClick.bind(this);
    }
    /**
     * ## All Lifecycle: [see detail](https://reactjs.org/docs/react-component.html)
     * * React Lifecycle
     * > - componentDidMount()
     * > - shouldComponentUpdate(nextProps, nextState)
     * > - componentDidUpdate(prevProps, prevState)
     * > - componentWillUnmount()
     * * Will be removed in 17.0: [see detail](https://github.com/facebook/react/issues/12152)
     * > - componentWillMount()
     * > - componentWillReceiveProps(nextProps)
     * > - componentWillUpdate(nextProps, nextState)
   */
    componentDidMount () {
        console.log('componentDidMount');
    }
    whenClick (e) {
        this.props.whenClick && this.props.whenClick(e);
    }
    // Your handle property functions
    handleClick (e) { }
    // Your general property functions..
    func (param) { }
    /**
     * Render Notice：
     * 1. render 裡 setState 會造成回圈，setState -> render -> setState -> render ...
     * 2. 在render前的 setSatae 放在 componentWillMount，render 後的放在 componentDidMount
     * 3. 不要使用 array 的 index 為 keys，可針對該內容 hash 後為 key
     */
    render () {
        const {
            xs,
            md,
            lg,
            Orange,
            Yellow,
            Green,
            Teal,
            Blue,
            Violet,
            Purple,
            Pink,
            Brown,
            className,
            Inverted,
            disabled,
            active,
            fluid,
            style,
            radius
        } = this.props;
        return (
            <button className={
                cx('bt_rcnb',className ,{
                    xs: xs,
                    md: md,
                    lg: lg,
                    Oragne: Orange,
                    Yellow: Yellow,
                    Green: Green,
                    Teal: Teal,
                    Blue: Blue,
                    Violet: Violet,
                    Purple: Purple,
                    Pink: Pink,
                    Brown: Brown,
                    Inverted: Inverted,
                    disabled: disabled,
                    active: active,
                    fluid: fluid,
                    radius: radius
                })
            }
            style={style}
            onClick={this.whenClick}
            >
                {this.props.children}
            </button>
        );
    }
}
/**
 * Props default value write here
 */
Module.defaultProps = {
    prop: 'string'
};
/**
 * Typechecking with proptypes, is a place to define prop api. [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 */
Module.propTypes = {
    prop: PropTypes.string.isRequired
};

export default Module;
