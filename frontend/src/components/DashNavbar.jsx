import { Dropdown, Navbar, Avatar, DarkThemeToggle } from 'flowbite-react';

export function DashNavbar() {
  return (
    <Navbar
      fluid
      rounded
      className=' dark:bg-gray-700 rounded-none'    
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Dashboard
        </span>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <DarkThemeToggle />
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}


