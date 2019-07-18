import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Tab extends Component {
    render () {
        const Classes = cx('panel', {
            active: this.props.active
        });

        return (
            <div className={Classes}>
                {this.props.children}
            </div>
        );
    }
}

Tab.defaultProps = {
    label: '我是頁籤'
};

Tab.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Tab;