import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import Product from "./components/Product";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Tile from "./components/Tile";



function App() {
    return (
        <>

            <h1>Handbags & Purses</h1>
            <nav>

                <Button
                    className="button"
                    buttonText="to the collection">


                </Button>

                <Button className="button"
                        buttonText="shop all bags">


                </Button>
                <Button className="button"
                        buttonText="pre order"
                        toBeDisabled={true}>

                </Button>
                {/*<button onClick={()=>console.log("to the collection")} type="button">to the collection</button>*/}
                {/*<button type="button">shop all bags</button>*/}
                {/*<button type="button"disabled="true">pre order</button>*/}
            </nav>
            <main>
                <Product
                    label="Best seller"
                    img={bag1}
                    titel="The handy bag"
                    price="€400,-"

                />
                {/*<article>*/}
                {/*<span>Best seller</span>*/}
                {/*    <img src={bag1} alt="The handy bag."/>*/}
                {/*<p>The handy bag</p>*/}
                {/*<h4>€400</h4>*/}
                {/*</article>*/}

                <Product
                    label="Best seller"
                    img={bag2}
                    titel="The stylish bag"
                    price="€250,-"

                />
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag2} alt="The stylish bag."/>*/}
                {/*    <p>The stylish bag</p>*/}
                {/*    <h4>€250</h4>*/}
                {/*</article>*/}
                <Product
                    label="New collection"
                    img={bag3}
                    titel="The simple bag"
                    price="€300,-"

                />

                {/*<article>*/}
                {/*<span>New collection</span>*/}
                {/*    <img src={bag3} alt="The simple bag."/>*/}
                {/*<p>The simple bag</p>*/}
                {/*<h4>€300</h4>*/}
                {/*</article>*/}

                <Product
                    label="New collection"
                    img={bag4}
                    titel="The trendy bag"
                    price="€150,-"

                />

                {/*<article>*/}
                {/*    <span>New collection</span>*/}
                {/*    <img src={bag4} alt="The trendy bag."/>*/}
                {/*    <p>The trendy bag</p>*/}
                {/*    <h4>€150</h4>*/}
                {/*</article>*/}
            </main>
            <footer className="footer">

                <Tile
                    title="THE BRAND"
                    >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eveniet ut. Animi asperiores autem ipsam molestiae odit optio placeat quasi quisquam ratione veniam! Assumenda consequuntur dignissimos fuga illo molestiae?"</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eveniet ut. Animi asperiores autem ipsam molestiae odit optio placeat quasi quisquam ratione veniam! Assumenda consequuntur dignissimos fuga illo molestiae?"</p>
                </Tile>
                <Tile
                    img={brand}
                />

                <Tile
                    img={ourStory}/>

                <Tile
                    title="OUR STORY"
                        >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eveniet ut. Animi asperiores autem ipsam molestiae odit optio placeat quasi quisquam ratione veniam! Assumenda consequuntur dignissimos fuga illo molestiae?"</p>
                </Tile>

            </footer>


        </>
    );
}

export default App;



