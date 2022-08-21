import {
    Card,
    Carousel
} from "react-daisyui";
import "../App.css";
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import Box from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

// Menerima data dari perent
function ContentHead(datas) {

    const load = ["item 1", "item 2", "item 3", "item 4", "item 5"];

    const loading = () => {
        return(
            <SkeletonTheme baseColor="#c7c7c7" highlightColor="#d7d7d7" >
                {
                    load.map((data, i) => {
                        return(
                            <div className="md:flex-1 mb-4" key={i}>
                                <a href="">
                                    <Card style={{ width: '100%', cursor: 'pointer'}} >
                                        <div className="card">
                                        <Box style={{width: '200px', height: '100px' }}>
                                            <Skeleton />
                                        </Box>   
                                        </div>
                                        <Card.Body className="card_body mt-1 gap-0">
                                            <Skeleton count={1} style={{width: '200px'}}/>
                                            <Skeleton count={1} style={{width: '200px'}}/>
                                            <Skeleton count={1} style={{width: '200px'}}/>
                                            <Skeleton count={1} style={{width: '200px'}}/>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </div>
                        )
                    })
                }
            </SkeletonTheme>
        )
    }

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
            }): 
                loading()
            }
        </div>
        
    )
}
export default ContentHead;