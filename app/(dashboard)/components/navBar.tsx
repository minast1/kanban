/* eslint-disable @next/next/no-img-element */
import React from "react"

const NavBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-blue-50 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="mr-2 cursor-pointer rounded-lg p-2 text-black hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <a
            href="https://flowbite.com"
            className="mr-4 flex items-center justify-between"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
          </a>
          <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative md:w-96">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle search</span>
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </button>

          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>

            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
          </button>

          <button
            type="button"
            data-dropdown-toggle="apps-dropdown"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:mr-0 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt="user photo"
            />
          </button>
          <div
            className="z-50 my-4 hidden w-56 list-none divide-y divide-gray-100  rounded-xl bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
            id="dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                Neil Sims
              </span>
              <span className="block truncate text-sm text-gray-900 dark:text-white">
                name@flowbite.com
              </span>
            </div>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            ></ul>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            ></ul>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
