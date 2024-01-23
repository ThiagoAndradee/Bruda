export default function LogoCloud() {
    return (
      <div className="bg-gray-900 py-2 sm:py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-4 flex justify-center pb-16">
            <p className="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
              <a href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" /> We have been hosted at{' '}
              </a>
            </p>
          </div>
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center justify-center gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-y-14 lg:mx-0 lg:max-w-none">
              <img
                className="max-h-40 w-full object-contain"
                src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-0-2048x2048.png"
                alt="Google"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Netlight_Consulting_logo.svg/1600px-Netlight_Consulting_logo.svg.png?20210221062033"
                alt="Netlight"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain"
                src="https://www.alasco.de/wp-content/uploads/2022/09/Logotype_Alasco_RGB-e1664458359119.png"
                alt="Netlight"
                width={158}
                height={48}
              />
            </div>

        </div>
      </div>
    )
  }
  