import React from 'react'
import $ from 'jquery'
import './banner.css'

$("span").on("mouseover", function(){
    $(this).css("color", "#d4af37");
})

$("span").on("mouseout", function(){
    $(this).css("color", "ivory");
})

const Banner = () => (
    <div>
        <h1 className="banner">
            <span>S</span><span>t</span><span>e</span><span>v</span><span>e</span>
            <span> </span>
            <span>G</span><span>o</span><span>j</span><span>k</span><span>o</span><span>v</span>
            <span> </span>
            <span>2</span><span>0</span><span>2</span><span>0</span>
        </h1>
    </div>
)

export default Banner