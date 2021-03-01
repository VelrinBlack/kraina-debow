import Logo from './Logo';
import PropTypes from 'prop-types';

export default {
  title: 'Atomic Design/molecules/Logo',
  argTypes: {
    hasBackground: { control: 'boolean' },
  },
};

export const Default = ({ hasBackground }) => (
  <Logo hasBackground={hasBackground} />
);

Default.propTypes = {
  hasBackground: PropTypes.bool.isRequired,
};
