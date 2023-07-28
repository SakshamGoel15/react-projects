import Accordion from '../components/Accordion'


function AccordionPage() {
  const accordionData = [
    {
      id: 1,
      heading: 'Heading 1',
      content: 'Content 1'
    },
    {
      id: 2,
      heading: 'Heading 2',
      content: 'Content 2'
    },
    {
      id: 3,
      heading: 'Heading 3',
      content: 'Content 3'
    }
  ];
  return (
    <Accordion data={accordionData} />
  )
}

export default AccordionPage