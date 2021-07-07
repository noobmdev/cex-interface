import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from 'components/layouts/Header';
import Layout from 'components/layouts/Layout';
import messages from 'language';
import React, { useState } from 'react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

function App() {
  console.log(messages);
  const [locale, setLocale] = useState('en');

  return (
    <ChakraProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </IntlProvider>
    </ChakraProvider>
  );
}

export default App;