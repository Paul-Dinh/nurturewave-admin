import './App.css';
import TableContent from './components/Table/TableContent.tsx';

function App() {
  const head = ['Slug', 'Category', 'Required', 'Title', 'Status', 'Action'];
  const body = [
    {
      id: '1',
      slug: 'term-2',
      category: 'Term',
      required: 'No',
      title: 'Term 2',
      status: 'Hide',
      action: '',
    },
    {
      id: '2',
      slug: 'term-2',
      category: 'Term',
      required: 'No',
      title: 'Term 2',
      status: 'Hide',
      action: '',
    },
    {
      id: '3',
      slug: 'term-2',
      category: 'Term',
      required: 'No',
      title: 'Term 2',
      status: 'Hide',
      action: '',
    },
  ];

  return (
    <TableContent
      head={head}
      body={body}
    />
  );
}

export default App;
