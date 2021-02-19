import React, {useEffect,useState,Component} from 'react'
import './css/Soaring.css'
import M from 'materialize-css'
// import 'materialize-css/dist/css/materialize.min.css'
import photo from '../images/1.jpg'



const Soaring=()=>{

        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {numVisible:'4'});
            
    })

    return (
        <React.Fragment>
                <div id="soaring-body">
                           <h1 style={{color:'black'}}>reload for the carousel</h1>
                    <div className="row">
                        <div className="col s12 m6 l6">
                            <div className="carousel">
                            <a className="carousel-item" href="#one!"><img src={photo} /></a>
                            <a className="carousel-item" href="#two!"><img src={photo} /></a>
                            <a className="carousel-item" href="#three!"><img src={photo} /></a>
                            <a className="carousel-item" href="#four!"><img src={photo} /></a>
                            <a className="carousel-item" href="#five!"><img src={photo} /></a>
                            </div>
                        </div>
                        <div className="col s12 m6 l6 center text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis voluptate obcaecati veniam quam aliquid ipsam ab earum ullam doloremque sed ratione totam molestias esse, ipsa, accusantium provident pariatur consequatur eaque, corporis eligendi at soluta molestiae exercitationem. Adipisci odit expedita quam, ab totam doloremque. Illum vel fugit porro. Ipsa numquam nesciunt dolores cupiditate nemo iusto consectetur optio? Tenetur aliquid laudantium corrupti neque! Deleniti, qui ullam! Voluptatem reiciendis eligendi a minima hic, exercitationem tempore ad nobis, iusto aliquam delectus ut quod iste consequatur repellendus porro. Eos harum ducimus quidem ipsa nulla aut, repellendus sequi perferendis minima maxime placeat sint vel nobis.</div>
                    </div>
                    


                    <div className="row">
                        <div className="col s12 m6 l6 center text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis voluptate obcaecati veniam quam aliquid ipsam ab earum ullam doloremque sed ratione totam molestias esse, ipsa, accusantium provident pariatur consequatur eaque, corporis eligendi at soluta molestiae exercitationem. Adipisci odit expedita quam, ab totam doloremque. Illum vel fugit porro. Ipsa numquam nesciunt dolores cupiditate nemo iusto consectetur optio? Tenetur aliquid laudantium corrupti neque! Deleniti, qui ullam! Voluptatem reiciendis eligendi a minima hic, exercitationem tempore ad nobis, iusto aliquam delectus ut quod iste consequatur repellendus porro. Eos harum ducimus quidem ipsa nulla aut, repellendus sequi perferendis minima maxime placeat sint vel nobis.</div>
                        <div className="col s12 m6 l6">
                            <div className="carousel">
                            <a className="carousel-item" href="#one!"><img src={photo} /></a>
                            <a className="carousel-item" href="#two!"><img src={photo} /></a>
                            <a className="carousel-item" href="#three!"><img src={photo} /></a>
                            <a className="carousel-item" href="#four!"><img src={photo} /></a>
                            <a className="carousel-item" href="#five!"><img src={photo} /></a>
                            </div>
                        </div>
                        
                    </div>



                    <div>
                        <h5 className="left-align">This should be left aligned</h5>
                    </div>
                    <div>
                        <h5 className="right-align">This should be right aligned</h5>
                    </div>
                    <div>
                        <h5 className="center-align">This should be center aligned</h5>
                    </div>

                    <div className='image1'><img src="https://images.pexels.com/photos/56865/adler-bird-bird-of-prey-raptor-56865.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /></div>

                    </div>
   
        </React.Fragment>
    )
}

    
export default Soaring
