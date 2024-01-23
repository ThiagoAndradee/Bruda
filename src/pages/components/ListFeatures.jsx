import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Networking',
      description: 'Meet like-minded professionals and expand your network at our events. Our events provide the perfect opportunity to connect with other digital product enthusiasts, share ideas, and build relationships that will last a lifetime. Who knows, your next big project or career opportunity could be just a conversation away..',
      icon: ArrowPathIcon,
    },
    {
      name: 'New People',
      description: 'Meet new people and make new friends at our events. We attract a diverse group of professionals from different industries and backgrounds, so you are guaranteed to meet someone new and interesting. Whether you are a seasoned pro or a newbie, you will feel right at home in our friendly and welcoming community.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Have a Cold Drink',
      description: "At The Product Brew, we believe that learning and socializing go hand in hand. That's why we encourage you to have a cold drink (or two) at our events. It's the perfect way to unwind, relax, and connect with other attendees. So, sit back, sip on your favorite beverage, and enjoy the company of fellow digital product enthusiasts.",
      icon: Cog6ToothIcon,
    },
  ]
  
  export default function ListFeatures() {
    return (
      <div className="bg-gray-900 py-4 sm:py-32">
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  