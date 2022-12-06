const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

export default function Matrix({ heading, data, c1, c2, c3, c4 }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{heading}</h1>
          <p className="mt-2 text-sm text-gray-700">
            Portfolios marked by red are already alloted. Make sure to check
            this matrix once before submitting your choices in google form.
          </p>

          {
            heading == "Lok Sabha Matrix" && 
            <p><a href="/lok-sabha.pdf">Background Guide</a></p>
          }
          {heading == 'AIPPM Matrix' && (
            <p>
              <a href="/aippm.pdf">Background Guide</a>
            </p>
          )}
          {heading == 'UNGA Matrix' && (
            <p>
              <a href="/unga.pdf">Background Guide</a>
            </p>
          )}
        </div>
      </div>
      <div className="-mx-4 mt-8 overflow-auto shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {c1 && (
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {c1}
                </th>
              )}
              {c2 && (
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-8"
                >
                  {c2}
                </th>
              )}
              {c3 && (
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {c3}
                </th>
              )}
              {c4 && (
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {c4}
                </th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((i) => (
              <tr
                className={i.alloted ? `bg-red-200` : `bg-white`}
                key={i.serial}
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-6 text-sm font-medium text-gray-900 sm:pl-6">
                  {i.serial}
                </td>
                <td className="text-md whitespace-nowrap px-8 py-4 text-gray-500">
                  {i.members ? i.members : i.name}
                </td>
                <td className="text-md whitespace-nowrap px-3 py-4 text-gray-500">
                  {i.party_name}
                </td>
                {c4 && (
                  <td className="text-md whitespace-nowrap px-3 py-4 text-gray-500">
                    {i.Cabinet}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
