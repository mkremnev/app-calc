import React from 'react';
import { CustomLink } from './Link';
import { LinkProps } from './types';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Component / Interfaces / CustomLink',
	component: CustomLink,
	parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const CustomLinkStory: Story<LinkProps> = () => (
	<Router>
		<CustomLink to="/" label="Home" activeOnlyWhenExact={true} />
	</Router>
);
