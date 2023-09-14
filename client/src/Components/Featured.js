import { Link } from "react-router-dom";
import "./featured.css";

const Featured = () => {
  return (
    <>
    <div className="main-Container">
        <div className="contanier">
        <Link to={"/Hollywood"} >  
            <div className="title">
            <h3>Title of Vertical Gallery</h3>
            <p>trvel/August 21 2017</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_1280.jpg" alt="not Found" height={"515px"} width={"100%"}/>
        </Link>
        </div>
        
        <div className="contanier-right">

            <div className="item">
                <Link to={"/Technology"}>
                <div className="title-2">
                    <h3>Title of Vertical Gallery</h3>
                    <p>trvel/August 21 2017</p>
                </div>
                    <img src="https://cdn.pixabay.com/photo/2015/03/26/18/36/spacex-693229_1280.jpg" alt="not found" height={"250px"} width={"100%"}/>
                </Link>
            </div>

            <div className="item">
                <Link to={"/Food"}>
                <div className="title-2">
                    <h3>Title of Vertical Gallery</h3>
                    <p>trvel/August 21 2017</p>
                </div>
                    <img src="https://cdn.pixabay.com/photo/2016/07/07/13/54/burger-1502450_1280.jpg" alt="not found" height={"250px"} width={"100%"}/>
                </Link>
            </div>

        </div>

    </div>
    </>
  )
}

export default Featured

