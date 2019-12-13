const React = require('react');
const {Children, Component} = React;
const PropTypes = require('prop-types');
const { Provider } = require('./context');

class BackboneProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      models: props.models,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.models === prevProps.models) return;
    this.setState({ models: this.props.models });
  }

  render() {
    return (
      <Provider value={this.state}>
        {Children.only(this.props.children)}
      </Provider>
    );
  }
}

BackboneProvider.propTypes = {
  models: PropTypes.object,
  children: PropTypes.element.isRequired,
};
BackboneProvider.displayName = 'BackboneProvider';

module.exports = BackboneProvider;
