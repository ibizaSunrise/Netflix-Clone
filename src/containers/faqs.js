import React from 'react'
import { Accordion } from '../components'
import OptForm from '../components/opt-form'
import faqsData from '../fixtures/faqs'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
            <OptForm>
                <OptForm.Text>Redy to watch? Enter your email to create or restart your membership</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placecholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
            </OptForm>
        </Accordion>
    )
}