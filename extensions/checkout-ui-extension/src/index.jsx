import React, { useState } from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
  Checkbox,
  extend
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const {extensionPoint} = useExtensionApi();
  const translate = useTranslate();
  return <Banner status='critical' title='Welcome to checkout ui extension' onDismiss={() => {
   console.log('banner dismissed.');
  }}>{translate('welcome', {extensionPoint})}</Banner>;
}

render('Checkout::CartLines::RenderAfter', () => <CartLines />);

function CartLines() {
  const [check, setCheck] = useState(false)
  const {extensionPoint} = useExtensionApi();
  const translate = useTranslate();
  return (
    <Checkbox  name='testCheckbox' onChange={setCheck} value={check} checked={check}>
      Save this information for next tim
    </Checkbox>
  )
}
