import {
    Card,
} from "react-daisyui";
import "../App.css";
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import Box from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

// Menerima data dari perent
function MainRight(datas) {

    const load = ["item 1", "item 2", "item 3", "item 4", "item 5"];
    const loading = () => {
        return(
            <SkeletonTheme baseColor="#c7c7c7" highlightColor="#d7d7d7" >
                {
                    load.map((i) => {
                        return(
                            <a href="" className="cursor-pointer sm:w-96" key={i}>
                            <Card side="sm" className="mb-5 sm:flex">
                                <div className="card">
                                    <Box style={{width: '140px', height: '100px' }}>
                                        <Skeleton />
                                    </Box>
                                </div>
                                <Card.Body className="card_body gap-0">
                                    <Card.Title tag="p" className="mt-1">
                                        <Skeleton count={5} style={{width: '200px'}}/>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                        )
                    })
                }
            </SkeletonTheme>
        )
    }


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
                }) : 
                loading()
            }

        </div>
    )
}
export default MainRight;