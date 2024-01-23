import React, { useEffect, useState } from 'react';
const Participants = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/auth/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPeople(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const [confirmDelete, setConfirmDelete] = useState({});

  const checkDelete = (userId) => {
    setConfirmDelete(prev => {
      // If already confirming, then delete the user
      if (prev[userId]) {
        handleDelete(userId);
        return { ...prev, [userId]: false }; // Reset back to normal state after deletion
      }

      // Otherwise, just set to confirm mode
      return { ...prev, [userId]: true };
    });
  };
  
  const handleDelete = (userId) => {
    fetch(`http://localhost:3000/auth/users/${userId}`, {
      method: 'DELETE',
    })
    .then(() => {
      // Atualizar a lista de pessoas removendo a pessoa excluída
      setPeople(people.filter((person) => person.id !== userId));
    })
    .catch((error) => console.error('Error:', error));
  };

  const [isClearAllConfirmed, setIsClearAllConfirmed] = useState(false);
  const checkClearAll = () => {
    if (isClearAllConfirmed) {
      handleClearAll();
    } else {
      setIsClearAllConfirmed(true);
    }
  };

  const handleClearAll = () => {
    fetch('http://localhost:3000/auth/delete-all-users', { method: 'DELETE' })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setPeople([]); // Limpa os dados no estado
      })
      .catch(error => console.error('Error:', error));
      setIsClearAllConfirmed(false);
  };
  
  
  
  //Add user state
  const [addingUser, setAddingUser] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newWorkshop, setNewWorkshop] = useState('');
  const [newProfileUrl, setNewProfileUrl] = useState('');
  
  const handleAddUser = () => {
    const newUser = {
      // Assuming the backend will generate a permanent ID
      name: newName,
      email: newEmail,
      workshopChoice: newWorkshop,
      profileUrl: newProfileUrl,
    };
  
    fetch('http://localhost:3000/auth/add-user', { // Use the correct URL for your server
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Here you can use the response data, e.g., the created user with a permanent ID
      setPeople([...people, data]); // Add the new user to the list
      // Other actions after successful user creation
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });
  
    // Reset the form fields
    setNewName('');
    setNewEmail('');
    setNewWorkshop('');
    setNewProfileUrl('');
    setAddingUser(false);
  };
  

  return (
    <>
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Users</h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the participants at this event.
                </p>
              </div>
              {
              //Aqui ficavam os botoes antes
              }
            </div>
            
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

          </div>


            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Picture</th>
                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">Name</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Email</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Workshop</th>
                        <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {people.map(person => (
                        <tr key={person.id || person.email}>
                          <td className='py-4'>
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src={person.profileUrl}
                              alt={person.name}
                            />
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.email}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.workshopChoice}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <button
                            onClick={() => checkDelete(person.id)}
                            className={`${
                              confirmDelete[person.id] ? 'text-red-500' : 'text-indigo-400 hover:text-indigo-500'
                            }`}
                          >
                            {confirmDelete[person.id] ? 'Confirm' : 'Delete'}
                            <span className="sr-only">, {person.name}</span>
                          </button>
                          </td>
                        </tr>
                      ))}
                                            {addingUser && (  
                    <tr className=''>
                          <td>
                          <input
                              type="text"
                              placeholder="Image URL"
                              className="rounded text-sm py-2 block text-sm font-medium leading-6 text-gray-900 p-2"
                              onChange={e => setNewProfileUrl(e.target.value)}
                              value={newProfileUrl}
                            />
                          </td>
                          <td className="whitespace-nowrap pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="rounded text-sm p-2"
                                onChange={e => setNewName(e.target.value)}
                                value={newName}
                              />
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-900">
                          <input
                              type="email"
                              placeholder="Email"
                              className="flex-1 rounded text-sm p-2"
                              onChange={e => setNewEmail(e.target.value)}
                              value={newEmail}
                            />
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-900">
                          <input
                              type="workshop"
                              placeholder="Workshop"
                              className="flex-1 rounded text-sm p-2"
                              onChange={e => setNewWorkshop(e.target.value)}
                              value={newWorkshop}
                            />
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <button onClick={handleAddUser}
                              className="text-green-400 hover:text-green-500"
                            >
                              Save<span className="sr-only"></span>
                            </button>
                          </td>
                    </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


            <div className='sm:flex items-end justify-end w-full gap-x-2 py-2'>
            <button
              onClick={checkClearAll}
              type="button"
              className={`block rounded-md ${
                isClearAllConfirmed ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'
              } px-3 py-2 text-center text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
            >
              {isClearAllConfirmed ? 'Confirm Clear All' : 'Clear All'}
            </button>
                <button
                      onClick={() => setAddingUser(true)}
                      type="button"
                      className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Add user
                  </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Participants;


