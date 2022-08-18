// import { useEffect, useState } from "react";
import {
    Navbar,
    Dropdown,
    Button,
    Form,
    Input,
    Menu,
    Swap
} from "react-daisyui"

function NavBar () {

    // const [darkToggle, setDarkToggle] = useState(false)

    // useEffect(() => {
    //     const cek = document.querySelector("#cek");
    //     cek.addEventListener()
    // })

    return(
        <div className="flex w-full component-preview items-center justify-center gap-2 font-sans px-5 lg:px-40 sticky top-0 z-50">
            <Navbar className="bg-white text-blue-500">
                <div className="flex-1">
                <label className="swap swap-flip text-4xl">
                    <input type="checkbox" id="cek"/>
                    <div className="swap-on">😈</div>
                    <div className="swap-off">😇</div>
                </label>
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