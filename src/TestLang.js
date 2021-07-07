import React from 'react'
import { useIntl } from 'react-intl';

const TestLang = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
       <div>{formatMessage({ id: 'name' })}</div>
    </div>
  )
}

export default TestLang
