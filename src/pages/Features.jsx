import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import event from '../assets/event.jpg'


const features = [
  {
    name: 'Enjoy and Share.',
    description:
      'Interactive networking while learning: this is what Product Brew is all about, take part in monthly events of the community and improve your skills.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Our own Platforms.',
    description: 'Get access to our own platforms that makes your research and design life easier.',
    icon: LockClosedIcon,
  },
  {
    name: 'Contributtion and Feedback.',
    description: 'Get access to our contributtion platform where you can create surveys, schedule user tests and get feedback from the UX community all around the world.',
    icon: ServerIcon,
  },
]

export default function Features() {

    return (
        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-400">Become a member</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A new way to interact with the UX community</p>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                  Being a member of the Product Brew you can participate in our in person and online workshops every time.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
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
              <img
                src={event}
                alt="Product Brew"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      )
}
