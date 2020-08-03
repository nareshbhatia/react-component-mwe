import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import { theme } from './theme';

addDecorator(storyFn => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {storyFn()}
    </ThemeProvider>
));
