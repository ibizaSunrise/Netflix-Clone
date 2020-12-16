import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles/>', () => {
    it('renders the <Profiles/> with populated data', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => { }}>
                        <Profiles.Picture src='/img/mila.png' data-testid='profile-picrure' />
                        <Profiles.Name>Mila Lemekh</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        );

        expect(getByText("Who's watching?"));
        expect(getByTestId('profile-pictur')).toBeTruthy();
        expect(getByText('Mila Lemekh')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Profiles/> with populated data but misc profile image', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => { }}>
                        <Profiles.Picture data-testid='profile-picrure-misc' />
                        <Profiles.Name>Mila Lemekh</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        );
        expect(getByText("Who's watching?"));
        expect(getByTestId('profile-pictur')).toBeTruthy();
        expect(getByText('Mila Lemekh')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});