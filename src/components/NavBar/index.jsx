'use client'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BsWhatsapp, BsInstagram, BsFacebook, BsChevronDown } from 'react-icons/bs';
import { HiViewList as Bars3Icon, HiOutlineX as XMarkIcon } from 'react-icons/hi'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Horarios', href: 'horarios', current: false },
  { name: 'Valores', href: 'valores', current: false },
]

const navigationDropdown = [
    { name: 'Kung fu 武术蔡李佛', href: 'kungfu', current: false },
    { name: 'SANDA 散打', href: 'sanda', current: false },
    { name: 'DANZA DE LEÓN CHINO 舞狮', href: 'leon', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {/* Dropdown */}
                    <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex gap-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            <span className="">Nuestras Clases</span>
                            <BsChevronDown className="block h-5 w-5" aria-hidden="true"/>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            { navigationDropdown.map((item) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                <Link
                                    href={item.href}
                                    className={classNames(active ? 'bg-gray-400' : '', 'block px-4 py-2 text-sm text-white')}
                                >
                                    {item.name}
                                </Link>
                                )}
                            </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex gap-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="https://wa.me/56951787063" target="_blank" rel="noreferrer">
                    <BsWhatsapp className='text-lg lg:text-4xl' />
                </a>
                <a href="https://www.instagram.com/kungfuguangong/" target="_blank" rel="noreferrer">
                    <BsInstagram className='text-lg lg:text-4xl'/>
                </a>
                <a href="https://www.facebook.com/kungfulaflorida/" target="_blank" rel="noreferrer">
                    <BsFacebook className='text-lg lg:text-4xl'/>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {navigationDropdown.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



///////////////////////////

               /*  <li>
                    <Link href="kungfu" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Kung fu 武术蔡李佛</Link>
                </li>
                <li>
                    <Link href="sanda" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">SANDA 散打</Link>
                </li>
                <li>
                    <Link href="leon" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">DANZA DE LEÓN CHINO 舞狮</Link> 
                </li>
                            

                <div className='justify-end flex items-center gap-4 mr-2'>
                    <a href="https://wa.me/56951787063" target="_blank" rel="noreferrer">
                        <BsWhatsapp className='text-lg lg:text-4xl' />
                    </a>
                    <a href="https://www.instagram.com/kungfuguangong/" target="_blank" rel="noreferrer">
                        <BsInstagram className='text-lg lg:text-4xl'/>
                    </a>
                    <a href="https://www.facebook.com/kungfulaflorida/" target="_blank" rel="noreferrer">
                        <BsFacebook className='text-lg lg:text-4xl'/>
                    </a>
                </div> */
