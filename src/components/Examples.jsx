import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Tabs from './Tabs.jsx';

export default function Examples() {
  const [SelectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic</p>;
  if (SelectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[SelectedTopic].title}</h3>
        <p>{EXAMPLES[SelectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[SelectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={SelectedTopic === 'components'}
              onClick={() => handleSelect('components')}>
              Component
            </TabButton>
            <TabButton
              isSelected={SelectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}>
              JSX
            </TabButton>

            <TabButton
              isSelected={SelectedTopic === 'props'}
              onClick={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={SelectedTopic === 'state'}
              onClick={() => handleSelect('state')}>
              State
            </TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
      <menu></menu>
    </section>
  );
}
