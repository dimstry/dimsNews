import "../App.css";
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import Box from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

// Menerima data dari perent
function MainLeft(datas) {

    const load = ["item 1", "item 2"];

    const loading = () => {
        return(
            <SkeletonTheme baseColor="#c7c7c7" highlightColor="#d7d7d7" >
                {
                    load.map((data, i) => {
                        return(
                            <div className="h-80 w-80 text-left"  key={i}>
                                <div className="card w-80 bg-base-100 shadow-xl image-full cursor-pointer px-auto">
                                    <figure className="z-10 mx-auto">
                                        <Box style={{width: '100%', height: 'auto' }}>
                                            <Skeleton />
                                        </Box>
                                    </figure>
                                    <div className="card-body flex mt-auto">
                                        <Skeleton count={1} style={{width: '200px'}}/>
                                        <Skeleton count={1} style={{width: '100px'}}/>
                                    </div>
                                </div> 
                                <p className="text-zinc-800 mt-5"> <Skeleton count={4} style={{width: '200px'}}/></p>
                            </div>
                        )
                    })
                }
            </SkeletonTheme>
        )
    }

    return(
    <div className="grid grid-cols-2 gap-10">
        {
            datas.articles ? datas.articles.slice(7,9).map((data, i) => {
                return(
                    <div className="h-80 w-80 text-left"  key={i}>
                        <div className="card w-80 bg-base-100 shadow-xl image-full cursor-pointer px-auto">
                            <figure className="z-10 mx-auto">
                                <img src={data.urlToImage} alt="Shoes" className="w-auto"/>
                            </figure>
                            <div className="card-body flex mt-auto">
                                <p className="card-title">{data.title.slice(0,50)}</p>
                                <h6 className="card-title -mb-5 text-yellow-400 text-lg">{data.source.name}</h6>
                            </div>
                        </div> 
                        <p className="text-zinc-800 mt-5">{data.content.slice(0,160)}.... <a href={data.url} className="link-primary">Lihat selengkapnya</a></p>
                    </div>
                )
            }) :
                loading()
        }
    </div>
    )
}
export default MainLeft;