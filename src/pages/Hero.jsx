const handleLoginBackup = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/pre-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workshopChoice: selectedWorkshop.name,
        }),
      });
  
      if (response.ok) {
        // Redirecionar para o login do LinkedIn se a pré-autenticação for bem-sucedida
        window.location.href = 'https://productbrew-backend.vercel.app/auth/linkedin';
      } else {
        console.error('Failed to initiate login process');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };  

import logo from '../assets/logo_pb.png'; // Ajuste o caminho conforme necessário
import cover from '../assets/CoverImage.png'; // Ajuste o caminho conforme necessário
import { Combobox } from '@headlessui/react';
import { useState } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

const workshops = [
  { id: 1, name: 'Workshop 1: Juliane Zirke' },
  { id: 2, name: 'Workshop 2: Brew with the Crew' },
];




export default function Hero() {
    const [selectedWorkshop, setSelectedWorkshop] = useState(workshops[0]);

    const handleWorkshopChange = (workshop) => {
        setSelectedWorkshop(workshop);
      };
      const handleLogin = async () => {
        try {
          console.log('Attempting to send pre-login with workshop choice:', selectedWorkshop.name);

          const prelogin_url = import.meta.env.VITE_PRELOGIN_URL;

          console.log('prelogin', prelogin_url)
          console.log('all the vars', import.meta.env)
      
          const response = await fetch(prelogin_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              workshopChoice: selectedWorkshop.name,
            }),
          });
      
          console.log('Response status:', response.status);
      
          if (response.ok) {
            const data = await response.json();
            const state = data.state; // Extract state from response
      
            console.log('Pre-login successful, redirecting to LinkedIn login...');
            // Append the state parameter to the LinkedIn auth URL
            window.location.href = `https://productbrew-backend.vercel.app/auth/linkedin?state=${state}`;
          } else {
            const text = await response.text();
            console.error('Failed to initiate login process:', text);
          }
        } catch (error) {
          console.error('Error during login process:', error);
        }
      };
      
      
        
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 text-center">
          <img
            className="h-60 mx-auto"
            src={logo}
            alt="The Product Brew"
          />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Brew + Draw = Bruda!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join now for your chance to experience our workshops today!
          </p>
          <Combobox as="div" value={selectedWorkshop} onChange={handleWorkshopChange}>
            <Combobox.Label className="block text-sm font-medium leading-6 text-gray-200">Choose your workshop</Combobox.Label>
            <div className="relative mt-2">
                <Combobox.Input
                className="w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm leading-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                displayValue={(workshop) => workshop.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                     <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {workshops.map((workshop) => (
                    <Combobox.Option
                    key={workshop.id}
                    value={workshop}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`
                    }
                    >
                    {({ selected }) => (
                        <>
                        <span className={`block truncate ${selected && 'font-semibold'}`}>{workshop.name}</span>
                        </>
                    )}
                    </Combobox.Option>
                ))}
                </Combobox.Options>
            </div>
            </Combobox>
          <div className="mt-10 flex justify-center">
            <a onClick={handleLogin}
              href="#"
              className="block w-full text-center rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Login with LinkedIn
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src={cover}
              alt="App screenshot"
              className="w-[76rem] object-contain"
            />
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
