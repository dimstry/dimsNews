import "../App.css";


function MainLeft(datas) {
    return(
    <div className="md:flex justify-center gap-6">      
        {
            datas.articles ? datas.articles.slice(7,9).map((data, i) => {
                return(
                    <div className="card w-80 bg-base-100 shadow-xl image-full cursor-pointer px-auto" key={i}>
                        <figure className="z-10 mx-auto">
                            <img src={data.urlToImage} alt="Shoes" className="w-auto"/>
                        </figure>
                        <div className="card-body flex mt-auto">
                            <p className="card-title">{data.title.slice(0,50)}</p>
                            <h6 className="card-title -mb-5 text-yellow-400 text-lg">{data.source.name}</h6>
                        </div>
                    </div> 
                )
            }) : ""
        }
    </div>
    )
}
export default MainLeft;