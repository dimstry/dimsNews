import "../App.css";


function MainLeft(datas) {
    return(
    <div className="grid grid-cols-2 gap-4">
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
                        <p className="text-zinc-800">{data.content.slice(0,160)}... <a href={data.url} className="link-primary">Lihat selengkapnya</a></p>
                    </div>
                )
            }) : ""
        }
    </div>
    )
}
export default MainLeft;