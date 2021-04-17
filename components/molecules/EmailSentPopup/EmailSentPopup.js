import Wrapper from './EmailSentPopup.styles';
import PropTypes from 'prop-types';

const EmailSentPopup = ({ close }) => (
  <Wrapper onClick={close}>
    <div className="content">
      <img src="/images/email_sent.svg" alt="email" />
      <span>Wiadomość została wysłana 😀</span>
    </div>
  </Wrapper>
);

EmailSentPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default EmailSentPopup;
