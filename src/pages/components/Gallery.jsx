/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
    {
      source:
        'https://lh3.googleusercontent.com/fife/AGXqzDltRNkF9UTv8xB7XbjTt-hEh-HTs5hv6fK9RL9Ck8l6qMfqOyPIbdnfDDOOdN4jrZZ0RdUL3d4dQt2DccCk9OC2lnZVcuDvhmMtkQjC6IuN3gXQbGFkULPaL71giAsqY9-oS8Cwu3CshTsShTcjf1ebUMX4QeyiyR7IIIfKTgepC42IuROZDYe7iST6tqAbaeg5vyPJsrtzgLxo-EDffG5VJocZCevvRX5lsmEmZqgPireh10BRUGCtNMNzHGYj8pHytYsHUNI_eCumB3taxtkSNtP92BHUwtgsqmHNDNWqjg1J5yX0B5wUvLr6Zua0NFXxWj415pQqWzBFWClQmOQXd168kNZYtb4QZYNM3u3Ty_f7hRxrn218SEwaUHoZOJ5gAd-fsTkke5-9DJZTfVjOEe7dHqbpxgUtyCGykEsSidGZEUV5Zl3rrzxyZuSg_03jq4aTk_gPf2_kkVfH_31B56DtUISLixjR7rpqBTWsIUV31R99_jZCJlnVUuwsfhhZbSvtezXK0PvcJOvIVxgZ6zP7B82It1skdbvOE41jjqRRSRNoyJ2SkamBE1cg3jaKk3Q3Heyh3TbA1n-e_IgeLrD1iU_mugcqFs53unnLCNbxOseRGEHygm_PP0AyzGsf7eQ4ZS1Ubqq12LGU_C7dMLkyLIq6dSfpgiX7LBe08CpCjkDlsJZ5CguS9frCOxd6lwPDOYpLvBhseCZ97mvkQNQo0JU6JeGBXhJQOhHrziu5tH1K-LmpY240QEoX0Q77iNt7o2FQ7sAcl4qmjgDMgcenDcHfBrid4KPnt3l89TALmdJOmXVhGunwjMz1TTjTic_7waveD7VeQ6NgjO2rNglOohPYoPqHrERxkGsEe1JKg1NFqodNkXFgjgTHgf_Zz26MwBTLTUja2ax5QO5QJbrAXwM_bPx9ddixbYAGKuXOHH1XxuDqZBu8w66ODndzeVM7d2Cdxcr9TIQ68BkaabOZJl4JbgvYLf34ZusOEi6TJVG0jXGaKKPgYSn8JL8liYU63t4XCAWvRpWFCyF3y0TIRnNvG5P7hPysD0181M6_5HFA9bHnlVDhow4rF6i6JdMHD0qTOGHmwhuN-v7d7XY6RtE0tpr9btx60Ub23ZyZbBt4Hu0ee20xRSjtRmdPsBYCsSt7Z1_e98RwwRykoAcLRlyUM8q_0QmT9bYbZCwrWJRGVl58O7N_WvyKjGlYQozUHTCJYmqBtQMiUiLNyhyEhRRN0oVo9OYQs_c0Y5Ky3q3leSb8KvCnYEpIoc6dfTEuoghl1noOsI9MRwg9pQrNKqFk9DNhcsZsLYlGi7c1B--c15lSQN0iYtpexQt74z2MjugdyeMtonFcA0zXvXT7jkVQOmay9rDbSd2kawZ-6TrFQDGWlF_7nrwjwjwUcJIBgEK1N0ty2ZxxGCiTDjV19deTysGMc_CGvWz6GJPqoWtPrDa0qx3785J-fV1mmBaX_DLCldoRRBukA-ui98KHlXV9svPSXXUSTjfuQho9Nn0xB7IrHL3K9nC71LBzNaPXGBG4ekW93ANOL8h77SCft-UFwBdfdH-p6Pe_9wuN8wffo9z5QNKmtG-3XJ9AqFjVy7aeq6bh4vyyR08l9J8E_zHkm-rnbSqg5rME5baIfP0qYT31nlOR7IlbdGESaK9o=w2656-h1720',
    },
    {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
    // More files...
  ]
  
  export default function Gallery() {
    return (
    <div className="m-auto mx-4 my-4 mb-16 bg-gray-900"> {/* Margem aumentada para m-56 */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-4 flex justify-center pb-16">
            <p className="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
              <a href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" /> Sneak and peek from our events{' '}
              </a>
            </p>
          </div>
    </div>
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
        <li key={file.source} className="relative">
            <div className="group aspect-h-1 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900">
            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
            </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
        </li>
        ))}
    </ul>
    </div>
    )
  }
  