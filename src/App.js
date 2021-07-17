import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from 'components/layouts/Layout';
import messages from 'language';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

const queryClient = new QueryClient();

function App() {
  console.log(messages);
  const [locale, setLocale] = useState('en');

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Router>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </IntlProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
