import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import {useIntl} from 'react-intl';

function SelfIntroduction() {
    const { formatMessage: f } = useIntl();
    return (
        <div className="selfIntroduction">
            <div className="profileContainer">
                <span className=""><ImQuotesLeft /></span>
                <p>{f({ id: 'introduction.p' })}</p>
                <span className=""><ImQuotesRight /></span>
            </div>
        </div>
    )
}

export default SelfIntroduction
