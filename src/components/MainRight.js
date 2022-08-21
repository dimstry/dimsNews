import {
    Card,
} from "react-daisyui";
import "../App.css";

// Menerima data dari perent
function MainRight(datas) {
    return(
        <div className="gap-2">
            {
                datas.articles ? datas.articles.slice(9).map((data, i) => {
                    return(
                        <a href={data.url} className="cursor-pointer sm:w-96" key={i}>
                            <Card side="sm" className="mb-5 sm:flex">
                                <div className="card">
                                    <Card.Image
                                    src={data.urlToImage}
                                    alt={data.source.name}
                                    className="card_image w-96 md:w-72"
                                    />
                                </div>
                                <Card.Body className="card_body gap-0">
                                    <Card.Title tag="p">{data.title.slice(0,65)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    )
                }) : ""
            }

        </div>
    )
}
export default MainRight;