import {
    Card,
    Carousel
} from "react-daisyui";
import "../App.css";

// Menerima data dari perent
function ContentHead(datas) {

    return(
        <div className="gap-3 md:flex">
            {datas.articles ? datas.articles.slice(0,5).map((data, i) => {
                return(
                    <div className="md:flex-1 mb-4" key={i}>
                        <a href={data.url}>
                            <Card style={{ width: '100%', cursor: 'pointer'}} >
                                <div className="card">
                                    <Card.Image
                                        src={data.urlToImage}
                                        alt={data.source.name}
                                        className="card_image"
                                    />
                                </div>
                                <Card.Body className="card_body m-1">
                                    <Card.Title tag="p">{data.title.slice(0,120)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                )
            }): ""
            }
        </div>
        
    )
}
export default ContentHead;