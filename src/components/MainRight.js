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
                        <a href="#" className="cursor-pointer" key={i}>
                        <Card side="md" className="mb-5">
                            <div className="card">
                                <Card.Image
                                src={data.urlToImage}
                                alt={data.source.name}
                                className="w-72 card_image poos"
                                />
                            </div>
                            <Card.Body className="card_body gap-0">
                                <Card.Title tag="p">{data.title.slice(0,60)}</Card.Title>
                                <Card.Title tag="i" className="pt-0">{ new Date(data.publishedAt).toLocaleDateString("id")}</Card.Title>
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