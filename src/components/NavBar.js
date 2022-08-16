import {
    Navbar,
    Dropdown,
    Button,
    Form,
    Input,
    Menu
} from "react-daisyui"

function NavBar () {

    return(
        <div className="flex w-full component-preview items-center justify-center gap-2 font-sans">
            <Navbar className="bg-neutral text-neutral-content">
                <div className="flex-1">
                <Button className="text-xl normal-case" color="ghost">
                    DimsNews
                </Button>
                </div>
                <Navbar.Center className="hidden lg:flex mr-96">
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                            <a>Item 1</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a>Item 2</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a>Item 3</a>
                        </Menu.Item>
                    </Menu>
                    </Navbar.Center>
                <div className="flex-none gap-2">
                <Form>
                    <Input bordered type="text" placeholder="Search News" />
                </Form>
                <Dropdown vertical="end">
                    <Button color="ghost" className="avatar" shape="circle">
                    <div className="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                    </Button>
                </Dropdown>
                </div>
            </Navbar>
        </div>
    )

}
export default NavBar;