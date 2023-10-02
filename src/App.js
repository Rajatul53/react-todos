import './App.css';
import './components/TodoRowItem';
import TodoRowItem from './components/TodoRowItem';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Gardening', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Dinner', rowAssigned: 'User One' }
  ]
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem
                rowNumber={todos[0].rowAssigned}
                rowDescription={todos[0].rowDescription}
                rowAssigned={todos[0].rowAssigned}
              />
              <TodoRowItem
                rowNumber={todos[1].rowAssigned}
                rowDescription={todos[1].rowDescription}
                rowAssigned={todos[1].rowAssigned}
              />
              <TodoRowItem
                rowNumber={todos[2].rowAssigned}
                rowDescription={todos[2].rowDescription}
                rowAssigned={todos[2].rowAssigned}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
