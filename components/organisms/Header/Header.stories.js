import Header from './Header';
import PropTypes from 'prop-types';

export default {
  title: 'Atomic Design/organisms/Header',
  argTypes: {
    backgroundImage: {
      control: {
        type: 'text',
      },
      defaultValue:
        'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Kontakt',
    },
    description: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  },
};

export const Default = ({ backgroundImage, title, description }) => (
  <Header
    backgroundImage={backgroundImage}
    title={title}
    description={description}
  />
);

Default.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
