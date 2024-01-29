import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

class SB3DatabaseSaver extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'saveProjectToDatabase'
        ]);
    }
    saveProjectToDatabase () {
        this.props.saveProjectSb3().then(content => {
            // Replace this with the code to save the project to your database using Django.
            console.log('Save project to database:', content);
        });
    }
    render () {
        const {
            children
        } = this.props;
        return children(
            this.props.className,
            this.saveProjectToDatabase
        );
    }
}

SB3DatabaseSaver.propTypes = {
    children: PropTypes.func,
    className: PropTypes.string,
    saveProjectSb3: PropTypes.func
};
SB3DatabaseSaver.defaultProps = {
    className: ''
};

const mapStateToProps = state => ({
    saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm)
});

export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(SB3DatabaseSaver);
