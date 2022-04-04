import React from 'react';
import './family.css';
import {HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import {   AiFillGoogleCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsDribbble } from "react-icons/bs";
import money from './familyimage/money.png';
import liquid from './familyimage/liquid.png';
import synartec from './familyimage/synartec.png';
import dropawf from './familyimage/dropawf.jpg';
import  foot from './familyimage/foot.png';
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import {AiOutlineColumnWidth } from "react-icons/ai";
import {  FiRepeat} from "react-icons/fi";
import { BsFillHeartFill} from "react-icons/bs";
import  constr1 from './familyimage/constr1.jpg';
import  constr2 from './familyimage/constr2.jpg';
import  constr3 from './familyimage/constr3.jpg';
import  smile4 from './familyimage/smile4.jpg';
import  smile5 from './familyimage/smile5.jpg';
import  house1 from './familyimage/house1.jpg';
import  estate from './familyimage/estate.jpg';
import  house4 from './familyimage/house4.jpg';
import { BsBookmarkPlusFill} from "react-icons/bs";
import sign from './familyimage/sign.svg';


function Familypage(){
    return(
      <body>
        <div>
          <div className='navi' >
          <nav>
            <div className='mailidandphone'>
                  <div className='mailid' >
                  <HiOutlineMailOpen size={'25'} />  sample@sample.com
                  </div >
                  <div className='phone'>
                  <FiPhoneCall size={'20'}/>  00 1234 5678
                 </div>
                 </div>
                      <div className='socialmedia' >
                      <ul class="nav justify-content-end">
                          <li class="nav-item"  >
                               <a class="navbar-text"  rel="noreferrer"target={'_blank'} href="https://search.visymo.com/ws?q=sell%20my%20house%20fast%20florida&asid=vis_in_05&mt=b&nw=g&de=c&ap=&ac=15200&cid=14999758930&aid=125496805621&locale=en_IN&ch=2394&gclid=CjwKCAjwrqqSBhBbEiwAlQeqGmUtlI8__n22X2QKoQ2eb7jQkARylkcZhGx4vurm509e87-gPSxnQBoCUQIQAvD_BwE"><  AiFillGoogleCircle className='google'  size={'25'}/></a>
                            </li>
                               <li class="nav-item" >
                                    <a class="nav-text" color='white' rel="noreferrer" target={'_blank'} href="https://in.pinterest.com/pin/806988826955184764/"><GrPinterest size={'25'} className='printrest'/></a>
                                </li>
                                  <li class="nav-item" >
                                        <a class="nav-text" rel="noreferrer" href="https://twitter.com/rewinterpark" target={'_blank'}><AiOutlineTwitter size={'25'}  className='twitter'/></a>
                                    </li>
                                      <li class="nav-item" >
                                         <a class="nav-text" target={'_blank'} rel="noreferrer" href="https://www.facebook.com/wprealestatepro/"><RiFacebookCircleLine size={'25'} className='facebook'/></a>
                                           </li>
                                           <li class="nav-item" >
                                         <a class="nav-text" target={'_blank'} rel="noreferrer" href="https://dribbble.com/tags/wp_theme_real_estate"><BsDribbble size={'25'} className='globe'/></a>
                                           </li>
                       </ul>
                      </div>
          </nav>
          </div>
                 <nav>
                 <div>
                   <div className='logo1'>
                 <span class="navbar-text" className='logo'>WP</span>
                 <span class="navbar-text" className='logo2'>/REAL ESTATE</span></div>
                   <ul class="nav justify-content-end">
                         <li class="nav-item">
                           <a class="nav-link active" href="home">HOME</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link active" href="about">ABOUT</a>
                            </li>
                         <li class="nav-item">
                            <a class="nav-link active" href="agent">AGENT</a>
                           </li>
                          <li class="nav-item">
                          <a class="nav-link active" href="properties">PROPERTIES</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link active" href="blog">BLOG</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link active" href="contact">CONTACT</a>
                          </li>
                          </ul>
                          </div>

                 </nav>
                 
                 
                  <div className='photo'>
                  <img src="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H.webp" alt='family' className='image'/>
                  <div className='center'><span className='text1' >if you can dream we can create it</span><br/>
                    <span className='text2'>Find Your House Without any difficulties</span><br/><br/>
                    <span className='kn'> Know More</span>
                   </div>
                    </div>
                    <span className='image1'>
                      <img src={money} alt='money'/>
                      <img src={liquid} alt='liquid' />
                      <img src={synartec} alt='synartec'/>
                      <img src={dropawf} alt='dropawf'/>
                      <img src={foot} alt='foot'/>
                      </span>
                      <br/>
                      <br/>
                      <br>
                      </br>
                      <div className='heading'>
                        <span className='title'>wp</span><span className='title1'>/Real Estate</span><br/>
                        <span className='title2'>Properties</span>
                        <br/>
                        <p className='title3'>HOME FOR SALE </p>
                      </div>
                        <div className='textpart'>
                          <img  src='https://media.istockphoto.com/photos/hong-kong-central-district-skyscrapers-picture-id1295808919?b=1&k=20&m=1295808919&s=170667a&w=0&h=fg8T-IS5ilzmoYwN0hILB2IdGbH2zQFosHyAoeXD9Ag=' alt='construction' className='building'/><br/><br/>
                          <div className='address' ><p className='text3'>Scandinavian Style Apartment</p>
                          <p className='text4'> 94-98 Ingraham St,Brooklyn,NY 11237, USA</p><br/>
                          <br/>
                          <div className='flex1'>
                          <span className='beds'> < BiBed size={'30'}/> Beds:3<FaBath size={'30'}/>Baths:2<AiOutlineColumnWidth size={'30'}/>Sq ft:900</span><br/><br/><br/></div>
                          <span className='rent'>For Rent</span><br/>
                          <span className='price'> $54.000</span><span className='repeat'><  FiRepeat size={'25'}/></span><span className='like'><BsFillHeartFill size={'25'}/></span>
                          </div>
                        </div>
                        <div className='buliding1'>
                          <span><img src={constr1} className='constr1' alt='bulding'/><p className='words' >Scandinavian Style Apartment </p>
                          <p className='words'>94-98 Ingraham St,Brooklyn,NY 11237, USA</p></span>
                          <span><img src={constr2}className='constr2' alt='bulding'/><p className='words1'><p>Lovelace Road Greenfield</p>
                          <p className='words1'>120 St Sw Thomaston, Georgia(GA),30286</p></p></span>
                         <span><img src={constr3} className='constr3'alt='bulding'/><br/><p className='words2'>Building Complax </p>
                          <p className='words2'>319 BookMead Way Lawarance ,Georgia(GA),30043</p></span>
                         </div><br/><br/><hr></hr>
                         <br/>
                         <span className='plusbtn'><BsBookmarkPlusFill size={'25'}/></span><br/><p className='knowmore'>know More</p><br/><br/>
                          <div>
                          <span >
                            <img  className='image2' src='https://img.freepik.com/free-photo/confident-young-businessman-suit-standing-with-arms-folded_171337-18599.jpg?w=360' alt='construction'/>
                          </span>
                          <span className='words3'>
                            <p >Beautifully designed, inside </p>
                            <p>and out,Studio looks every bit</p>
                            <p>as powerful as it is.</p> 
                            <p className='words4'>Only after destruction there is construction. The road to success is always under construction.If a building looks better under construction than it does when finished, then it's a failure.</p> <span ><img src={sign} alt='sign'/></span></span>
                            </div><br/><br/>
                            <div className='heading2'>
                              <span className='title4'>Our</span><span className='title5'>Clients</span><span className='title6'>Review</span>
                              <br/>
                              <br/>
                              <p className='title7'>Duane Neal</p>
                              <p>Product Designer,USA</p><br/>
                              <p className='words5'><span className='quote'>''</span>I'm a freelance fashion designer who specialises in print designs and combining fabrics.My design have been sold over Europe and the USA and i have worked with some of the biggest designers in the industry. I'm also currently working with a big supermarket to develop a gorgeous,yet affordable </p>
                              <span className='customer'>
                                <img className='customer1' src={smile4} alt='smile'/>
                              <img className='customer1' src={smile5} alt='smile'/>
                              <img className='customer2' src={smile4} alt='smile'/>
                              <img className='customer1' src={smile4} alt='smile'/>
                              <img className='customer1' src={smile5} alt='smile'/><br/><br/><br/>
                              <span className='c1'>
                                <span className='c2'><input type={'radio'}/></span> <span className='c2'><input type={'radio'}/></span><span className='c3'><input type={'radio'}/></span><span className='c2'><input type={'radio'}/></span><span className='c2'><input type={'radio'}/></span>
                                </span>
                              </span>
                              </div><br/>
                              <br/>
                              <br/>
                              <div className='heading3'>
                                <span className='words6'> Our</span><span className='words7'> Blog</span><br/>
                                <br/>
                                <span className='house'>
                                <div className='house1'>
                                  <img src={house1} alt='house'/>
                                </div><br/>
                                <span className='house2'>
                                  <img src={house4} alt='house'/>
                                  <img src={house4} alt='house'/>
                                  </span>
                                  <span className='house3'>
                                  <img src={house4} alt='house'/>
                                  <img src={house4} alt='house'/>
                                </span>
                                </span>
                              </div><br/><br/><br/>
                              <div className='emailpart'>
                                <div className='words8'>Every thing is about to change.</div><br/><br/>
                                <p className='words9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud execrition ullamco laboris</p>
                                 <br/>
                                 <span><input type={'email'} className='emailid1' placeholder='Email Address'/></span> <button className='btn1'>SUBSCRIBE</button>
                              </div>
                              <br/>
                              <div className='estate'>
                                <div className='estate0'>
                               <div className='estate1'> <img src={estate} alt='estate'/></div></div>
                               
                               <span className='estate2'><span className='titlenew1'>Wp</span><span className='titlenew'>  Real Estate</span></span>
                               <div className='new'> 
                               <span className='n'>HOME</span><span className='n'>ABOUT</span><span className='n'>AGENT</span><span className='n'>PROPERTIES</span><span className='n'>BLOG</span><span className='n'>CONTACT</span>
                               </div><br/><br/>
                               <div className='end'>
                               <span><p className='about'>ABOUT</p><p>ABOUT Studio</p><p> jobs</p><p> team</p><p>security</p></span>
                               <span><p className='about'>INFORMATION</p><p>customerService</p><p>Legal INFORMATION</p><p> Support</p><p>FAQ</p></span>
                               <span><p className='about'>RECENT NEWS</p><p>prion eror nisl,omare sed</p><p> Morbi placert accumsan nunc ,lacinia nisi</p></span>
                               <span><p className='about'>GET IN TOUCH</p><p>@san Fransisco,CA 123,Califorinia STP 2 Building</p><p>@WWW.Studiotheme.com</p><p> +1234567890</p></span>

                               </div>
                               </div>
                               <div className='navi1' >
          <nav>
            <div className='socialmedia1'  >
              <div className='socialmedia2' >
                      <ul class="nav justify-content-center">
                          <li class="nav-item"  >
                               <a class="navbar-text" href="google"><  AiFillGoogleCircle className='google'  size={'25'}/></a>
                            </li>
                               <li class="nav-item" >
                                    <a class="nav-text" color='white' href="printrest"><GrPinterest size={'25'} className='printrest'/></a>
                                </li>
                                  <li class="nav-item" >
                                        <a class="nav-text" href="twitter"><AiOutlineTwitter size={'25'}  className='twitter'/></a>
                                    </li>
                                      <li class="nav-item" >
                                         <a class="nav-text" href="fb"><RiFacebookCircleLine size={'25'} className='facebook'/></a>
                                           </li>
                                           <li class="nav-item" >
                                         <a class="nav-text" href="globe"><BsDribbble size={'25'} className='globe'/></a>
                                           </li>
                       </ul>
                       </div>
                       <p className='footerterms'>Privacy Policy|Terms & Condition</p>
                      </div>
          </nav>
          </div>

                    
          
        </div>
        </body>
    )
} export default Familypage;


