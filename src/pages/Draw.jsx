import React from 'react';



const Draw = ({ sortedUsers, people, handleDrawUsers, workshops }) => {


  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Draw Results</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Here are the results of the draw.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-x-2">
                <button
                  onClick={handleDrawUsers}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Draw
                </button>
              </div>
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
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {sortedUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="py-">
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src={user.profileUrl}
                              alt={user.name}
                            />
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {user.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {user.workshopChoice}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draw;
