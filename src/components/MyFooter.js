import {Footer} from "react-daisyui";
import myImg from "../img/dimas.jpg"

function MyFooter() {
    return(
        <Footer className="p-10 bg-neutral text-neutral-content md:gap-40 md:flex md:justify-center">
            <div className="mx-auto md:mx-0">
                <img 
                src={myImg}
                className="w-32 rounded-full mx-auto"
                >
                </img>
                <p>
                &copy; Copyright { new Date().getFullYear() } - All rights reserved.
                <br />
                @dimstr__
                </p>
            </div>

            <div className="mt-6 md:mt-9">
                <Footer.Title>Contacts</Footer.Title>
                <a className="link link-hover" href="https://github.com/dimstry" target={"_blank"}>Github</a>
                <a className="link link-hover" href="https://www.facebook.com/profile.php?id=100032103882689" target={"_blank"}>Instagram</a>
                <a className="link link-hover" href="https://instagram.com/@dimstr__" target={"_blank"}>Facebook</a>
            </div>
        </Footer>
    )
}
export default MyFooter;