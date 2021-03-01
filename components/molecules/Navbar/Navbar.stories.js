import Navbar from './Navbar';
import PropTypes from 'prop-types';

export default {
  title: 'Atomic Design/molecules/Navbar',
  argTypes: {
    isCentered: { control: 'boolean' },
  },
};

export const Default = ({ isCentered }) => <Navbar isCentered={isCentered} />;

Default.propTypes = {
  isCentered: PropTypes.bool.isRequired,
};
