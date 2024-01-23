import React, { useState, useEffect } from 'react';

export default function Team() {

    const [currentRole, setCurrentRole] = useState('IPA');
    const roles = ['IPA', 'Helles', 'Pilsner', 'Weissbier', 'Dunkel', 'Kölsch', 'Alt', 'Rauchbier', 'Bock'];

    const [currentPic, setCurrentPic] = useState('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const pics = ['https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg?w=1380&t=st=1706039484~exp=1706040084~hmac=074902ff8c0cd549d0021db93be2c21cb9248aba52b3118a4145945d815b7a47', 'https://img.freepik.com/free-photo/pretty-girl-with-nice-smile_23-2147611501.jpg?w=900&t=st=1706039890~exp=1706040490~hmac=14c79c2b4a352bb554f9715cfaf4451a5b2f7ea148d74c9dfb1108382af22572', 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=1380&t=st=1706039511~exp=1706040111~hmac=5011d6179a65736477d22ee972040166d182e6388bbf5717bdc6cf9c5b6b466d', 'https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-133.jpg?w=1380&t=st=1706039736~exp=1706040336~hmac=2dbddf5aefe5e71212fd93c6421775ecd32e8f4840c6b002e5f41ff36232673exw'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole(prevRole => {
                const currentIndex = roles.indexOf(prevRole);
                const nextIndex = (currentIndex + 1) % roles.length;
                return roles[nextIndex];
            });
        }, 2000); // Muda o role a cada 2 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPic(prevPic => {
                const currentIndex = pics.indexOf(prevPic);
                const nextIndex = (currentIndex + 1) % pics.length;
                return pics[nextIndex];
            });
        }, 2000); // Muda o role a cada 2 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

     // Atualize a lista de people para refletir o role dinâmico
     const people = [
        {
            name: 'Thiago Andrade',
            role: 'UX Designer',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHBnV6VrYFSxg/profile-displayphoto-shrink_800_800/0/1701895240200?e=1711584000&v=beta&t=NfhS3QxiFsjJ7RU7Ab3hwbGCpIm0i9aYO7IG55Vpb98',
            xUrl: 'https://twitter.com/thi_ux',
            linkedinUrl: 'https://www.linkedin.com/in/thiux/',
        },
        {
            name: 'Andre Sekula',
            role: 'Product Owner',
            imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHv-ahhGjRTbg/profile-displayphoto-shrink_800_800/0/1659296136213?e=1711584000&v=beta&t=_zFFhsJ2nwikpIeUWe0M-piV_mBonQjbz2iDUNsRAwM',
            linkedinUrl: 'https://www.linkedin.com/in/andr%C3%A9-sekulla-2181718a/',
        },
        {
            name: 'Denise Sekulova',
            role: 'UX Designer',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQF3Lks5KdZ7yw/profile-displayphoto-shrink_800_800/0/1666047097016?e=1711584000&v=beta&t=qqOdsSmX5cD2REDF3zvgCKDt_snlLf_t56n-sOl-OjA',
            linkedinUrl: 'https://www.linkedin.com/in/denise-sulekova/',
        },
        {
            name: 'You',
            role: currentRole,
            imageUrl: currentPic,
        },
    ];

    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              We’re a dynamic group of individuals who are passionate about what we do.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 object-fill" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">X</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  